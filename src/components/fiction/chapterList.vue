<template>
    <article class="container">
        <section v-if="!isLoading">
            <section class="header">
                <section class="fictionInfo">
                    <div class="fictionName">小说名称</div>
                    <div class="count">总章节数：xxx</div>
                </section>
                <section class="sort">
                    <van-icon name="bar-chart-o" size="20px" @click="reverseBook" />
                </section>
            </section>
            <van-list v-model="listDownLoading" :finished="listDownFinished" finished-text="没有更多了" @load="onLoad">
                <van-cell
                    :title="chapter.title"
                    v-for="(chapter, index) in showingList"
                    :key="index"
                    @click="toExactChapter(chapter)"
                    :class="[curReadTitle == chapter.title ? 'highlight' : '']"
                />
            </van-list>
            <div></div>
        </section>
        <section style="margin:50vh 0 0 25vw;" v-else>
            <van-loading size="24px" />
        </section>
    </article>
</template>

<script>
import { fetchBookChapterList } from "../../api/fiction";
import { pagingArr } from "../../../utils/common";
import { reverse } from "ramda";
export default {
    data() {
        return {
            chapterList: [],
            showingList: [],
            showFlag: "positive",
            isLoading: false,
            listDownLoading: false,
            listDownFinished: false,
            curReadTitle: "", //从localStorage中读取，能够显示
            pageIndex: 0,
            isSidebar: false
        };
    },
    computed: {
        negativePagingChapter() {
            return pagingArr(reverse(this.chapterList), 50);
        },
        positivePagingChapter() {
            return pagingArr(this.chapterList, 50);
        }
    },
    methods: {
        toExactChapter(chapter) {
            console.log(chapter);
            this.curReadTitle = chapter.title;
            !this.isSidebar
                ? this.$router.push({ name: "fiction_content", query: { link: chapter.href } })
                : console.log("TODO:页面内更改");
        },
        onLoad() {
            this.listDownLoading = true;
            const rawList = this.showFlag === "positive" ? this.positivePagingChapter : this.negativePagingChapter;
            this.showingList = [...this.showingList, ...rawList[this.pageIndex++]];
            this.listDownLoading = false;
            if (this.pageIndex > rawList.length) {
                this.listDownFinished = true;
            }
        },
        initShowing() {
            this.showingList = [];
            this.pageIndex = 0;
            this.onLoad();
        },
        reverseBook() {
            this.showFlag = "negative" === this.showFlag ? "positive" : "negative";
            this.initShowing();
        },
        async getBookChapter() {
            this.isLoading = true;
            const res = await fetchBookChapterList(this.$route.query.link);
            this.chapterList = res;
            this.isLoading = false;
        }
    },
    mounted() {
        this.getBookChapter();
    }
};
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100vh;
    background-color: #fff;
    .header {
        padding: 10px;
        display: flex;
        justify-content: space-between;
    }
    .fictionInfo {
        // height: 5vh;
        .fictionName {
            font-size: 20px;
            font-weight: bold;
        }
        .count {
            font-size: 12px;
            color: #ddd;
        }
    }
    .sort {
        vertical-align: bottom;
        align-self: flex-end;
    }
    .highlight {
        color: goldenrod !important;
    }
}
</style>
