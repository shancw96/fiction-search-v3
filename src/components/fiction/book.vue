<template>
    <section :style="{ width: imgWidth, height: imgHeight }">
        <section class="myfictionWrapper" :class="[isEditingBook ? 'shaking' : '']">
            <div :class="['fiction-img', isReadingBook ? 'zoom-book' : '']" @click="animateBook">
                <van-image
                    width="100%"
                    height="100%"
                    :src="!!curBookInfo.img ? curBookInfo.img : 'https://i.loli.net/2019/12/29/Kjel2kduwQArxBR.jpg'"
                />
            </div>
            <div class="deleteIcon" v-if="isEditingBook">
                <a-icon type="close-circle" style="font-size:20px;" />
            </div>
            <div v-if="hasTitle" class="myFictionTitle">{{ curBookInfo.title }}</div>
        </section>
    </section>
</template>
<script>
export default {
    props: {
        imgWidth: {
            type: String,
            default: "90px"
        },
        imgHeight: {
            type: String,
            default: "120px"
        },
        hasTitle: {
            type: Boolean,
            default: true
        },
        curBookInfo: {
            type: Object,
            default() {
                return {};
            }
        },
        isEditingBook: {
            type: Boolean,
            defalut: false
        }
    },
    data() {
        return {
            isReadingBook: false
        };
    },
    methods: {
        animateBook() {
            this.isReadingBook = true;

            let timer = setTimeout(() => {
                this.isReadingBook = false;
                clearTimeout(timer);
            }, 1 * 1000);
        }
    }
};
</script>

<style lang="scss" scoped>
// $bookWidth:27vw;
.myfictionWrapper {
    width: 100%;
    height: 100%;
    position: relative;

    .fiction-img {
        border-radius: 3px;
        overflow: hidden;
        width: 100%;
        height: 100%;
        box-shadow: 2px 2px 5px rgb(131, 131, 131);
    }
    .deleteIcon {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
    }
    .myFictionTitle {
        padding: 5px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 13px;
        color: #606061;
    }
}
.shaking {
    animation: shaking 0.3s infinite linear reverse;
}
@keyframes shaking {
    0% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(1px);
    }
    50% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-1px);
    }
}

.zoom-book {
    animation: zoomBook 0.3s linear;
    // animation-direction: reverse;
}
@keyframes zoomBook {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
</style>
