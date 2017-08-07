//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

    // wx.login({
    //   success: function (res) {
    //     var js_code = res.code;//调用登录接口获得的用户的登录凭证code
    //     wx.request({
    //       url: 'https://kunwang.us/login/',
    //       data: {
    //         login_info: js_code
    //       },
    //       method: 'POST',
    //       success: function (res) {
    //         if (res == false){
    //           wx.navigateTo({
    //             url: '../first/first',
    //           })
    //         }
    //       }
    //     })
    //   }
    // })

  },

  bindMessageButtonTap: function(e){
    wx.navigateTo({
      url: '../first/first',
    })
  }
})
