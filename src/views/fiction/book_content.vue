<template>
    <article ref="container" class="bookContainer" :style="{ ...activeStyle, fontSize: `${activeStyle.fontSize}px` }">
        <van-row :class="['navguideContainer', 'slide-top', isHeaderActive ? 'active' : '']">
            <van-nav-bar :title="bookTitle" left-text="返回" left-arrow @click-left="toHome">
                <van-row slot="right" type="flex" justify="space-between">
                    <van-col span="5 ">
                        <van-icon name="setting-o" @click="showControlBar" size="20" />
                    </van-col>
                    <van-col>
                        <van-icon name="label-o" span="5" size="20" @click="showChapterList" />
                    </van-col>
                    <van-col @click="changeCollect" span="5">
                        <van-icon name="star" v-if="currentView.isCollected" size="20" />
                        <van-icon name="star-o" v-else size="20" />
                    </van-col>
                </van-row>
            </van-nav-bar>
        </van-row>
        <section class="calloutBox" @click="showHeader"></section>

        <section :style="{ fontFamily: activeStyle.fontFamily }" v-for="(item, index) in boxList" :key="index">
            <section style="height:40px;overflow:hidden;padding:10px">
                <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
                    {{ currentView.recentRead.title }}
                </van-divider>
            </section>

            <article v-html="item"></article>
        </section>

        <van-popup v-model="isControlBarActive" position="bottom" round :style="{ height: '30%' }">
            <section>
                <!-- 字体 -->
                <van-row type="flex" justify="space-between">
                    <van-col span="8"
                        ><van-button style="width:100%" @click="changeFontSize('decrease')">-</van-button></van-col
                    >
                    <van-col style="align-self:center;text-align:center;">字体大小：{{ activeStyle.fontSize }}</van-col>
                    <van-col span="8"
                        ><van-button style="width:100%" @click="changeFontSize('add')">+</van-button></van-col
                    >
                </van-row>
                <div class="confBlock"></div>
                <!-- 背景颜色 -->
                <section style="display:flex;flex-wrap:no-wrap;padding:10px;overflow:hidden">
                    <div style="align-self:center;text-align:center;">背景：</div>
                    <div style="display:flex;flex-wrap:no-wrap;">
                        <section
                            v-for="kind in styleControl.backgroundStyle"
                            :key="kind.backgroundColor"
                            style="padding:0 10px"
                        >
                            <div
                                class="singleColor"
                                :style="{ backgroundColor: kind.backgroundColor }"
                                @click="changeBgStyle(kind.backgroundColor)"
                            ></div>
                        </section>
                    </div>
                </section>
                <div class="confBlock"></div>
                <!-- 亮度 -->
                <section style="box-sizing: border-box;padding:10px">
                    <van-row type="flex" style="display:flex;align-items:center">
                        <van-col span="6">字体设置：</van-col>
                        <van-col span="6" class=""><van-button @click="changeFont('')">默认</van-button></van-col>
                        <van-col span="6" class="gb2312"
                            ><van-button @click="changeFont('楷体')">楷体</van-button></van-col
                        >
                    </van-row>
                </section>
            </section>
        </van-popup>

        <van-popup v-model="isChapterBarActive" position="right" :style="{ width: '70%', height: '100%' }">
            <ChapterList :isSidebar="true" @updateContent="jumpChapter" />
        </van-popup>
    </article>
