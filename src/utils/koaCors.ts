// @ts-ignore
import KoaCors from 'koa2-cors';

export const koaCors = KoaCors({
   origin: '*',
   allowHeaders: ['*'],
   allowMethods: ['*'],
    credentials: true,
});
