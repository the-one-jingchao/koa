import { Context } from "koa";
import loginValidate from "./../../utils/loginValidate";
import { LoginParams } from '../../controller/common/loginParams';
import { LoginRules } from "../../controller/rules/loginRules";
import { responseSuccess, responseError } from '../../utils/response';


class LoginController {
    async login(ctx: Context){
        const { data, error } = await loginValidate<LoginParams>(ctx, LoginRules);
        if(error){
            responseError(ctx, error);
            return;
        }

        responseSuccess(ctx, data);
    }
}

export default new LoginController();
