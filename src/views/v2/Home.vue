<template>
    <article style="min-height:100vh ">
        <FictionEmpty v-if="!hasCollection" class="bgWhite" />
        <section v-else class="homeContainer">
            <section class="recentRead">
                <van-row style="margin:0 0 5vh 0 " type="flex" justify="space-between">
                    <van-col
                        span="16"
                        class="font18 bold"
                        style="color:rgb(155, 155, 155)"
                        @click="activeSidebar"
                        :class="[isActiveIcon.userBar ? 'animate_zoom' : '']"
                    >
                        {{ !!isLogin ? JWT.userName : "立即登录" }}</van-col
                    >
                    <van-col span="6">
                        <van-row type="flex" justify="space-around">
                            <van-col><van-icon name="search" size="20" @click="toSearch"/></van-col>
                            <van-col>
                                <van-icon
                                    name="arrow-up"
                                    size="20"
                                    @click="testUpload"
                                    :class="[isActiveIcon.upload ? 'animate_zoom' : '']"
                            /></van-col>
                            <van-col>
                                <van-icon
                                    name="down"
                                    size="20"
                                    @click="testDownLoad"
                                    :class="[isActiveIcon.download ? 'animate_zoom' : '']"
                            /></van-col>
                            <van-col>
                                <van-icon name="apps-o" size="20" @click="toggleDeleteBook" />
                            </van-col>
                        </van-row>
                    </van-col>
                </van-row>
                <RecentRead
                    @click="readBook"
                    :recentReadBook="recentReadBook"
                    :isEditingBook="isEditingBooks"
                    :deleteBook="deleteBook"
                />
                <InfoBar class="infoList" />
            </section>

            <section class="collection">
                <section class="transitionWrapper">
                    <!-- 收藏小说列表 -->
                    <div
                        :class="['fictionInnerContainer', 'list-complete-item']"
                        v-for="(item, index) in collectedFiction"
                        :key="item.desc"
                        v-show="index > 0"
                    >
                        <Book
                            :curBookInfo="item"
                            @click.native="readBook(item)"
                            :isEditingBook="isEditingBooks"
                            :deleteBook="deleteBook"
                        />
                    </div>
                </section>
            </section>
        </section>
        <section class="leftPopup">
            <van-popup
                v-model="isActiveSideBar"
                position="bottom"
                style="widht:100%;padding:5vw;box-sizing:border-box;"
                round
            >
                <div class="pageControl">
                    <van-cell title="楷体" style="display:flex;align-items:center;">
                        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                        <van-switch
                            slot="right-icon"
                            :value="isAcitveKaiTi"
                            @input="flag => updatePageControl('fontFamily', flag ? '楷体' : '')"
                        />
                    </van-cell>
                    <van-cell title="字体大小" style="display:flex;align-items:center;">
                        <van-stepper
                            :value="pageControl.fontSize"
                            @change="value => updatePageControl('fontSize', value)"
                        />
                    </van-cell>
                    <van-cell title="自动上传" style="display:flex;align-items:center;">
                        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                        <van-switch slot="right-icon" :value="isAutoUpload" @input="toggleAutoUpload" />
                    </van-cell>
                </div>
                <div>
                    <van-button round type="danger" style="width:100%;margin-top:10px" @click="logout"
                        >注销登录</van-button
                    >
                </div>
            </van-popup>
        </section>
    </article>
</template>
<script>
import Book from "@/components/fiction/book";
import FictionEmpty from "@/components/fiction/fiction_empty";
import Container from "@/components/common/cell_container";
import RecentRead from "@/components/fiction/recent_read";
import InfoBar from "@/components/common/info_bar";
import { uploadFiction, downloadFiction } from "@/api/user";
import { mapGetters, mapActions } from "vuex";

