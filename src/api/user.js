import request from "../../utils/request";
//这一步在初始化的时候就已经执行，这时候如果获取的参数是需要异步读取的，那么会是undefined
/**
 * 登录，获取token
 * @param {String} userName
 * @param {String} passwd String
 * @returns {Promise} resolved
 */
export const login = (userName, passwd) =>
    request({
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        url: "user/login",
        data: {
            userName,
            passwd
        }
    });

/**
 * 注册
 * @param {String} userName
 * @param {String} passwd
 *  * @returns {Promise} resolved
 */
export const register = (userName, passwd) =>
    request({
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        url: "user/register",
        data: {
            userName,
            passwd
        }
    });

export const uploadFiction = data => {
    const { value: jwt } = JSON.parse(window.localStorage.getItem("token"));
    return request({
        method: "post",
        headers: {
            "Content-Type": "application/json",
            authorization: jwt.token
        },
        url: "user/storeToCloud",
        data
    });
};
export const getTodaysUserInfo = data=>{
    const { value: jwt } = JSON.parse(window.localStorage.getItem("token"));
    return request({
        method: "post",
        headers: {
            "Content-Type": "application/json",
            authorization: jwt.token
        },
        url: "file/getTodayLog",
        data
    });
}
export const notifyOnline = ()=>{
    return request({
        method:'get',
        url:'file/recordLog',
    })
}
export const downloadFiction = () => {
    const { value: jwt } = JSON.parse(window.localStorage.getItem("token"));
    return request({
        method: "post",
        headers: {
            "Content-Type": "application/json",
            authorization: jwt.token
        },
        url: "user/getFromCloud"
    });
};
