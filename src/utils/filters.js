const changeDateTime = function(datetime) {
  if (!datetime) return ''
  let now = new Date(new Date())
  let dateS = new Date(
    `${now.getFullYear()}-${twoDigits(now.getMonth() + 1)}-${twoDigits(
      now.getDate()
    )}`
  )
  let dateE = new Date(`${datetime.substr(0, 10)}`)
  let iDays = (dateE - dateS) / 1000 / 60 / 60 / 24
  if (iDays === 0) {
    return `今天 ${datetime.substr(11, 5)}`
  } else if (iDays === 1) {
    return `明天 ${datetime.substr(11, 5)}`
  } else {
    return datetime.substr(5, 11).replace('T', '')
  }
}

const twoDigits = str => {
  if (str < 10) {
    return '0' + str
  }
  return str
}

const formatDatetime = function(str, datetime) {
  // date 'yyyy-MM-dd'
  let newDT = datetime ? new Date(datetime) : new Date()
  let regex = /yy|yyyy|MM|dd|hh|mm|ss/g
  return str.replace(regex, function(el) {
    switch (el) {
      case 'yy':
        return newDT
          .getFullYear()
          .toString()
          .substr(2)
      case 'yyyy':
        return newDT.getFullYear()
      case 'MM':
        return twoDigits(newDT.getMonth() + 1)
      case 'dd':
        return twoDigits(newDT.getDate())
      case 'hh':
        return twoDigits(newDT.getHours())
      case 'mm':
        return twoDigits(newDT.getMinutes())
      case 'ss':
        return twoDigits(newDT.getSeconds())
      default:
        return el
    }
  })
}

const weekTransform = function(i) {
  switch (i) {
    case 0:
      return '日'
    case 1:
      return '一'
    case 2:
      return '二'
    case 3:
      return '三'
    case 4:
      return '四'
    case 5:
      return '五'
    case 6:
      return '六'
  }
}

const weekDay = function(date) {
  if (Object.prototype.toString.call(date) === '[object Date]') {
    return '周' + weekTransform(date.getDay())
  }
  return ''
}

export default {
  changeDateTime,
  weekDay,
  formatDatetime
}
