const appInstance = getApp()

Page({
  data: {
    userInfo: {},
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    messages: [
      '往后的余生，我只要你，往后余生，风雪是你，平淡是你',
      '往后的余生，我只要你，往后余生，清贫也是你，荣华是你',
      '往后余生，心底温柔是你，目光所致也是你'
    ],
    product: {
      venueImageUrl:
        '//m.360buyimg.com/mobilecms/s220x220_jfs/t18949/319/1866637517/296039/c0820b82/5add4ec7N4dc7fafe.jpg!q70.jpg.dpg',
      productName:
        '诺基亚7Plus 6GB+64GB全网通 黑色 双卡双待 \n' + '移动联通电信4G手机',
      activityStatus: '参与',
      activityTime: '16月10日 09:00  自动开奖',
      appId: '',
      logoUrl: '//st.360buyimg.com/common/commonH_B/images/2015/top-jdlogo.png',
      sponsorName: '京东赞助'
    }
  },
  onShow: function() {
    console.log('appInstance', appInstance)
  },
  onPullDownRefresh: function() {}
})
