# sms-code

1.用于生成随机验证码以及验证验证码

```javascript
    SmsCode.getCode('188888888888')     // 随机数 如：3333
    SmsCode.verifyCode('18888888888', '3333')   // 验证结果 true/false
```

2.每个手机号对应的验证码只能被验证一次且有有效期

3.可以设置验证码过期时间以及验证码长度

```javascript
    SmsCode.setOptions({
        age: 5, // 默认有效时间为五分钟
        length: 4   // 默认长度为四位
    })
```
