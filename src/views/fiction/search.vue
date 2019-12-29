<template>
    <article style="box-sizing:border-box">
        <van-row>
            <van-col span="4">
                <van-dropdown-menu>
                    <van-dropdown-item
                        v-model="accurateSearch"
                        :options="websiteName"
                        @change="dropDownChange"
                    />
                </van-dropdown-menu>
            </van-col>
            <van-search
                v-model="keyword"
                placeholder="请输入搜索关键词"
                show-action
                @search="onSearch"
                @cancel="onCancel"
            />
        </van-row>
        <van-loading size="24px" v-if="isLoading">加载中...</van-loading>
        <section v-if="!isLoading && !showRecommand">
            <van-tabs animated swipeable>
                <van-tab
                    v-for="(fictionArr, index) in searchList"
                    :title="getHostName(fictionArr[0].chapterList)"
                    :key="index"
                >
                    <van-row v-for="(item, index) in fictionArr" :key="index">
                        <FicitonCard
                            :index="index"
                            :imgSrc="item.img"
                            :title="item.title"
                            :desc="item.author"
                            :chapterList="item.chapterList"
                            :hasSideCount="true"
                        />
                    </van-row>
                </van-tab>
            </van-tabs>
        </section>
        <section v-if="showRecommand" class="contentWrapper">
            <div style="font-size:16px;color:#f9ca24;padding:10px">热搜榜</div>
            <van-row v-for="(item, index) in recommandList" :key="index">
                <FicitonCard
                    :index="index"
                    :imgSrc="item.img"
                    :title="item.title"
                    :desc="item.desc"
                    :chapterList="item.chapterList"
                    :hasSideCount="true"
                />
            </van-row>
        </section>
    </article>
</template>
<script>
import { fetchRecommand, fetchSearchKeyword } from "../../api/fiction";
import FicitonCard from "../../components/fiction/fiction_card";
import { isEmpty, getHostName } from "../../../utils/common";
export default {
    components: {
        FicitonCard
    },
    data() {
        return {
            keyword: "",
            recommandList: [],
            websiteName: [
                { text: "全局", value: "all" },
                { text: "文桑", value: "wensang" },
                { text: "2k小说", value: "twoK" },
                { text: "笔趣阁", value: "biquge" }
            ],
            accurateSearch: "all",
            searchList: [],
            isLoading: false,
            showRecommand: true
        };
    },
    methods: {
        onCancel() {
            this.keyword = "";
        },

        dropDownChange(value) {
            console.log("TODO:其他网页爬取");
        },
        async getRecommand() {
            let res = await fetchRecommand();
            return res.slice(0, 10);
        },
        //onSearch ::keyword -> list
        async onSearch() {
            if (isEmpty(this.keyword)) {
                this.$toast("请输入想要搜索的内容");
            } else {
                this.showRecommand = false;
                this.isLoading = true;
                fetchSearchKeyword(this.keyword, this.accurateSearch).then(res => {
                    this.searchList = res;
                    console.log(this.searchList);
                    this.isLoading = false;
                });
            }
        },
        getHostName(website) {
            const dictionary = {
                wensang: "文桑",
                fpzw: "2k小说",
                biquge: "笔趣阁"
            };
            return dictionary[website.match(/(w+)(\.)([a-z]+)(\.)(com)/)[3]];
        } // ['www.xxx.com','www','.','xxx','.'.'com',.....]
    },
    mounted() {
        this.getRecommand().then(res => (this.recommandList = res));
    }
};
</script>

<style lang="scss" scoped></style>
