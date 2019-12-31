const getters = {
    //fiction
    collectedFiction: state => state.fiction.collectedFiction,
    currentView: state => state.fiction.currentView,
    hotSearchList: state => state.fiction.hotSearchList,
    //login

    //页面设置
    pageControl: state => state.page.control
};

export default getters;
