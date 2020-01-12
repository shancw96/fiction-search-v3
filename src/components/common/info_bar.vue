<template>
    <article>
        <section class="infoBar">
            <van-row span="4" justify="space-around">
                <van-icon name="volume" class="info-item" color="green" />
            </van-row>
            <van-row class="item-container" span="16">
                <transition-group name="bounce">
                    <div class="info-item" v-for="(item, index) in infoList" :key="item" v-show="index == displayIndex">
                        {{ item }}
                    </div>
                </transition-group>
            </van-row>
        </section>
    </article>
</template>
<script>
export default {
    props: {
        infoList: {
            type: Array,
            default() {
                return [""];
            }
        }
    },
    computed: {
        displayLen() {
            return this.infoList.length;
        }
    },
    data() {
        return {
            displayTimer: null,
            displayIndex: 0
        };
    },
    mounted() {
        this.displayTimer = setInterval(() => {
            this.displayIndex === this.infoList.length ? (this.displayIndex = 0) : (this.displayIndex += 1);
        }, 2000 * 1);
    },

    beforeDestroy() {
        clearInterval(this.displayTimer);
    }
};
</script>
<style lang="scss" scoped>
.infoBar {
    z-index: 999;
    border: 1px solid rgb(226, 225, 225);
    font-size: 14px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    width: 90vw;
    height: 5vh;
    padding: 0 2vw;
    border-radius: 5vw;
    background: #fbfbfb;
    display: flex;
    // justify-content: center;
    box-shadow: 2px 2px 2px rgb(236, 236, 236);

    .item-container {
        height: 100%;
        width: 100%;
    }
    .info-item {
        width: 100%;
        height: 5vh;
        line-height: 5vh;
        text-align: center;
    }
}
</style>
