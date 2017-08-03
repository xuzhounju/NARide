//post.js
var util = require('../../utils/util.js')

var app = getApp()
Page({
  data: {
    nowDate: '',
    endDate: '',
    placeArray: ['Amherst', 'BDL Airport','Boston','Logan Airport','NYC'],

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
    destination:1,
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
   

    // wx.connectSocket({
    //   url: 'wss://kunwang.us'
    // })

    // wx.onSocketOpen(function (res) {
    //   console.log('WebSocket连接已打开！')
    // })

    // wx.onSocketError(function (res) {
    //   console.log('WebSocket连接打开失败，请检查！')
    // })




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

  formSubmit: function (e) {
    console.log(e)

    if (e.detail.value.eDate <= e.detail.value.lDate){
      wx.request({
        url: 'https://kunwang.us/new/', //仅为示例，并非真实的接口地址
        data: {
          departure: e.detail.value.departure,
          destination: e.detail.value.destination,
          eDate: e.detail.value.eDate,
          eTime: e.detail.value.eTime,
          lDate: e.detail.value.lDate,
          lTime: e.detail.value.lTime,
          pNumber: e.detail.value.pNumber,
          driver: e.detail.value.driver,
          memo: e.detail.value.memo
        },

        method:"POST",
        
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
        }
      })
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
    } else{
      console.log('最晚日期早于最早日期 ')
    }
  },
  formReset: function () {
    this.setData({
      departure: 0,
      destination: 1,
      eDate: '',
      eTime: '',
      lDate: '',
      lTime: '',
      pNumber: 1,
      memo: ''
    })
    console.log('form发生了reset事件')
  },

  onShareAppMessage: function () {

  }



  



})