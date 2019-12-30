<template>
    <article class=" border-box bgGrey" style="padding:  5px;min-height:100vh ">
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
                <van-col span="6"><van-button plain style="width:100%;margin:0 auto">加入书架</van-button></van-col>
                <van-col span="10"
                    ><van-button type="primary" style="width:100%;margin:0 auto" @click="toContent"
                        >开始阅读</van-button
                    ></van-col
                >
                <van-col span="6"><van-button plain style="width:100%;margin:0 auto">离线下载</van-button></van-col>
            </van-row>
        </CellContainer>

        <CellContainer class="marginTop15 ">
            <van-row><div class="subTitle">小说简介</div></van-row>
            <TextEllipsis class="grey" :article="this.bookInfo.desc" />
        </CellContainer>

        <CellContainer class="marginTop15" @click.native="toChapterList">
            <Cell textL="查看目录" textR="更新于下午sss" />
        </CellContainer>

        <CellContainer class="marginTop15 ">
            <van-row><div class="subTitle ">小说预览</div></van-row>
            <van-row><div class=" grey">第一章</div></van-row>
            <TextEllipsis :article="this.chapterPreview" :isHmtl="true" class="grey font12" />
        </CellContainer>
    </article>
</template>
<script>
import TextEllipsis from "../../components/common/textEllipsis";
import Cell from "../../components/common/cell";
import CellContainer from "../../components/common/cell_container";
import Img from "../../components/common/image";
import { getHostName } from "../../../utils/common";

import { fetchBookHome, fetchBookChapterList, fetchBookContent } from "../../api/fiction";
export default {
    components: {
        TextEllipsis,
        Cell,
        CellContainer,
        Img
    },
    data() {
        return {
            bookInfo: {},
            chapterPreview: "",
            firstChapterInfo: ""
        };
    },
    methods: {
        getHost() {
            return getHostName(this.$route.query.link);
        },
        toContent() {
            if (!this.firstChapterInfo) {
                this.$toast("正在加载中，请稍后再试");
            } else {
                this.$router.push({ name: "fiction_content", query: { link: this.firstChapterInfo.href } });
            }
        },
        toChapterList() {
            this.$router.push({
                name: "fiction_chapterList",
                query: { link: this.bookInfo.chapterList ? this.bookInfo.chapterList : this.$route.query.link }
            });
        },
        async fetchContainer() {
            const res = await fetchBookHome(this.$route.query.link);
            this.bookInfo = { ...res, chapterList: res.chapterList ? res.chapterList : this.$route.query.link };
            const bookList = await fetchBookChapterList(this.bookInfo.chapterList);
            this.firstChapterInfo = bookList[0];
            const { text } = await fetchBookContent(bookList[0].href);
            this.chapterPreview = text;
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
