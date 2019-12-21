Page({
  data: {
    getcase: '无人',
    a1:0
  },
  getDataFromOneNet: function () {
    var that = this;
    const requestTask = wx.request({
      url: `https://api.heclouds.com/devices/575365977/datapoints?datastream_id=Light&limit=2`,
      header: {
        'content-type': 'application/json',
        'api-key': 'Mip73DI8BlxovzjDUVpxmp8JjKc='
      },
      success: function (res) {
        console.log(res.data)
        var app = getApp()
        app.globalData.light = res.data.data.datastreams[0]
        console.log(app.globalData.light.datapoints[0].value)
        var light = app.globalData.light.datapoints[0].value
        console.log(light)
        if (light > 0) {
          that.setData({
            getcase: '有人'
          })
        }

      },

      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
    return
  },
  open: function () {
    this.sendRequset(this.makeObj(this.data.a1,""))
  },
  sendRequset: function (obj) {
    wx.request(obj);
  },
  makeObj: function (sta, msg) {

    var obj = {
      url: "http://api.heclouds.com/devices/575365977/datapoints?type=3",

      header: {
        "Content-Type": "application/json",
        "api-key": "Mip73DI8BlxovzjDUVpxmp8JjKc=",
        //"Host": "api.heclouds.com"
      },
      method: "post",
      data: {


       "a1":sta,


      },
      success: function (res) {
        console.log(res)

        if (msg != "") {
          wx.showToast({
            title: "msg",
            duration: 2000
          })
          //console.log(i);
        }

      }
    }

    return obj;
  },

})


