//post.js
var util = require('../../utils/util.js')

var app = getApp()
Page({
  data: {
    nowDate: '',
    endDate: '',
    placeArray:['Amherst','NYC','Boston','BDL Airport','Logan Airport'],
    numArray:[0,1,2,3,4,5,6],
    objectArray:[
      {
        id: 0,
        name: 'Amherst'
      },
      {
        id: 1,
        name: 'NYC'
      },
      {
        id: 2,
        name: 'Boston'
      },
      {
        id: 3,
        name: 'BDL Airport'
      },
      {
        id: 4,
        name: 'Logan Airport'
      }
    ],
    userInfo:{},
    departure: 0,
    destination:0,
    eDate:'',
    eTime:'',
    lDate:'',
    lTime:'', 
    pNumber: 1, 
    memo:''
  },
  onLoad: function(){
    console.log('onLoad')
    // var d = Date.now()
    // var year = d.getFullYear()
    // var month = d.getMonth()
    // var day = d.getDate()
    // this.setDate({
    //   nowDate: year+'-'+month+'-'+day,
    //   endDate: (year+1)+'-'+(month+1)%12+day
    // })

    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

  },


  bindPNumberPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      pNumber: e.detail.value
    })
  },



  bindDeparturePickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      departure: e.detail.value
    })
  },

  bindDestinationPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      destination: e.detail.value
    })
  },

  bindEDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      eDate: e.detail.value
    })
  },
  bindETimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      eTime: e.detail.value
    })
  },

  bindLDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      lDate: e.detail.value
    })
  },
  bindLTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      lTime: e.detail.value
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