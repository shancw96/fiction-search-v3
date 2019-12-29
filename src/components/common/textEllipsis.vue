<template>
    <article :class="[isShowing ? '' : 'textElliplise']" @click="changeShowing">
        {{ !!article ? article : "loading" }}
    </article>
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
    -webkit-line-clamp: 6;
    overflow: hidden;
}
</style>
