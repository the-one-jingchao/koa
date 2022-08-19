// @ts-ignore
import Koa from 'koa';
import router from './router';
import { Server } from 'http';
import { koaCors } from "./utils/koaCors";
// @ts-ignore
import logMiddleWare from "./middlewares/logMiddleWare";
import { koaBody } from "./utils/koaBody";

const app = new Koa();

app.use(koaCors);
app.use(koaBody);
app.use(logMiddleWare());

app.use(router.routes());
app.use(router.allowedMethods());

const server = (port: number): Server => {
  console.log('server running');
  return app.listen(port);
}

export default server;
