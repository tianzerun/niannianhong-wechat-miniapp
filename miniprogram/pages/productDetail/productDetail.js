const { fetchOneProduct } = require('../../shared/cloudFetch.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const { prodId, fromCollection } = options;
    const prod = await fetchOneProduct(fromCollection, prodId);
    let fitPersons = '';
    if (prod.targetReceivers != null) {
      fitPersons = prod.targetReceivers.join(', ')
    }
    let [beforeDot, afterDot] = prod.price.toString().split(".");
    if (afterDot == null) afterDot = "00";
    prod.price = { beforeDot, afterDot };
    this.setData({
      product: prod,
      fitPersons
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})