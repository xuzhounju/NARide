//post.js
var util = require('../../utils/util.js')

var app = getApp()
Page({
  data: {
    nowDate: '',
    endDate: '',
    placeArray: ['Amherst', 'BDL Airport','Boston','Logan Airport','NYC'],

    numArray:[0,1,2,3,4,5,6],
   
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

    /*if (e.detail.value.eDate <= e.detail.value.lDate){
      var earlist = new Date(e.detail.value.eDate + ' ' + e.detail.value.eTime)
      console.log('E:',earlist)
      earlist=earlist.getTime()/1000.0
      var latest = new Date(e.detail.value.lDate + ' ' + e.detail.value.lTime)
      latest = latest.getTime()/1000.0
      var uri = encodeURI(`departure=${parseInt(e.detail.value.departure)+1}&arrival=${parseInt(e.detail.value.destination)+1}&earliest=${earlist}&latest=${latest}&pNumber=${e.detail.value.pNumber}&memo=${e.detail.value.memo}`)
      if (e.detail.value.driver){
        uri = uri + '&driver=on'
      }
      wx.request({
        url: 'https://kunwang.us/new/', //仅为示例，并非真实的接口地址
        
        
        data: uri,
        

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
    }*/

    if (e.detail.value.eDate <= e.detail.value.lDate) {
      var earlist = new Date(e.detail.value.eDate + ' ' + e.detail.value.eTime)
      console.log('E:', earlist)
      earlist = earlist.getTime() / 1000.0
      var latest = new Date(e.detail.value.lDate + ' ' + e.detail.value.lTime)
      latest = latest.getTime() / 1000.0
      var form = new FormData(document.getElementById("js-postform"));
      form.set("earliest", earlist);
      form.set("latest", latest);
      wx.request({
        url: 'https://kunwang.us/new/', //仅为示例，并非真实的接口地址


        data: form,


        method: "POST",

        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
        }
      })
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
    } else {
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