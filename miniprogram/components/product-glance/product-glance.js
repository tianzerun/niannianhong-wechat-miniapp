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
    isPartialComponetsOnHide: false,
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

    showPartialComponents: function() {
      let { components } = this.properties.product;
      if (components.length > 3) {
        this.setData({
          isPartialComponetsOnHide: true,
          'product.components': components.slice(0, 3)
        })
      }
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
      this.showPartialComponents();
    },
  },
})
