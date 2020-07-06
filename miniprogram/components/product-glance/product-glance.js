// components/productGlance/product-glance.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    product: {
      type: Object,
      value: {},
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapShowDetail(event) {
      const { _id, fromCollection } = this.properties.product;
      wx.navigateTo({
        url: '../../pages/productDetail/productDetail?' 
          + `prodId=${_id}`
          + `&fromCollection=${fromCollection}`,
      })
    },
  },

  lifetimes: {
    attached: function () { 
      const receivers = this.properties.product.targetReceivers;
      let receiverText = '';
      if (receivers) {
        receiverText = receivers.join(", ");
      }
      this.setData({
        targetReceivers: receiverText,
      });
    },
  },
})
