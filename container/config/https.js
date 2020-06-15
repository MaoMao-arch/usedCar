import {
  httpConfig
} from "./httpConfig"

const {
  ipDeault,
  urlAddress
} = httpConfig

export const $http = {
  ipDeault: ipDeault,
  urlAddress: urlAddress,
  get: (Nothis, object) => {
    let data = object.data
    wx.request({
      url: "http://" + ipDeault + urlAddress, //本地服务器地址
      data: data,
      method: 'GET',
      header: {
        'content-type': 'application/json' //默认值
      },
      success: function (res) {
        object.success.call(Nothis, res.data);
      },
      fail: function (res) {
        console.log("请求失败！");
      }
    })
  }
}