// pages/components/search/search.js
var app = getApp(); //获取全局数据
Component({
  /**
   * 可以使用全局样式
   */
  options: {
    addGlobalClass: true
  },

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    local: app.globalData.local,
    searchValue: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChangeSearch(e) {
      app.globalData.searchValue = e.detail;  //修改全局地点变量
    },
  }
})