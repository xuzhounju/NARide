// first.js
Page({

  data: {
  },

  formSubmit: function (e) {
    var mydata = e.detail.value
    if (mydata.weixin.length>0 && mydata.email.length>0){
      console.log("联系信息：", mydata)
    } else{
      console.log("请填写必要联系信息")
    } 

  }



})