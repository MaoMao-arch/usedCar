// pages/components/searchPage/searchPage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    searchValue: '', //搜索框的值
    showAction: true, //是否在搜索框右侧显示取消按钮
    useActionSlot: false, //是否显示搜索框中的搜索按钮
  },

  /**
   * 组件的方法列表
   */
  methods: {

    //搜索框点击取消按钮
    onSearchCancel() {
      //传值给父组件
      const status = false
      this.triggerEvent("changeOverlayShow", {
        status
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
  }
})