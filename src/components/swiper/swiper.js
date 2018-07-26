Component({
  properties: {
    imgUrls: {
      type: Array,
      value: []
    }
  },
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular: true,
    previousMargin: '40rpx',
    nextMargin: '40rpx',
    current: 0
  },
  methods: {
    swiperChange(event) {
      let { current } = event.detail || {}
      this.setData({
        current: current
      })
    }
  }
})
