const { fetchOneProduct } = require('../../shared/cloudFetch.js');
const productId = 'rMNMMYAIsoXHxEUHSNraGtDkyPlwGRpgqVDRAsoXvc4E8Yom';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag: {
      type: String,
      value: "鲜花束"
    },
    title: {
      type: String,
      value: "生日定制花束"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  lifetimes: {
    attached: async function() {
      const product = await fetchOneProduct('bouquets', productId);
      this.setData({
        product
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapCard: function() {
      wx.navigateTo({
        url: '../../pages/productDetail/productDetail?' 
          + `prodId=${productId}&fromCollection=bouquets`
      })
    },
  }
})
