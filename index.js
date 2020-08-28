const numbers = '0123456789'
let store = {}

//  默认最大时间 单位为分钟
let maxAge = 5
//  默认验证码长度
let codeLength = 4

function random (length) {
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

const Code = {
    setOptions: (options) => {
        if (options.age && options.age > 0) {
            maxAge = options.age
        }
        if (options.length && options.length > 0) {
            codeLength = options.length
        }
    },
    getCode: (phone) => {
        let code = random(codeLength)
        store[phone] = code

        setTimeout(() => {
            delete store[phone]
        }, maxAge * 60 * 1000)
        return code
    },
    verifyCode: (phone, code) => {
        if (store[phone] && store[phone] === code) {
            delete store[phone]
            return true
        } else {
            return false
        }
    }
}

export default Code
