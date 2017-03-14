/**
 * Created by olive on 2017/3/14.
 */

/**
 * 日期日期加${num}天
 * @param {String|Date|Number}curDate
 * @param {int}num
 * @returns {Date}
 */
function addDate (curDate, num) {
  if (!isNaN(curDate)) {
    curDate = new Date(curDate)
  } else if (typeof (curDate) === 'string') {
    curDate = curDate.replace(/-/g, '/')
    curDate = new Date(curDate)
  }
  return new Date(curDate.setTime(curDate.getTime() + (num * 86400000)))
}

/**
 * 日期转 yyyy-MM-dd 格式
 * @param{String|Date|Number}date
 * @returns {string}
 */

function toYYMMdd (date) {
  if (!isNaN(date)) {
    date = new Date(date)
  } else if (typeof (date) === 'string') {
    date = date.replace(/-/g, '/')
    date = new Date(date)
  }
  let yyyy = date.getFullYear()
  let MM = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  let dd = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
  return `${yyyy}-${MM}-${dd}`
}

/**
 *日期转 yyyy-MM-dd HH:mm:ss 格式
 * @param {String|Date|Number}date
 * @returns {string}
 */
function toYYMMddHHMMss (date) {
  if (!isNaN(date)) {
    date = new Date(date)
  } else if (typeof (date) === 'string') {
    date = date.replace(/-/g, '/')
    date = new Date(date)
  }
  let yyyy = date.getFullYear()
  let MM = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  let dd = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
  let hh = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`
  let mm = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`
  let ss = date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`

  return `${yyyy}-${MM}-${dd} ${hh}:${mm}:${ss}`
}

export  default {
  addDate,
  toYYMMdd,
  toYYMMddHHMMss
}
