/**
 * 初始参数
 * @param maxAge 最大生存时间 默认为5 单位分钟,
 * @param codeLength 生成代码长度 默认为4
 *
 */
const store = {}, numbers = '0123456789'
let maxAge = 5, codeLength = 4

/**
 * 生成指定长度的随机数字
 * @param length 指定长度
 * @returns {string} 指定长度的数字字符串
 */
const random = (length) => {
  length || (length = 4)
  let chars = ''
  let result = ''

  chars += numbers

  while (length > 0) {
    length--
    result += chars[Math.floor(Math.random() * chars.length)]
  }
  return result
}

module.exports = {
  /**
   * 设置基础参数
   * @param options = {
   *      age: 最大生存时间 默认为5 单位分钟,
   *      length: 生成代码长度 默认为4
   *  }
   */
  setOptions: (options) => {
    if (options.age && options.age > 0) {
      maxAge = options.age
    }
    if (options.length && options.length > 0) {
      codeLength = options.length
    }
  },

  /**
   * 获取随机生成的代码
   * @param phone 获取验证码的手机号码
   * @returns {string} 生成的代码
   */
  getCode: (phone) => {
    phone = String(phone)
    let code = random(codeLength)
    store[phone] = code

    setTimeout(() => {
      delete store[phone]
    }, maxAge * 60 * 1000)
    return code
  },

  /**
   * 验证代码是否正确
   * @param phone 需要验证的手机号码
   * @param code 需要验证的手机号码对应的代码
   * @returns {boolean} 验证结果
   */
  verifyCode: (phone, code) => {
    code = String(code)
    phone = String(phone)
    if (store[phone] && store[phone] === code) {
      delete store[phone]
      return true
    } else {
      return false
    }
  }
}


