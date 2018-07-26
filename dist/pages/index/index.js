webpackJsonp([7],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

const appInstance = getApp();

Page({
  data: {
    userInfo: {},
    imgUrls: [],
    messages: ['往后的余生，我只要你，往后余生，风雪是你，平淡是你', '往后的余生，我只要你，往后余生，清贫也是你，荣华是你', '往后余生，心底温柔是你，目光所致也是你'],
    product: {
      venueImageUrl: '',
      productName: '诺基亚7Plus 6GB+64GB全网通 黑色 双卡双待 \n' + '移动联通电信4G手机',
      activityStatus: '参与',
      activityTime: '16月10日 09:00  自动开奖',
      appId: '',
      logoUrl: '',
      sponsorName: ''
    }
  },
  onShow: function () {
    console.log('appInstance', appInstance);
  },
  onPullDownRefresh: function () {}
});

/***/ })
],[1]); function webpackJsonp() { require("./../../common.js"); wx.webpackJsonp.apply(null, arguments); };