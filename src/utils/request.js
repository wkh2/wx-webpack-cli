var appInstance = getApp()

class Request {
  constructor(api) {
    this.api = api
  }

  _setHeaders = () => {
    const ptKey = wx.getStorageSync('jdlogin_pt_key') || '' // 登录状态
    const ptPin = wx.getStorageSync('jdlogin_pt_pin') || '' // 登录状态
    const guid = wx.getStorageSync('jdlogin_guid') || '' // 登录状态
    const lsid = wx.getStorageSync('jdlogin_lsid') || '' // 登录状态
    const authCookie =
      'guid=' +
      encodeURIComponent(guid) +
      '; lsid=' +
      encodeURIComponent(lsid) +
      '; pt_key=' +
      encodeURIComponent(ptKey) +
      '; pt_pin=' +
      encodeURIComponent(ptPin)

    return {
      'Content-type': 'application/json',
      cookie: authCookie
    }
  }

  // 组装请求对象
  _handleRequestObj = ({
    method = '',
    url = '',
    params = null,
    isloading = true,
    header = {}
  }) => {
    header = Object.assign(header, this._setHeaders())
    return {
      url: this.api + url,
      data: params,
      header: header,
      method: method,
      isloading: isloading
    }
  }

  // promise包装微信请求
  _request = obj => {
    return new Promise((resolve, reject) => {
      obj.success = response => resolve(response)
      obj.fail = response => reject(response)
      wx.request(obj)
    })
  }

  // 执行请求
  _http = obj => {
    obj = this._handleRequestObj(obj)
    // 请求拦截器，需要加 loading
    obj.isloading &&
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 15000,
        mask: !0
      })

    let promise = this._request(obj)
    const isSuccess = res => {
      return (
        res.statusCode === 200 &&
        Object.prototype.toString.call(res.data) === '[object Object]' &&
        'code' in res.data
      )
    }

    // 响应拦截器
    promise = promise.then(
      response => {
        // 判断是否登录，否则跳登录页
        wx.hideToast()
        if (isSuccess(response)) {
          if (response.data.code === 203) {
            return true
          } else {
            return response.data
          }
        } else {
          appInstance.common.errorForPage()
          return Promise.reject()
        }
      },
      err => {
        console.log('response', err)
        appInstance.common.errorForPage()
        return Promise.reject()
      }
    )
    return promise
  }

  get = request => {
    return this._http(Object.assign({}, request, { method: 'GET' }))
  }

  post = request => {
    return this._http(Object.assign({}, request, { method: 'POST' }))
  }

  put = request => {
    return this._http(Object.assign({}, request, { method: 'PUT' }))
  }

  delete = request => {
    return this._http(Object.assign({}, request, { method: 'DELETE' }))
  }
}

export default Request
