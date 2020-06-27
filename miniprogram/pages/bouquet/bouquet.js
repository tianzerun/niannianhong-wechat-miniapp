// miniprogram/pages/bouquet/bouquet.js
const targetReceivers = [
  {
    receiver: "妈妈"
  },
  {
    receiver: "爸爸"
  },
  {
    receiver: "女友"
  },
  {
    receiver: "男友"
  },
  {
    receiver: "长辈"
  },
  {
    receiver: "朋友"
  },
  {
    receiver: "老师"
  },
  {
    receiver: "嘉宾"
  },
];

const defaultProducts = [
  {
    "id": 1,
    "name": "订婚花束",
    "meaning": "xxxxxx",
    "imageUrl": "../../images/bouquet_square.png",
    "components": [
      {
        "flowerName": "红玫瑰",
        "quantity": 66
      },
    ]
  },
  {
    "id": 2,
    "name": "xxx花束",
    "meaning": "xxxxxx",
    "imageUrl": "../../images/bouquet_square.png",
    "components": [
      {
        "flowerName": "百合花",
        "quantity": 3
      },
      {
        "flowerName": "向日葵",
        "quantity": 1
      }
    ],
  },
  {
    "id": 3,
    "name": "xxx花束",
    "meaning": "xxxxxx",
    "imageUrl": "../../images/bouquet_square.png",
    "components": [
      {
        "flowerName": "粉玫瑰",
        "quantity": 36
      }
    ],
  },
];

Page({

  /**
   * 页面的初始数据
   */
  data: {
   targetReceivers,
   products: defaultProducts,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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