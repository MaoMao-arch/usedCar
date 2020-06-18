//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    searchHidden: false, //顶部搜索框是否隐藏
    searchPageShow: false, //遮罩层是否显示
  },

  //下方菜单显示
  onShow() {
    this.getTabBar().init();
  },

  //滚动判定搜索框
  scroll(e) {
    const detail = e.detail
    const scrollTop = detail.scrollTop
    if (scrollTop > 54) {
      this.setData({
        searchHidden: true
      })
    } else {
      this.setData({
        searchHidden: false
      })
    }
  },

  //接收子组件传值，改变遮罩层显示
  changeOverlayShow(e) {
    const {status} = e.detail
    this.setData({
      searchPageShow: status
    })
  },

})