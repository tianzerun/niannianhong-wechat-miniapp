// components/phone-number/phone-number.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    number: String,
    isVisualCueActive: {
      type: Boolean,
      value: true
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  lifetimes: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapNumber: function() {
      wx.makePhoneCall({
        phoneNumber: this.properties.number,
      })
    }
  }
})
