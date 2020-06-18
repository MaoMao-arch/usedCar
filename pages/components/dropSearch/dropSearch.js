// pages/components/dropSearch/dropSearch.js
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
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //搜索框聚焦
    focusSearch() {
      //传值给父组件
      const status = true
      this.triggerEvent("changeOverlayShow", {
        status
      })
    }
  }
})