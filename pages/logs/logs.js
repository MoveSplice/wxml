//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
  ,
  click: function () {
    this.setData({ aa: "World" })
  },
  
  //分享

  onShareAppMessage: function () {
    return {
      title: 'hello world',
      desc: 'first WeChat',
      path: '/page/user?id=123'
    }
  },




})
