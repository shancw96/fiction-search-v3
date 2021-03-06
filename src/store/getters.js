const getters = {
  //fiction
  collectedFiction: state => state.fiction.collectedFiction,
  currentView: state => state.fiction.currentView,
  hotSearchList: state => state.fiction.hotSearchList,
  //login
  JWT: state => state.user.token,
  //页面设置
  pageControl: state => state.page.control,
  //自动上传
  isAutoUpload: state => state.page.autoSave,
  lastestUploadTime: state => state.page.uploadTime,
  //自动检测章节列表
  isAutoUpdateChapter: state => state.page.autoCheckUpdate,
  lastUpdateChapterTime: state => state.page.lastUpdateTime
};

export default getters;
