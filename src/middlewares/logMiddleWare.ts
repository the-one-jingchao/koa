import type { Context, Next } from "koa";
import logger from "./../utils/logger";

const logMiddleWare = () => {
  return async (ctx: Context, next: Next) => {
      const start = new Date().valueOf();
      await next();
      const end = new Date().valueOf();
      const ms = end - start;
      logger.info(`${ctx.method} ${ctx.url} - ${ms}ms`);
  }
}

export default logMiddleWare;
