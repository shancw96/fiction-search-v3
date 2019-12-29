<template>
    <img :src="!!imgSrc ? imgSrc : 'https://i.loli.net/2019/12/29/Kjel2kduwQArxBR.jpg'" />
</template>

<script>
export default {
    props: ["imgSrc"]
};
</script>
<style lang="scss" scoped>
img {
    width: 100%;
    height: 100%;
}
</style>