export default {
    components: {
        FictionEmpty,
        RecentRead,
        Book,
        InfoBar
    },
    data() {
        return {
            isActiveIcon: {
                upload: false,
                download: false,
                userBar: false
            },
            isActiveSideBar: false,

            /****page control 代替 */

            fontSize: 16,
            activeFontType: "楷体",

            isEditingBooks: false
        };
    },
    computed: {
        ...mapGetters(["collectedFiction", "JWT", "pageControl", "isAutoUpload", "lastestUploadTime"]),
        isAcitveKaiTi() {
            return this.pageControl.fontFamily === "楷体";
        },
        hasCollection() {
            //collectedFiction 不为空 才能获取length
            if (!this.collectedFiction) return false;
            return !!this.collectedFiction.length;
        },
        recentReadBook() {
            return this.collectedFiction[0];
        },
        isLogin() {
            return !!this.JWT.userName;
        }
    },
    methods: {
        ...mapActions([
            "sortCollected",
            "setPageControl",
            "setCurrentView",
            "resetCollected",
            "setToken",
            "toggleAutoSave",
            "updateUploadTime",
            "deleteCollected"
        ]),
        toggleDeleteBook() {
            this.isEditingBooks = !this.isEditingBooks;
        },
        deleteBook(bookName) {
            return this.deleteCollected(bookName);
        },
        toggleAutoUpload() {
            this.toggleAutoSave(!this.isAutoUpload);
        },
        updatePageControl(type, value) {
            this.setPageControl({ ...this.pageControl, [type]: value });
        },
        logout() {
            this.setToken({});
            this.$router.push({ name: "login" });
        },
        activeSidebar() {
            this.isActiveIcon.upload = true;
            this._animateClick("userBar");
            if (!this.isLogin) this.$router.push({ name: "login" });
            else {
                this.isActiveSideBar = true;
            }
        },
        readBook(book) {
            this.sortCollected(book);
            this.setCurrentView({ ...book, isCollected: true });
            this.$router.push({
                name: "fiction_content",
                query: { link: book.recentRead.href, title: book.title }
            });
        },
        toSearch() {
            this.$router.push({ name: "fiction_search" });
        },
        testUpload() {
            if (!this._verifyAuth()) return;
            this._animateClick("upload");
            this.$toast("正在尝试上传...");
            uploadFiction({ books: this.collectedFiction })
                .then(res => {
                    this.updateUploadTime(Date.now());
                    this.$toast(res.msg);
                })
                .catch(e => {
                    this.$toast("上传失败");
                });
        },
        testDownLoad() {
            if (!this._verifyAuth()) return;
            this._animateClick("download");
            // this.isActiveDownload = !this.isActiveDownload
            this.$toast("正在尝试下载...");
            downloadFiction()
                .then(res => {
                    this.$toast("下载成功");
                    this.resetCollected(res.books);
                })
                .catch(e => {
                    this.$toast("下载失败");
                });
        },
        _animateClick(type) {
            this.isActiveIcon[type] = true;
            this._delayRun(() => {
                this.isActiveIcon[type] = false;
            }, 1000 * 0.5);
        },
        _delayRun(fn, ms) {
            const timer = setTimeout(() => {
                fn();
                clearTimeout(timer);
            }, ms);
        },
        _verifyAuth() {
            if (!this.isLogin) {
                this.$toast("请先登录");
                return false;
            } else {
                return true;
            }
        },
        async autoUploadFile(period) {
            if (Date.now() < this.lastestUploadTime + period * 60 * 1000) return;
            this.testUpload();
        }
    },
    mounted() {
        this.autoUploadFile(15);
    }
};
</script>
<style lang="scss" scoped>
$section1Height: 38vh;
.homeContainer {
    background-color: #fff;
    width: 100vw;
    .recentRead {
        position: relative;
        box-sizing: border-box;
        background-image: linear-gradient(to right, #e3fdf5, #ffe6fa);
        padding: 2vh 2vw;
        // border: 1px solid red;
        height: $section1Height;
        width: 100%;
    }
}

.infoList {
    position: absolute;
    bottom: -17px;
    left: 5vw;
}

.collection {
    padding: 0vh 2vw;
    padding-top: 6vh;
    position: relative;
    min-height: 100vh-$section1Height;
    background-image: linear-gradient(to bottom, #fdfcfb, #e2d1c3);
    color: #ddd;
    box-sizing: border-box;
    .transitionWrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &::after {
            width: 25%;
            margin: 0 4vw;
            content: "";
        }
    }
    .fictionInnerContainer {
        width: 25%;
        // min-height: 50vh;
        margin: 3vh 4vw;
    }
    .collected-book {
        // box-sizing:border-box;
        width: 90px;
        height: 120px;
        .search-book {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            // border:1px solid red;
            border-radius: 5px;
            box-shadow: 1px 1px 5px #ddd;
        }
    }
}
// 小说列表动画过度
.list-complete-item {
    display: inline-block;
    transition: all 0.5s;
}
.list-complete-enter,
.list-complete-leave-to {
    opacity: 0;
    transform: translateY(15px);
}
.list-complete-leave {
    position: absolute; //绝对定位，此处添加绝对定位可能会出问题
}
</style>
