<template>
    <article>
        <Login :isLogin="isLogin" :submitFn="submit" :toggleSubmit="toggleSubmit">
            <template v-slot:input>
                <input type="text" v-model="userName" placeholder="输入你的用户名" />
                <input type="password" v-model="passwd" placeholder="输入你的密码" />
            </template>
        </Login>
    </article>
</template>
<script>
import { login, register } from "../api/user";
import Login from "../components/login";
import { mapActions, mapGetters } from "vuex";

export default {
    components: {
        Login
    },
    data() {
        return {
            userName: "",
            passwd: "",
            isLogin: true
        };
    },
    computed: {
        ...mapGetters(["collectedFiction"])
    },
    methods: {
        ...mapActions(["setToken", "resetCollected"]),
        async submit() {
            const res = this.isLogin
                ? await login(this.userName, this.passwd)
                : await register(this.userName, this.passwd);

            if (this.isLogin && res.status === "success") {
                this.setToken({
                    token: res.token,
                    userName: res.data.userName
                });
                //如果收藏夹为空，那么将云端的数据合并到空的收藏夹
                !this.collectedFiction.length ? this.resetCollected(res.data.books) : "";
                this.$router.push({ name: "home" });
            } else {
                this.$toast(res.msg);
                this.isLogin = true;
            }
        },
        toggleSubmit() {
            this.isLogin = !this.isLogin;
        }
    }
};
</script>
