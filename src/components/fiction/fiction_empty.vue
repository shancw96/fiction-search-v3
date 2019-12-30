<template>
    <div class="fiction-empty">
        <section class="empty-img">
            <img src="../../../public/img/common/book-empty.jpg" />
        </section>
        <section style="text-align:center;margin-top:100px;">
            <van-button type="primary" style="border-radius:5px" @click="jumpToSearch">立即搜索 !</van-button>
        </section>
    </div>
</template>
<script>
export default {
    methods: {
        jumpToSearch() {
            this.$router.push({ name: "fiction_search" });
        }
    }
};
</script>

<style lang="scss" scoped>
.fiction-empty {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .empty-img {
        text-align: center;
        img {
            width: 80%;
            height: 100%;
        }
    }
}
</style>
