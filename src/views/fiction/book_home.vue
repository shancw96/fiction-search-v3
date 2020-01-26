<template>
    <section>
        <article class=" border-box bgGrey" style="padding:  5px;min-height:100vh " v-if="!isLoadingBasic">
            <CellContainer style="overflow:hidden">
                <van-row class="textCenter border-box "
                    ><div class="pd10 font20 bold">{{ bookInfo.title }}</div></van-row
                >
                <van-row class="row1" type="flex" justify="space-between">
                    <van-col span="6">
                        <Img :imgSrc="bookInfo.img" />
                    </van-col>
                    <van-col span="17" class="pd10" style="color: rgb(90, 89, 89);">
                        <van-row class="font18 marginTop5">作者：{{ bookInfo.author }}</van-row>
                        <van-row class="font18 marginTop5">来源：{{ getHost(this.$route.query.link) }}</van-row>
                        <van-row class="marginTop10" type="flex" justify="flex-start">
                            <van-col v-for="(item, index) in bookInfo.tags" :key="index" style="margin-left:5px">
                                <van-tag plain type="success">{{ item }}</van-tag>
                            </van-col>
                        </van-row>
                    </van-col>
                </van-row>
                <van-row class="  row2 border-box marginTop10 " type="flex" justify="space-around">
                    <van-col span="7"
                        ><van-button plain style="width:100%;margin:0 auto" class="ellipsis" @click="addToBookShelf"
                            >加入书架</van-button
                        ></van-col
                    >
                    <van-col span="8"
                        ><van-button type="primary" style="width:100%;margin:0 auto;" @click="toContent"
                            >开始阅读</van-button
                        ></van-col
                    >
                    <van-col span="7"
                        ><van-button plain style="width:100%;margin:0 auto" class="ellipsis"
                            >离线下载</van-button
                        ></van-col
                    >
                </van-row>
            </CellContainer>

            <CellContainer class="marginTop15 ">
                <van-row><div class="subTitle">小说简介</div></van-row>
                <TextEllipsis class="grey" :article="this.bookInfo.desc" />
            </CellContainer>

            <CellContainer class="marginTop15" @click.native="toChapterList">
                <Cell textL="查看目录" :textR="this.bookInfo.update" />
            </CellContainer>

            <CellContainer class="marginTop15 ">
                <van-row><div class="subTitle ">小说预览</div></van-row>
                <van-row><div class=" grey">第一章</div></van-row>
                <TextEllipsis :article="this.chapterPreview" :isHmtl="true" class="grey font12" />
            </CellContainer>
        </article>
        <Loading v-else />
    </section>
</template>
<script>
import TextEllipsis from "../../components/common/textEllipsis";
import Cell from "../../components/common/cell";
import CellContainer from "../../components/common/cell_container";
import Img from "../../components/common/image";
import { getHostName } from "../../../utils/common";
import Loading from "../../components/common/loading_fullPage";

import { fetchBookHome, fetchBookChapterList, fetchBookContent } from "../../api/fiction";
import { mapActions, mapGetters } from "vuex";

import { findIndex, propEq, find } from "ramda";
export default {
    components: {
        TextEllipsis,
        Cell,
        CellContainer,
        Img,
        Loading
    },
    data() {
        return {
            bookInfo: {},
            chapterPreview: "",
            firstChapterInfo: "",
            bookChapterList: [],
            isLoadingBasic: false,
            chapterUrl: ""
        };
    },
    computed: {
        ...mapGetters(["currentView", "collectedFiction"])
    },
    methods: {
        ...mapActions(["insertCollected", "setCurrentView", "setCurrentViewFromCollected"]),
        async addToBookShelf() {
            this.insertCollected({ ...this.bookInfo, isCollected: true });
        },
        getHost() {
            return getHostName(this.$route.query.link);
        },
        toContent() {
            if (!this.bookInfo.recentRead) {
                this.$toast("正在加载中，请稍后再试");
            } else {
                this.setBookView();
                this.$router.push({ name: "fiction_content", query: { link: this.bookInfo.recentRead.href } });
            }
        },

        toChapterList() {
            this.$router.push({
                name: "fiction_chapterList",
                query: { chapterHref: this.chapterUrl },
                params: {
                    chapterList: this.bookInfo.chapterList,
                    title: this.bookInfo.title
                }
            });
        },
        setBookView() {
            if (this.collectedFiction) {
                let result = find(propEq("title", this.bookInfo.title))(this.collectedFiction);
                !result
                    ? this.setCurrentView({ ...this.bookInfo, isCollected: false })
                    : this.setCurrentViewFromCollected(this.bookInfo.title);
            } else {
                this.setCurrentView({ ...this.bookInfo, isCollected: false });
            }
        },
        async fetchContainer() {
            this.isLoadingBasic = true;
            const res = await fetchBookHome(this.$route.query.link);
            //留给章节列表使用
            this.chapterUrl = res.chapterList ? res.chapterList : this.$route.query.link;

            this.isLoadingBasic = false;
            this.bookInfo = res;
            //如果后台没有章节列表链接数据，则从 路由中获取

            const chapterList = await fetchBookChapterList(res.chapterList ? res.chapterList : this.$route.query.link);
            this.bookInfo = { ...res, chapterList, recentRead: chapterList[0],chapterListLink:res.chapterList ? res.chapterList : this.$route.query.link };

            this.setBookView();

            //第一章节预览
            if (this.getHost(this.$route.query.link) === "fpzw") {
                this.bookInfo.recentRead.href = res.chapterList + this.bookInfo.recentRead.href;
            }
            //对2k小说做chapterList的适配
            const { text } = await fetchBookContent(this.bookInfo.recentRead.href);
            this.chapterPreview = text;
            console.log(this.bookInfo);
        }
    },
    mounted() {
        this.fetchContainer();
    }
};
</script>
<style lang="scss" scoped>
.row1 {
    height: 18vh;
    background-color: #fff;
}
.row2 {
    height: 10vh;
    align-items: center;
    background-color: #fff;
}

.row {
    background-color: #fff;
}
.redBorder {
    border: 1px solid red;
    height: 100%;
}
</style>
