//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    openid: ''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../first/first'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
  

    wx.login({
      success: function (res) {
        var js_code = res.code;//调用登录接口获得的用户的登录凭证code
        console.log(js_code)
        wx.request({
          url: 'https://kunwang.us/login/',
          data: {
            login_info: js_code
          },
          method: 'POST',
          success: function (res) {
            if (res.data.first){
              wx.navigateTo({
                url: '../first/first',
              })
            app.globalData.openid = res.data.openid
            
            }
          }
        })
      }
    })

    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

  },

  bindMessageButtonTap: function(e){
    wx.navigateTo({
      url: '../first/first',
    })
  }
})
