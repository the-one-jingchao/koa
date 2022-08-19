import { Context } from "koa";
// @ts-ignore
import Url from 'url';

export const getData = async (ctx: Context, key: String = '') => {
    let data: any;
    let method = ctx.method.toUpperCase();
    if (method === 'GET') {
        if (key) {
            // @ts-ignore
            data = ctx.params;
        } else {
            data = JSON.parse(JSON.stringify(ctx.query));
        }
    } else if (method === 'POST') {
        // @ts-ignore
        data = ctx.request.body;
        if (key) {
            // @ts-ignore
            data[ key ] = ctx.params;
        }
    } else if (method === 'PUT') {
        // @ts-ignore
        data = ctx.request.body;
    } else if (method === 'DELETE') {
        data = ctx.params;
    } else {
        // @ts-ignore
        data = ctx.request.body;
    }
    return data;
}
