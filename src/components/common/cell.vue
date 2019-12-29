<template>
    <van-row type="flex" justify="space-between" style="line-height:100%;height:100%;">
        <van-col span="8" class="ellipsis textLeft font18">{{ textL }}</van-col>
        <van-col span="8" class=" textRight">
            <van-row style="display:flex;">
                <van-col span="20"
                    ><span class="ellipsis font12 grey">{{ textR }}</span>
                </van-col>
                <van-col span="4"><van-icon class="grey " name="arrow"/></van-col>
            </van-row>
        </van-col>
    </van-row>
</template>
<script>
export default {
    props: ["textL", "textR"]
};
</script>
