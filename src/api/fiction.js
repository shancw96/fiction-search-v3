import request from "../../utils/request";

export const fetchRecommand = () =>
    request({
        url: "fiction/recommand",
        method: "get"
    });

export const fetchSearchKeyword = (keyword, accurateSearch) =>
    request({
        url: "fiction/search",
        method: "get",
        params: {
            keyword,
            accurateSearch
        }
    });
export const fetchBookHome = url =>
    request({
        url: "fiction/bookHome",
        method: "get",
        params: {
            url
        }
    });

export const fetchBookChapterList = url =>
    request({
        url: "fiction/getChapterList",
        method: "get",
        params: {
            url
        }
    });

export const fetchBookContent = url =>
    request({
        url: "fiction/getContent",
        method: "get",
        params: {
            url
        }
    });
