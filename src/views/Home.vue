<template>
    <article class="bgGrey pd5" style="min-height:100vh ">
        <FictionEmpty v-if="true" class="bgWhite" />
        <section v-else>
            <Container class="bgWhite" style="padding:30px">
                <van-row style="margin:0 0 40px 0 " type="flex" justify="space-between">
                    <van-col span="16" class="font18 bold" style="color:rgb(155, 155, 155)">让阅读成为一种习惯</van-col>
                    <van-col span="6">
                        <van-row type="flex" justify="space-around">
                            <van-col><van-icon name="search" size="20"/></van-col>
                            <van-col> <van-icon name="apps-o" size="20"/></van-col>
                        </van-row>
                    </van-col>
                </van-row>
                <van-row type="flex" justify="space-between">
                    <van-col span="8"> <Book imgHeight="135px" imgWidth="105px" :curBookInfo="{}"/></van-col>
                    <van-col
                        span="14"
                        class=""
                        style="display:flex;flex-direction:column;justify-content:space-around;padding:20px 0"
                    >
                        <van-row class="">123</van-row>
                        <van-row class="">123</van-row>
                        <van-row class="">123</van-row>
                    </van-col>
                </van-row>
            </Container>
            <Container class="bgWhite collected marginTop10">
                <transition-group name="list-complete">
                    <!-- 收藏小说列表 -->
                    <div
                        :class="['fictionInnerContainer', 'list-complete-item']"
                        v-for="(item, index) in 5"
                        :key="item"
                        v-show="index > 0"
                    >
                        <Book :curBookInfo="{}" />
                    </div>
                </transition-group>
            </Container>
        </section>
    </article>
</template>
<script>
import Book from "../components/fiction/book";
import FictionEmpty from "../components/fiction/fiction_empty";
import Container from "../components/common/cell_container";
export default {
    components: {
        FictionEmpty,
        Book,
        Container
    },
    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
$recentReadHeight: 40vh;
.collected {
    position: relative;
    padding-top: 20px;
    background: #fff;
    color: #ddd;
    box-sizing: border-box;
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: flex-start;
    // align-content: flex-start;
    .fictionInnerContainer {
        width: 25%;
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
