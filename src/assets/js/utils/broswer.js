/**
 * Created by Olive on 2017/3/14.
 */

let ua = window.navigator.userAgent.toLowerCase()

let browser = {
  platform: {
    isMac: ua.indexOf('MAC') >= 0,
    isAndroid: ua && ua.indexOf('android') > 0,
    isIOS: /iphone|ipad|ipod|ios/.test(ua)
  },
  isLocal: /127.0.0.1|localhost|192.168/.test(window.location.host),
  isTest: /test-/.test(window.location.host),
  isSafari: ua.indexOf('safari') != -1 && ua.indexOf('chrome') == -1,
  isChrome: ua.indexOf('safari') != -1 && ua.indexOf('chrome') > -1
}

export {
  browser
}
