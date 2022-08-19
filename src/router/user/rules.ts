import type { Rules } from "async-validator";

export const GetUserRules:Rules = {
    id: {
        type: 'string',
        required: true,
        message: '未输入用户ID',
    },
}
