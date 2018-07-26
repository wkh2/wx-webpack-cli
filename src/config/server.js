const TEST_HOST = 'https://beta-wxapplogin.m.jd.com',
  PROD_HOST = 'https://wxapplogin.m.jd.com'

let isTest = false,
  host = isTest ? TEST_HOST : PROD_HOST,
  api = {
    smslogin: 'cgi-bin/login/smslogin'
  }
;(function(arg) {
  for (let i in arg) {
    if (!arg.hasOwnProperty(i)) return
    arg[i] = `${host}/${arg[i]}`
  }
})(api)

export default api
