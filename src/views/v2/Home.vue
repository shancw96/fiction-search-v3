<template>
    <article style="min-height:100vh ">
        <FictionEmpty v-if="!hasCollection" class="bgWhite" />
        <section v-else class="homeContainer">
            <section class="recentRead">
                <van-row style="margin:0 0 5vh 0 " type="flex" justify="space-between">
                    <van-col span="16" class="font18 bold" style="color:rgb(155, 155, 155)">让阅读成为一种习惯</van-col>
                    <van-col span="6">
                        <van-row type="flex" justify="space-around">
                            <van-col><van-icon name="search" size="20" @click="toSearch"/></van-col>
                            <van-col> <van-icon name="apps-o" size="20"/></van-col>
                        </van-row>
                    </van-col>
                </van-row>
                <RecentRead @click="readBook" :recentReadBook="recentReadBook" />
                <InfoBar class="infoList" />
            </section>

            <section class="collection">
                <transition-group name="list-complete">
                    <!-- 收藏小说列表 -->
                    <div
                        :class="['fictionInnerContainer', 'list-complete-item']"
                        v-for="(item, index) in collectedFiction"
                        :key="item.img"
                        v-show="index > 0"
                    >
                        <Book :curBookInfo="item" @click.native="readBook(item)" />
                    </div>
                </transition-group>
            </section>
        </section>
    </article>
</template>
<script>
import Book from "@/components/fiction/book";
import FictionEmpty from "@/components/fiction/fiction_empty";
import Container from "@/components/common/cell_container";
import RecentRead from "@/components/fiction/recent_read";
import InfoBar from "@/components/common/info_bar";
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
            active: 0
        };
    },
    computed: {
        ...mapGetters(["collectedFiction"]),
        hasCollection() {
            //collectedFiction 不为空 才能获取length
            if (!this.collectedFiction) return false;
            return !!this.collectedFiction.length;
        },
        recentReadBook() {
            return this.collectedFiction[0];
        }
    },

    methods: {
        ...mapActions(["sortCollected", "setCurrentView"]),
        readBook(book) {
            this.sortCollected(book);
            this.setCurrentView({ ...book, isCollected: true });
            let timer = setTimeout(() => {
                this.$router.push({
                    name: "fiction_content",
                    query: { link: book.recentRead.href, title: book.title }
                });
                clearTimeout(timer);
            }, 0.4 * 1000);
        },
        toSearch() {
            this.$router.push({ name: "fiction_search" });
        }
    },
    mounted() {
        console.log(this.collectedFiction);
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
    padding-top: 6vh;
    position: relative;
    min-height: 100vh-$section1Height;
    background-image: linear-gradient(to bottom, #fdfcfb, #e2d1c3);
    color: #ddd;
    box-sizing: border-box;

    .fictionInnerContainer {
        width: 25%;
        // min-height: 50vh;
        margin-bottom: 40px;
        margin-left: 20px;
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
.list-complete-leave-active {
    position: absolute; //绝对定位，此处添加绝对定位可能会出问题
}
</style>
