//post.js
var util = require('../../utils/util.js')

var app = getApp()
Page({
  data: {
    userInfo:{},
    toWhere:'',
    departureDate: '',
    departureTime:'',
    carModel: '', 
    pNumber: '' 
  },
  onLoad: function(){
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

  },
  bindButtonTap: function () {
    var output;
    output= this.data
    console.log(output)
    wx.setStorage({
      key: String(this.data.carModel)+String(this.data.departureDate),

      data: output,
    })
    
   
  },
  bindKeyWhereInput: function (e) {
    this.setData({
      toWhere: e.detail.value,
    })
  },

  bindKeyDateInput: function (e) {
    this.setData({
      departureDate: e.detail.value,
    })
  },

  bindKeyTimeInput: function (e) {
    this.setData({
      departureTime: e.detail.value,
    })
  },
  bindKeyModelInput: function (e) {
    this.setData({
      carModel: e.detail.value,
    })
  },

  bindKeyNumberInput: function (e) {
    this.setData({
      pNumber: e.detail.value,
    })
  },



})