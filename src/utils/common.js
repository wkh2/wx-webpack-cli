const errorForPage = (info = '服务器开小差啦，稍后再试～') => {
  wx.showToast({
    title: info,
    icon: 'none',
    duration: 2000
  })
}

export default {
  errorForPage
}
