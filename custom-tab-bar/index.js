Component({
  data: {
    activeTarBar: 0,
    list: [{
      url: "/pages/index/index",
      text: "买车",
      iconI: {
        normal: 'shop-o',
        active: 'shop',
      }
    }, {
      url: "/pages/sellCar/sellCar",
      text: "卖车",
      iconI: {
        normal: 'shopping-cart-o',
        active: 'shopping-cart',
      }
    }, {
      url: "/pages/carService/carService",
      text: "客服",
      iconI: {
        normal: 'service-o',
        active: 'service',
      }
    }, {
      url: "/pages/mine/mine",
      text: "我的",
      iconI: {
        normal: 'manager-o',
        active: 'manager',
      }
    }]
  },

  methods: {
    //底部菜单变化
    onChangeTarBar(event) {
      this.setData({ activeTarBar: event.detail });
      wx.switchTab({
        url: this.data.list[event.detail].url
      });
    },
    init() {
      const page = getCurrentPages().pop();
      this.setData({
        activeTarBar: this.data.list.findIndex(item => item.url === `/${page.route}`)
      });
    }
  }
})