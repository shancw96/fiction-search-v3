<template>
    <van-row class="fictionWrapper" @click="toBookDetail">
        <van-col
            v-if="!!hasSideCount"
            span="2"
            style="vertical-align:middle;text-align:center;font-weight:bold"
            :class="[index < 3 ? 'highlight' : '']"
            >{{ index + 1 }}</van-col
        >
        <van-col style="margin:5px" span="4">
            <div class="imgWrapper">
                <img
                    :src="
                        !!imgSrc
                            ? imgSrc
                            : 'https://i.loli.net/2019/12/29/Kjel2kduwQArxBR.jpg'
                    "
                />
            </div>
        </van-col>
        <van-col span="16">
            <van-row style="font-weight:bold;font-size:18px">{{ title }}</van-row>
            <van-row
                class="ellipsis"
                style="font-size:14px;color:#ced6e0;margin-top:5px"
                >{{ desc }}</van-row
            >
        </van-col>
    </van-row>
</template>
<script>
export default {
    props: ["imgSrc", "title", "desc", "index", "hasSideCount", "chapterList"],
    data() {
        return {};
    },
    methods: {
        toBookDetail() {
            this.$router.push({ name: "fiction_home" });
        }
    }
};
</script>
<style lang="scss" scoped>
.fictionWrapper {
    width: 100vw;
    height: 12vh;
    display: flex;
    flex-direction: row;
    align-items: center;

    .imgWrapper {
        height: 10vh;
        width: 14vw;
        border-radius: 5px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
.highlight {
    color: #f39c12;
}
</style>
