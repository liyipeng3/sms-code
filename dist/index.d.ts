declare class SmsCode {
    private readonly store;
    private maxAge;
    private codeLength;
    private readonly numbers;
    /**
     * 类构造函数
     * @param maxAge 最大生存时间 默认为5 单位分钟,
     * @param codeLength 生成代码长度 默认为4
     *
     */
    constructor(maxAge?: number, codeLength?: number);
    /**
     * 设置基础参数
     * @param options = {
     *      age: 最大生存时间 默认为5 单位分钟,
     *      length: 生成代码长度 默认为4
     *  }
     */
    setOptions(options: {
        age: number;
        length: number;
    }): void;
    /**
     * 获取随机生成的代码
     * @param phone 获取验证码的手机号码
     * @returns {string} 生成的代码
     */
    getCode(phone: number | string): string;
    /**
     * 验证代码是否正确
     * @param phone 需要验证的手机号码
     * @param code 需要验证的手机号码对应的代码
     * @returns {boolean} 验证结果
     */
    verifyCode(phone: number | string, code: number | string): boolean;
    /**
     * 生成指定长度的随机数字
     * @param length 指定长度
     * @returns {string} 指定长度的数字字符串
     */
    private random;
}
export default SmsCode;
