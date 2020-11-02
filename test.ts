import SmsCode from "./main";

let smsCode = new SmsCode();
const phone:string = "18888888888"

console.assert(smsCode.getCode(phone).length===4)

