import type { Context } from "koa";

/**
 *
 * @description 成功响应
 * @param ctx
 * @param data
 * @param message
 *
 * */
export const responseSuccess = (
    ctx: Context,
    data: any,
    message: string | undefined = undefined,
) => {
    ctx.body = {
        code: 0,
        data,
        message
    }
}

/**
 *
 * @description 失败响应
 * @param ctx
 * @param message
 *
 * */
export const responseError = (
    ctx: Context,
    message: string
) => {
    ctx.body = {
        code: -1,
        message
    }
}
