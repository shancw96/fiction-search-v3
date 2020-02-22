<template>
    <section>
        <h1>查看用户列表信息</h1>
        <button @click="getUserInfo">点击查看</button>
        <section v-for="(userInfo,index) in this.userInfoList" :key="index">
            <p>ip:{{userInfo.ip}}</p>
            <p>时间：{{userInfo.ipInfo.time}}</p>
            <p>省：{{userInfo.ipInfo.ipInfo.region}}</p>
            <p>市：{{userInfo.ipInfo.ipInfo.city}}</p>
        </section>
    </section>
</template>
<script>
import { getTodaysUserInfo } from "../api/user";
export default {
    data(){
        return {
            userInfoList:[]
        }
    },
    methods:{
        getUserInfo(){
            getTodaysUserInfo().then(res=>{
                this.userInfoList = res
            })
        }
    }
}
</script>