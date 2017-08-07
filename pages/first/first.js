// first.js
Page({

  data: {
  },

  formSubmit: function (e) {
    var mydata = e.detail.value
    if (mydata.weixin.length>0 && mydata.email.length>0){
      console.log("联系信息：", mydata)
      wx.request({
        url: 'https://kunwang.us/contacts/',
        data:mydata,
        method: "POST",
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
        }
      })
    } else{
      console.log("请填写必要联系信息")
    } 

  }



})