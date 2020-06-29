// miniprogram/pages/bouquet/bouquet.js
const targetReceivers = [
  {
    receiver: "不限",
    isTapped: true,
  },
  {
    receiver: "妈妈",
    isTapped: false,
  },
  {
    receiver: "爸爸",
    isTapped: false,
  },
  {
    receiver: "女友",
    isTapped: false,
  },
  {
    receiver: "男友",
    isTapped: false,
  },
  {
    receiver: "长辈",
    isTapped: false,
  },
  {
    receiver: "老师",
    isTapped: false,
  },
  {
    receiver: "嘉宾",
    isTapped: false,
  },
];

Page({

  /**
   * 页面的初始数据
   */
  data: {
   targetReceivers,
   products: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.queryProducts();
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

  },

  queryProducts: function(filter) {
    this.setData({
      products: []
    });
    wx.showLoading({
      title: '正在匹配花束...',
    })
    const db = wx.cloud.database();
    let queryFilter = {};
    if (filter && filter["receiver"] !== "不限") {
      queryFilter["targetReceivers"] = filter["receiver"]
    }
    db.collection('bouquets').where(queryFilter).get({
      success: (res) => {
        this.setData({products: res.data});
      },
      fail: (err) => {
        wx.showToast({
          title: '加载失败',
        })
      },
      complete: (err) => {
        wx.hideLoading();
      }
    })
  },

  onTapTargetReceiver: function(event) {
    const { filterTag } = event.currentTarget.dataset;
    const newTargetReceivers = this.data.targetReceivers.map((item)=> {
      const newItem = Object.assign({}, item);
      newItem.isTapped = newItem.receiver === filterTag
      return newItem
    })
    this.queryProducts({receiver: filterTag});
    this.setData({
      targetReceivers: newTargetReceivers
    });
  }
})