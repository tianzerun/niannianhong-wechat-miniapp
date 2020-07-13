const bmap = require('../../libs/bmap-wx.min.js');

const { fetchOneProduct } = require('../../shared/cloudFetch.js');

const STORE_NAME = "年年红鲜花坊";
const BACK_TO_PRODUCT = "返回商品";
const OPEN_NAVIGATION = "打开导航";
const ADDRESS = "山东省乐陵市兴隆南大街96号年年红鲜花坊";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: {},
    isInStorePurchaseOnShow: false,
    inStorePurchaseDialogButtons: [{text: BACK_TO_PRODUCT}, {text: OPEN_NAVIGATION}],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
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

  loadMap: function() {
    let baiduMap = new bmap.BMapWX({
      ak: '1pvSZZbckpP7NBleLHdPUBYKgTXFu2MR'
    })
    let success = (data) => {
      const location = data.wxMarkerData[0];
      const marker = {
        latitude: location.latitude,
        longitude: location.longitude,
        callout: {
          content: STORE_NAME,
          display: "ALWAYS",
          fontSize: 20,
          borderRadius: 5,
          padding: 5,
          textAlign: "center",
        }
      };
      console.log(marker);
      this.setData({
        latitude: marker.latitude,
        longitude: marker.longitude,
      })
    };
    baiduMap.geocoding({
      address: ADDRESS,
      fail: (err) => console.log(err),
      success: success,
    })
  },

  onTapInStorePurchase: function() {
    this.setData({
      isInStorePurchaseOnShow: true,
    });
    this.loadMap();
  },

  onTapDialogButton: function(e) {
    const {text} = e.detail.item;
    switch (text) {
      case BACK_TO_PRODUCT:
        this.setData({ isInStorePurchaseOnShow: false });
        break;
      case OPEN_NAVIGATION:
        this.navigateToStore();
        break;
    }
  },

  navigateToStore: function() {
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      name: STORE_NAME,
      address: ADDRESS,
    });
  },
})