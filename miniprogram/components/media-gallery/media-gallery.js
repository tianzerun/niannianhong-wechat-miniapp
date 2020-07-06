// components/media-swiper/media-swiper.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content: {
      type: Array,
      value: [],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  observers: {
    "content": function(val) {
      const index = this._findVideoIndex(val);
      this.videoIndex = index;
    }
  },

  lifetimes: {
    ready: function() {
      this.videoContext = wx.createVideoContext('video', this);
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _findVideoIndex: function(gallery) {
      const index = gallery.findIndex((elm) => {
        return elm.type === 'video'
      });
      return index;
    },

    onSwipeGallery: function(event) {
      const current = event.detail.current;
      if (current !== this.videoIndex) {
        this.videoContext.pause();
      }
    },
  }
})
