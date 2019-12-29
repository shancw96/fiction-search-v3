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
                    ><van-button type="primary" style="width:100%;margin:0 auto">开始阅读</van-button></van-col
                >
                <van-col span="6"><van-button plain style="width:100%;margin:0 auto">离线下载</van-button></van-col>
            </van-row>
        </CellContainer>

        <CellContainer class="marginTop15 grey">
            <van-row><div class="subTitle">小说简介</div></van-row>
            <TextEllipsis :article="this.bookInfo.desc" />
        </CellContainer>

        <CellContainer class="marginTop15">
            <Cell textL="查看目录" textR="更新于下午sss" />
        </CellContainer>

        <CellContainer class="marginTop15 ">
            <van-row><div class="subTitle grey">小说预览</div></van-row>
            <TextEllipsis :article="this.bookInfo.desc" class="grey" />
        </CellContainer>
    </article>
</template>
<script>
import TextEllipsis from "../../components/common/textEllipsis";
import Cell from "../../components/common/cell";
import CellContainer from "../../components/common/cell_container";
import Img from "../../components/common/image";
import { getHostName } from "../../../utils/common";

import { fetchBookHome } from "../../api/fiction";
export default {
    components: {
        TextEllipsis,
        Cell,
        CellContainer,
        Img
    },
    data() {
        return {
            bookInfo: {}
        };
    },
    methods: {
        getHost() {
            return getHostName(this.$route.query.link);
        }
    },
    mounted() {
        // console.log(this.$route.query);
        fetchBookHome(this.$route.query.link).then(res => {
            this.bookInfo = { ...res };
            console.log(this.bookInfo);
        });
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
