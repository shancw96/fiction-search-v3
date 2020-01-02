<template>
    <article class="container">
        <section v-if="!isLoading">
            <van-sticky>
                <section class="header">
                    <section class="fictionInfo">
                        <div class="fictionName">{{ bookTitle }}</div>
                        <div class="count">总章节数：{{ chapterLen }}</div>
                    </section>
                    <section class="sort">
                        <van-icon name="bar-chart-o" size="20px" color="#fff" @click="reverseBook" />
                    </section>
                </section>
            </van-sticky>

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
import { findIndex, propEq, find } from "ramda";
import { mapActions, mapGetters } from "vuex";
export default {
    props: {
        jumpChapter: {
            type: Function,
            default: () => {
                console.log("should be called!");
            }
        },
        isSidebar: {
            type: Boolean,
            default: false
        }
    },
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

            bookInfo: {}
        };
    },
    computed: {
        ...mapGetters(["currentView", "collectedFiction"]),
        negativePagingChapter() {
            return pagingArr(reverse(this.chapterList), 50);
        },
        positivePagingChapter() {
            return pagingArr(this.chapterList, 50);
        },
        chapterLen() {
            return this.chapterList.length;
        },
        bookTitle() {
            return this.$route.params.title;
        },
        _chapterList() {
            const list = this.$route.params.chapterList || this.currentView.chapterList;
            return list;
        }
    },
    methods: {
        toExactChapter(chapter) {
            this.curReadTitle = chapter.title;
            !this.isSidebar
                ? this.$router.push({ name: "fiction_content", query: { link: chapter.href } })
                : this.$emit("updateContent", chapter.href);
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
            const res = this._chapterList || (await fetchBookChapterList(this.$route.query.chapterHref));
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
        z-index: 2;
        background-color: #1e90ff;
        padding: 10px;
        display: flex;
        justify-content: space-between;
    }
    .fictionInfo {
        // height: 5vh;

        .fictionName {
            font-size: 20px;
            font-weight: bold;
            color: #fff;
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
