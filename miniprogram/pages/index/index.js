// miniprogram/pages/landing.js

const navigationItems = [
  {
    label: "花束",
    iconPath: "../../images/icon_bouquet.png",
    linkedPage: "../bouquet/bouquet"
  },
  {
    label: "花篮",
    iconPath: "../../images/icon_flower_basket.png",
    linkedPage: "../development/development"
  },
  {
    label: "婚车花",
    iconPath: "../../images/icon_car.png",
    linkedPage: "../development/development"
  },
  {
    label: "婚庆用品",
    iconPath: "../../images/icon_balloon.png",
    linkedPage: "../development/development"
  }
];

const labelToPagePathMap = navigationItems.reduce((o, cur) => ({...o, [cur.label]: cur.linkedPage}), {});

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigationItems,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onTapNavigationIcon: function(elm) {
    const iconClicked = elm.currentTarget.id;
    wx.navigateTo({
      url: labelToPagePathMap[iconClicked],
    })
  }
})