import { Rules } from "async-validator";

export const LoginRules:Rules = {
    username: [{
        type: 'string',
        required: true,
        message: '用户名或密码错误',
    }],
    password: [{
        type: 'string',
        required: true,
        message: '用户名或密码错误',
    }],
    phone: [{
        type: 'string',
        required: true,
        message: '手机号码错误',
    }]
}
