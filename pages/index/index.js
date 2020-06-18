//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    searchHidden: false, //顶部搜索框是否隐藏
    searchPageShow: false, //遮罩层是否显示
    searchValue: '', //搜索框的值
    showAction: true, //是否在搜索框右侧显示取消按钮
    useActionSlot: false, //是否显示搜索框中的搜索按钮
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
    const status = e.detail
    this.setData({
      searchPageShow: status
    })
  },

  //搜索框点击取消按钮
  onSearchCancel() {
    this.setData({
      searchPageShow: false
    })
  },

  //点击搜索 
  onSearch() {
    console.log(this.data.searchValue)
  },

  //搜索框变化
  onSearchChange(e) {
    if (e.detail !== "") {
      this.setData({
        showAction: false, //是否在搜索框右侧显示取消按钮
        useActionSlot: true, //是否显示搜索框中的搜索按钮
      })
    } else {
      this.setData({
        showAction: true, //是否在搜索框右侧显示取消按钮
        useActionSlot: false, //是否显示搜索框中的搜索按钮
      })
    }
  }
})