</template>
<script>
import { fetchBookContent } from "../../api/fiction";
import { mapGetters, mapActions } from "vuex";
import { black } from "color-name";
import { find, propEq } from "ramda";
import ChapterList from "../../components/fiction/chapterList";
export default {
    components: {
        ChapterList
    },
    data() {
        return {
            boxHeight: "",
            isFetching: false,
            boxList: [],
            startChapterIndex: 0,

            isHeaderActive: false,
            isControlBarActive: false,
            isChapterBarActive: false,

            isCollected: false,

            styleControl: {
                backgroundStyle: [
                    {
                        backgroundColor: "#dff9fb ",
                        color: "rgb(45, 52, 54)"
                    },
                    {
                        backgroundColor: "rgb(199, 236, 238)",
                        color: "rgb(45, 52, 54)"
                    },
                    {
                        backgroundColor: "rgb(149, 175, 192)",
                        color: "rgb(45, 52, 54)"
                    },
                    {
                        backgroundColor: "rgb(30, 39, 46)",
                        color: "rgb(209, 216, 224)"
                    }
                ],
                fontSize: 16,
                localbrightness: 75
            },
            activeStyle: {}
        };
    },
    computed: {
        ...mapGetters(["currentView", "pageControl"]),
        bookTitle() {
            return this.$route.query.title;
        }
    },
    methods: {
        ...mapActions(["setCurrentView", "updateCollected", "deleteCollected", "insertCollected", "setPageControl"]),
        changeFont(fontName) {
            console.log("change font");
            this.activeStyle = { ...this.activeStyle, fontFamily: fontName };
            this.setPageControl(this.activeStyle);
        },
        listenScroll() {
            if (
                window.scrollY + window.screen.height > document.body.clientHeight - window.screen.height * 0.7 &&
                !this.isFetching
            ) {
                try {
                    this.getBookContent(this.$route.query.link);
                } catch (e) {
                    this.isFetching = false;
                }
            }
        },
        showHeader() {
            this.isHeaderActive = !this.isHeaderActive;
        },
        showControlBar() {
            this.isControlBarActive = !this.isControlBarActive;
        },
        showChapterList() {
            this.isChapterBarActive = !this.isChapterBarActive;
        },
        changeCollect() {
            //修改视图
            this.setCurrentView({ ...this.currentView, isCollected: !this.currentView.isCollected });

            //添加收藏与删除收藏对collectFiction的影响
            !this.currentView.isCollected
                ? this.deleteCollected(this.currentView.title)
                : this.insertCollected(this.currentView);
        },
        toHome() {
            this.$router.push({ name: "home" });
        },
        async getBookContent(url) {
            this.isFetching = true;
            const res = await fetchBookContent(url);
            this.isFetching = false;

            //设置当前视图
            this.setCurrentView({
                ...this.currentView,
                recentRead: {
                    href: url,
                    title: res.curTitle
                }
            });
            // 根据视图是否被收藏来决定是否加入collected，并每次保存
            if (this.currentView.isCollected) {
                this.updateCollected(this.currentView);
            }
            //加载新章节内容
            this.boxList.push(res.text);
            //下一章节的链接设置
            this.$route.query.link = res.next;

            console.log(this.currentView);
        },
        changeFontSize(mode) {
            mode == "add" ? (this.activeStyle.fontSize += 1) : (this.activeStyle.fontSize -= 1);
            this.setPageControl(this.activeStyle);
        },
        changeBgStyle(color) {
            let res = find(propEq("backgroundColor", color))(this.styleControl.backgroundStyle);
            // console.log(res);
            this.activeStyle = { ...this.activeStyle, ...res };
            this.setPageControl(this.activeStyle);
        },
        jumpChapter(url) {
            console.log(url);
            this.boxList = [];
            this.getBookContent(url);
        }
    },
    mounted() {
        this.activeStyle = this.pageControl;
        console.log(this.activeStyle);
        document.addEventListener("scroll", this.listenScroll);
        //每次刷新后，为了防止进度丢失，使用currentView 的数据
        this.$route.query.link = this.currentView.recentRead.href;
        this.getBookContent(this.$route.query.link);
    },
    beforeDestroy() {
        document.removeEventListener("scroll", this.listenScroll);
    }
};
</script>
<style lang="scss" scoped>
.gb2312 {
    font-family: "楷体";
}

.box {
    border: 1px solid red;
    // height: 900px;
}
.navguideContainer {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
}

.slide-top {
    opacity: 0;
    transform: translateY(-100%);
    transition: all 0.2s;
}
.active {
    opacity: 1;
    transform: translateY(0);
}
.calloutBox {
    position: fixed;
    top: 30%;
    left: 10%;
    // border: 1px solid red;
    width: 80vw;
    height: 50vh;
}
.bookContainer {
    background-attachment: fixed;
    // background-image: url("../../../public/img/common/book_old.jpeg");
    background-position: center;
    background-size: cover;
}
// *********************

.outter_container {
    background: rgb(250, 246, 237);
}
.block {
    width: 100%;
    height: 50px;
    background-color: rgb(250, 246, 237);
}
.container {
    height: 100vh;
}
.chapterContent {
    min-height: 100vh;
    background-color: rgb(250, 246, 237);
    color: rgb(101, 107, 113);
    padding: 0 10px;
    font-size: 17px;
    // position:fixed
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
}
.navbtnContainer {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 40px;
    padding: 5px;
    line-height: 40px;
    background-color: #fff;
}
.navguideContainer {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
}
.slide-in {
    opacity: 0;
    transform: translateY(100%);
    transition: all 0.2s;
}
.slide-top {
    opacity: 0;
    transform: translateY(-100%);
    transition: all 0.2s;
}
.active {
    opacity: 1;
    transform: translateY(0);
}
.callout {
    z-index: 2;
    // background: #ccc;
    position: fixed;
    left: 0%;
    top: 15%;
    width: 100%;
    height: 60vh;
}
.chapterContainer {
    position: fixed;
    right: 0;
    top: 0;
}
.singleColor {
    border-radius: 50%;
    height: 40px;
    width: 40px;
}
.confBlock {
    width: 100vw;
    height: 20px;
}
</style>
