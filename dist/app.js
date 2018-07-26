webpackJsonp([10],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var constants_namespaceObject = {};
__webpack_require__.d(constants_namespaceObject, "STORAGE_KEY", function() { return STORAGE_KEY; });
__webpack_require__.d(constants_namespaceObject, "defaultPortraitImage", function() { return defaultPortraitImage; });
__webpack_require__.d(constants_namespaceObject, "API_BASE_URL", function() { return API_BASE_URL; });
__webpack_require__.d(constants_namespaceObject, "EVENTS", function() { return EVENTS; });

// CONCATENATED MODULE: ./src/constants/constants.js
const STORAGE_KEY = {
  // 用户位置信息
  USER_LOCATE: 'USER_LOCATE'
};

const defaultPortraitImage = 'http://commonst.360buyimg.com/common/wx-images/personal/default.png';

const API_BASE_URL = Object({"NODE_ENV":"development"}).MOCK ? 'https://api-mock.jd.com/mock/5b03e71eda11c80f8e214d12/api/' : 'https://api-topcloth.jd.com/api/';

const EVENTS = {
  BUTTON_CLICK: 'BUTTON_CLICK',
  MODAL_CANCEL: 'MODAL_CANCEL',
  MODAL_OK: 'MODAL_OK'
};
// CONCATENATED MODULE: ./src/utils/filters.js
const changeDateTime = function (datetime) {
  if (!datetime) return '';
  let now = new Date(new Date());
  let dateS = new Date(`${now.getFullYear()}-${twoDigits(now.getMonth() + 1)}-${twoDigits(now.getDate())}`);
  let dateE = new Date(`${datetime.substr(0, 10)}`);
  let iDays = (dateE - dateS) / 1000 / 60 / 60 / 24;
  if (iDays === 0) {
    return `今天 ${datetime.substr(11, 5)}`;
  } else if (iDays === 1) {
    return `明天 ${datetime.substr(11, 5)}`;
  } else {
    return datetime.substr(5, 11).replace('T', '');
  }
};

const twoDigits = str => {
  if (str < 10) {
    return '0' + str;
  }
  return str;
};

const formatDatetime = function (str, datetime) {
  // date 'yyyy-MM-dd'
  let newDT = datetime ? new Date(datetime) : new Date();
  let regex = /yy|yyyy|MM|dd|hh|mm|ss/g;
  return str.replace(regex, function (el) {
    switch (el) {
      case 'yy':
        return newDT.getFullYear().toString().substr(2);
      case 'yyyy':
        return newDT.getFullYear();
      case 'MM':
        return twoDigits(newDT.getMonth() + 1);
      case 'dd':
        return twoDigits(newDT.getDate());
      case 'hh':
        return twoDigits(newDT.getHours());
      case 'mm':
        return twoDigits(newDT.getMinutes());
      case 'ss':
        return twoDigits(newDT.getSeconds());
      default:
        return el;
    }
  });
};

const weekTransform = function (i) {
  switch (i) {
    case 0:
      return '日';
    case 1:
      return '一';
    case 2:
      return '二';
    case 3:
      return '三';
    case 4:
      return '四';
    case 5:
      return '五';
    case 6:
      return '六';
  }
};

const weekDay = function (date) {
  if (Object.prototype.toString.call(date) === '[object Date]') {
    return '周' + weekTransform(date.getDay());
  }
  return '';
};

/* harmony default export */ var filters = ({
  changeDateTime,
  weekDay,
  formatDatetime
});
// CONCATENATED MODULE: ./src/utils/common.js
const errorForPage = (info = '服务器开小差啦，稍后再试～') => {
  wx.showToast({
    title: info,
    icon: 'none',
    duration: 2000
  });
};

/* harmony default export */ var common = ({
  errorForPage
});
// CONCATENATED MODULE: ./src/app.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





let appConfig = _extends({}, constants_namespaceObject, {
  filters: filters,
  common: common,
  onLaunch: function () {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res);
              }
            }
          });
        }
      }
    });
  },
  globalData: {
    userName: '',
    userInfo: null,
    globalLoginFlag: 0
  },
  wxversion: '',
  appid: 537
});

App(appConfig);

/***/ })
],[0]); function webpackJsonp() { require("./common.js"); wx.webpackJsonp.apply(null, arguments); };