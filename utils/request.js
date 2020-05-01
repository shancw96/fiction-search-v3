/*
    封装与服务器端的交互
*/
import axios from "axios";
const TIMEOUT = 1000 * 20; // 请求timeout: 时间

/**
 *
 * 创建axios实例
 */
const service = axios.create({
    baseURL: process.env.BASE_URL, // api的base_url
    timeout: TIMEOUT, // request timeout
    // withCredentials: false, //  跨域安全策略 需要与后台协商
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    }
});

/**
 * 请求(request)拦截器
 */
service.interceptors.request.use(
    config => {
        // TODO：这里可以对正在加载的数据提供loading提示
        // TODO：这里可以对Token进行验证
        // TODO：这里可以对GET/POST的数据进行统一处理
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

/**
 * 响应(respone)拦截器
 */
service.interceptors.response.use(
    res => {
        return res.data;
    },
    error => {
        // 对相应错误做些什么
        return Promise.reject(error);
    }
);

export default service;
