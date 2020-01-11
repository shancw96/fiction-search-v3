<template>
    <article class="wrapper">
        <section class="logoContainer box">
            <section class="logo">
                <img src="https://i.loli.net/2020/01/11/IWHL9kMlYd6ZzfG.jpg" alt="" />
            </section>
        </section>
        <section class="formContainer box">
            <section class="box form">
                <div class="triangle"></div>
                <div class="photo">
                    <van-icon name="friends" size="50" color="#bdc3c7" />
                </div>
                <div class="content">
                    <div class="inputWrapper">
                        <slot name="input" />
                    </div>
                </div>
                <section class="formButton">
                    <van-button @click="submitFn" type="primary" :round="true" style="width:50vw;">{{
                        isLogin ? "登录" : "注册"
                    }}</van-button>
                    <div
                        @click="toggleSubmit"
                        style="margin-top:8vw ;text-align:center;font-weight:bold;color:#f9ca24;font-size:12px"
                    >
                        切换{{ isLogin ? "注册" : "登录" }}
                    </div>
                </section>
            </section>
        </section>
    </article>
</template>
<script>
export default {
    props: {
        isLogin: {
            type: Boolean,
            default: true
        },
        submitFn: {},
        toggleSubmit: {
            type: Function
        }
    }
};
</script>
<style lang="scss" scoped>
$logoHeight: 35vh;
$formBgColor: #fff;
.wrapper {
    box-sizing: border-box;
    width: 100vw;
    min-height: 100vh;
    background-color: #f9ea8f;
    background-image: linear-gradient(315deg, #f9ea8f 0%, #aff1da 100%);
}
.logoContainer {
    box-sizing: border-box;
    width: 100%;
    height: $logoHeight;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo {
        width: 35vw;
        height: 35vw;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
.formContainer {
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh-$logoHeight; //80-35-10 = 35/2 = 17.5
    padding: 5vh 2vw;
    .form {
        width: 100%;
        position: relative;
        .triangle {
            position: absolute;
            top: -12.5vh;
            width: 0px;
            height: 0px;
            border-left: 96vw solid transparent;

            border-bottom: 12.5vh solid $formBgColor;
        }
        .photo {
            position: absolute;
            left: 39vw;
            top: -12.5vh;
            width: 20vw;
            height: 20vw;
            border-radius: 50%;
            box-shadow: 2px 2px 5px #bbb;
            background-color: #ecf0f1;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2;
        }
        .content {
            box-sizing: border-box;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            width: 100%;
            // min-height: 40vh;
            background-color: $formBgColor;
            box-shadow: 5px 5px 10px rgb(204, 203, 203);
            padding: 4vh 10vw 2vh 10vw;
            .inputWrapper {
                align-items: center;
                width: 100%;
                min-height: 25vh;
                input {
                    // color: #dfdfdf;
                    text-align: center;
                    width: 100%;
                    box-sizing: border-box;
                    margin: 20px 0;
                    background: none;
                    outline: none;
                    border: none;
                    border-bottom: 1px solid #dfdfdf;
                    // border-bottom: 0px;
                    &:focus {
                        transition: all 1s;
                        border-bottom: 1px solid #e6b710;
                    }
                }
                ::-webkit-input-placeholder {
                    color: #dfdfdf;
                }
            }
        }
        .formButton {
            bottom: -70px;
            position: absolute;
            left: 50%;
            transform: translate(-50%, 0); /* 50%为自身尺寸的一半 */
        }
    }
}
</style>
