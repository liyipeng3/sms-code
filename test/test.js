'use strict';
const expect = require('chai').expect;
const SmsCode = require('../dist/index').default;

const smsCode = new SmsCode(5, 4)
const phone = '18888888888'

describe('length test', () => {
    it('should return 4', () => {
        const code = smsCode.getCode(phone);
        expect(code.length).to.equal(4);
    });
    it('should return 7', () => {
        smsCode.setOptions({age: 5, length: 7})
        const code = smsCode.getCode(phone);
        expect(code.length).to.equal(7);
    });
});

describe('code test', () => {
    it('should return correct', () => {
        smsCode.setOptions({age: 5, length: 4})
        const code = smsCode.getCode(phone);
        expect(smsCode.verifyCode(phone, code)).to.equal(true);
    });
});

describe('once test', () => {
    it('should be destroyed once', () => {
        smsCode.setOptions({age: 5, length: 4})
        const code = smsCode.getCode(phone);
        expect(smsCode.verifyCode(phone, code)).to.equal(true);
        expect(smsCode.verifyCode(phone, code)).to.equal(false);
    });
});

describe('time test', async () => {
    it('should destroy in time', (done) => {
        smsCode.setOptions({age: 1 / 60 / 1000 * 1000, length: 4})
        const code = smsCode.getCode(phone);
        setTimeout(() => {
            expect(smsCode.verifyCode(phone, code)).to.equal(true);
        }, 500)
        setTimeout(() => {
            expect(smsCode.verifyCode(phone, code)).to.equal(false);
            done();
        }, 1500)
    });
});


