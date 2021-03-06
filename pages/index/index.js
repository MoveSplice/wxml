//index.js
//获取应用实例
const app = getApp();

Page({

  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ],
    img:[
      { uri: '../../images/7_03.png'},
      { uri: '../../images/7_04.png' },
      { uri: '../../images/7_09.jpg' },
      { uri: '../../images/7_05.png' }
    ] 
  },
    onShareAppMessage: function () {
        return {
            title: 'hello world',
            desc: 'first WeChat',
            path: '/page/user?id=123'
        }
    },
  h:function(){
    console.log("111")
  },
  
  henchang:function(){
    console.log("chuxiangl")
  },
 
// 事件处理函数
bindViewTap: function() {
    wx.navigateTo({
        url: '../logs/logs'
    })
},
  onLoad: function () {

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

})
