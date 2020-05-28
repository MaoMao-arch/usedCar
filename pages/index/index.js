//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    searchHidden: false
  },
  onShow() {
    this.getTabBar().init();
  },
  scroll(e) {
    const detail = e.detail
    const scrollTop = detail.scrollTop
    if (scrollTop > 54) {
      this.setData({ searchHidden: true })
    } else {
      this.setData({ searchHidden: false })
    }
  }
})