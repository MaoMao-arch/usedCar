// pages/components/swipe/swipe.js
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
    imageSrc: ['/pages/image/car1.jpg', '/pages/image/car2.jpg', '/pages/image/car3.jpg'],    //图片地址
    mode: "scaleToFill"  //缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})