<template>
    <van-row type="flex" justify="space-between">
        <van-col span="8" style="display:flex; justifyContent:center;align-items:center">
            <Book
                imgHeight="135px"
                imgWidth="105px"
                :curBookInfo="recentReadBook"
                @click.native="toBookContent"
                :hasTitle="false"
        /></van-col>
        <van-col
            span="14"
            class=""
            style="display:flex;flex-direction:column;justify-content:space-around;padding:10px 0"
        >
            <van-row class="ellipsis font18">{{ recentReadBook.title }}</van-row>
            <van-row class="ellipsis font14">作者：{{ recentReadBook.author }}</van-row>
            <van-row class="ellipsis font12">进度：{{ recentReadBook.recentRead.title }}</van-row>
            <van-row class="textElliplise2 font12 fontGrey ">{{ recentReadBook.desc }}</van-row>
        </van-col>
    </van-row>
</template>

<script>
import Book from "@/components/fiction/book";
export default {
    props: {
        recentReadBook: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    components: {
        Book
        // Container
    },
    methods: {
        toBookContent() {
            this.$emit("click", this.recentReadBook);
        }
    }
};
</script>
