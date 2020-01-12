import request from "../../utils/request";
import Storage from "../../utils/storage";
const { userName, token } = Storage.get("token", {});
console.log(token);
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

export const uploadFiction = data =>
    request({
        method: "post",
        headers: {
            "Content-Type": "application/json",
            authorization: token
        },
        url: "user/storeToCloud",
        data
    });
export const downloadFiction = () => {
    return request({
        method: "post",
        headers: {
            "Content-Type": "application/json",
            authorization: token
        },
        url: "user/getFromCloud"
    });
};
