// miniprogram/pages/vant/vant.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    iconlit: []
  },

  changekey(event) {
    console.log(event.detail);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   var _this=this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d4028383847913b8df88437/iconlist/iconlist',
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data[0].entries)
        _this.setData({
          iconlit: res.data[0].entries.slice(0,10)
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})