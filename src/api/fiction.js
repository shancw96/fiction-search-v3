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
