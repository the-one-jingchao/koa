// @ts-ignore
import KoaBody from 'koa-body';

export const koaBody = KoaBody({
    multipart: true,
    formidable:{
        keepExtensions: true,
        maxFieldsSize: 5 * 1024 * 1024
    }
});
