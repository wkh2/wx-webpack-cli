Component({
  externalClasses: ['exteranl-treasure-card'],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  data: {
    item: {}
  },
  properties: {
    data: {
      type: Object,
      value: {
        venueImageUrl: '图片地址',
        productName: '商品名称',
        activityStatus: '参与',
        activityTime: '06月10日 08:00  自动开奖',
        appId: '跳转小程序APPID',
        logoUrl: '赞助商logo',
        sponsorName: '赞助商名称'
      },
      observer: function(newVal) {
        this.groupVenue(newVal)
      }
    }
  },
  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function() {},
  ready: function() {},
  methods: {
    groupVenue(data) {
      this.setData({
        item: data
      })
      return data
    },
    // 跳转到内部链接
    onInternal() {
      let { internalLink: url } = this.data.item || {}
      if (url) {
        wx.navigateTo({
          url
        })
      }
    }
  }
})
