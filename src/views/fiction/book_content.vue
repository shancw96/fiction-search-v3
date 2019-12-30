<template>
    <article ref="container">
        <section :class="['navguideContainer', 'slide-top', isActive ? 'active' : '']">
            <van-nav-bar title="标题" left-text="返回" left-arrow @click-right="changeCollect" @click-left="toHome">
                <van-icon name="star-o" v-if="isCollected" slot="right" size="20" />
                <van-icon name="star" v-else slot="right" size="20" />
            </van-nav-bar>
        </section>
        <section class="calloutBox" @click="showHeader"></section>
        <section class="box" v-for="(item, index) in boxList" :key="index" v-html="item"></section>
    </article>
</template>
<script>
import { fetchBookContent } from "../../api/fiction";
export default {
    data() {
        return {
            boxHeight: "",
            isFetching: false,
            boxList: [],
            startChapterIndex: 0,
            isActive: true,
            isCollected: false
        };
    },
    methods: {
        listenScroll() {
            if (
                window.scrollY + window.screen.height > document.body.clientHeight - window.screen.height * 0.7 &&
                !this.isFetching
            ) {
                console.log("triggle");
                this.isFetching = true;
                fetchBookContent(this.$route.query.link)
                    .then(res => {
                        this.boxList.push(res.text);
                        this.$route.query.link = res.next;
                        //上面代码可抽象
                        this.startChapterIndex++;
                        this.isFetching = false;
                    })
                    .catch(e => {
                        console.log(e);
                        this.isFetching = false;
                    });
            }
        },
        showHeader() {
            console.log("triggle");
            this.isActive = !this.isActive;
        },
        changeCollect() {
            console.log(this.isCollected);
            this.isCollected = !this.isCollected;
        },
        toHome() {
            this.$router.push({ name: "home" });
        }
    },
    mounted() {
        document.addEventListener("scroll", this.listenScroll);

        fetchBookContent(this.$route.query.link).then(res => {
            this.boxList.push(res.text);
            this.$route.query.link = res.next;
        });
    },
    updated() {
        // document.removeEventListener("scroll", this.listenScroll);
    },
    beforeDestroy() {
        document.removeEventListener("scroll", this.listenScroll);
    }
};
</script>
<style lang="scss" scoped>
.box {
    border: 1px solid red;
    // height: 900px;
}
.navguideContainer {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
}

.slide-top {
    opacity: 0;
    transform: translateY(-100%);
    transition: all 0.2s;
}
.active {
    opacity: 1;
    transform: translateY(0);
}
.calloutBox {
    position: fixed;
    top: 30%;
    left: 10%;
    // border: 1px solid red;
    width: 80vw;
    height: 50vh;
}
</style>
