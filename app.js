//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

          // wx.navigateTo({
          //     url: '../pages/b/b',//页面跳转相对路径要写清楚且准确
          //     success: function(res){
          //         console.log('跳转到news页面成功')// success
          //     },
          //     fail: function() {
          //         console.log('跳转到news页面失败')  // fail
          //     },
          //     complete: function() {
          //         console.log('跳转到news页面完成') // complete
          //     }
          // })



    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

   

  },
  globalData: {
    userInfo: null
  }
})




