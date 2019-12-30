import { isEmpty } from "./common";

const Storage = {
    // 存储localStorage,如果提供类型则存放在sessionStorage中
    set: (key, value, type, datetime) => {
        const obj = {
            dataType: typeof value,
            value: value,
            type: type,
            datatime: datetime || new Date().getTime()
        };
        if (type) window.sessionStorage.setItem(key, JSON.stringify(obj));
        else window.localStorage.setItem(key, JSON.stringify(obj));
    },
    get: (key, defaultValue) => {
        let value;
        let obj = window.localStorage.getItem(key) || {};
        if (isEmpty(obj)) {
            obj = window.sessionStorage.getItem(key);
        }
        if (isEmpty(obj)) {
            return defaultValue;
        } //默认为undefined
        obj = JSON.parse(obj);
        switch (obj.dataType) {
            case "string":
                value = obj.value;
                break;
            case "number":
                value = Number(obj.value);
                break;
            case "boolean":
                value = Boolean(obj.value);
                break;
            case "object":
                value = obj.value;
                break;
        }
        return value;
    },

    remove: key => {
        window.sessionStorage.removeItem(key);
        window.localStorage.removeItem(key);
    },
    clear: () => {
        window.sessionStorage.clear();
        window.localStorage.clear();
    }
};
export default Storage;
