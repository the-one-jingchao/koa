// @ts-ignore
import KoaRouter from 'koa-router';
import LoginController from './login/login';
import userController from './user/router';

const router = new KoaRouter();

router.get('/api/login', LoginController.login);
router.get('/api/user/info/:id', userController.info);

export default router;
