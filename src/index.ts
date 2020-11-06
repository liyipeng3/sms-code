class SmsCode {
    private readonly store: {};
    private maxAge: number;
    private codeLength: number;
    private readonly numbers: string;

    /**
     * 类构造函数
     * @param maxAge 最大生存时间 默认为5 单位分钟,
     * @param codeLength 生成代码长度 默认为4
     *
     */
    constructor(maxAge: number = 5, codeLength: number = 4) {
        this.numbers = '0123456789'
        this.store = {}

        //  默认最大时间 单位为分钟
        this.maxAge = maxAge

        //  默认验证码长度
        this.codeLength = codeLength
    }

    /**
     * 设置基础参数
     * @param options = {
     *      age: 最大生存时间 默认为5 单位分钟,
     *      length: 生成代码长度 默认为4
     *  }
     */
    setOptions(options: { age: number, length: number }) {
        if (options.age && options.age > 0) {
            this.maxAge = options.age
        }
        if (options.length && options.length > 0) {
            this.codeLength = options.length
        }
    }

    /**
     * 获取随机生成的代码
     * @param phone 获取验证码的手机号码
     * @returns {string} 生成的代码
     */
    getCode(phone: number | string) {
        phone = String(phone)
        let code = this.random(this.codeLength)
        this.store[phone] = code

        setTimeout(() => {
            delete this.store[phone]
        }, this.maxAge * 60 * 1000)
        return code
    }

    /**
     * 验证代码是否正确
     * @param phone 需要验证的手机号码
     * @param code 需要验证的手机号码对应的代码
     * @returns {boolean} 验证结果
     */
    verifyCode(phone: number | string, code: number | string) {
        code = String(code)
        phone = String(phone)
        if (this.store[phone] && this.store[phone] === code) {
            delete (this.store)[phone]
            return true
        } else {
            return false
        }
    }

    /**
     * 生成指定长度的随机数字
     * @param length 指定长度
     * @returns {string} 指定长度的数字字符串
     */
    private random(length: number = 4) {
        let chars = ''
        let result = ''

        chars += this.numbers

        while (length > 0) {
            length--
            result += chars[Math.floor(Math.random() * chars.length)]
        }
        return result
    }
}


export default new SmsCode(5, 4);
