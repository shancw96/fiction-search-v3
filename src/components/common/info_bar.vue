<template>
    <article>
        <section class="infoBar">
            <van-icon name="volume" class="info-item" color="green" style="position:absolute;left:-45%;" />
            <section class="item-container">
                <transition-group name="bounce">
                    <div class="info-item">111</div>
                </transition-group>
            </section>
            <van-icon name="arrow" style="opacity:0" />
        </section>
    </article>
</template>
<script></script>
<style lang="scss" scoped>
.infoBar {
    z-index: 999;
    border: 1px solid rgb(226, 225, 225);
    font-size: 14px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    width: 335px;
    height: 35px;
    border-radius: 20px;
    padding: 0 10px;
    background: #fbfbfb;
    display: flex;
    justify-content: center;
    box-shadow: 2px 2px 2px rgb(236, 236, 236);

    .item-container {
        height: 100%;
    }
    .info-item {
        width: 100%;
        height: 35px;
        line-height: 35px;
        text-align: center;
    }
}
</style>
