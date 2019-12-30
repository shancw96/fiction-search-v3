<template>
    <section>
        {{ !!article ? "" : "loading..." }}
        <article :class="[isShowing ? '' : 'textElliplise']" @click="changeShowing" v-html="article"></article>
    </section>
</template>

<script>
export default {
    props: ["article"],
    data() {
        return {
            isShowing: false
        };
    },
    methods: {
        changeShowing() {
            this.isShowing = !this.isShowing;
        }
    }
};
</script>

<style lang="scss" scoped>
.textElliplise {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10;
    overflow: hidden;
}
</style>
