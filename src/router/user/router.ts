import { Context } from "koa";
import { GetUserInfoValidate } from "./validate";
import { UserInfoParams } from './params';
import { GetUserRules } from "./rules";
import { responseSuccess, responseError } from '../../utils/response';


class UserController {
    async info(ctx: Context){
        const { data, error } = await GetUserInfoValidate<UserInfoParams>(ctx, GetUserRules);
        if(error){
            responseError(ctx, error);
            return;
        }

        responseSuccess(ctx, data);
    }
}

export default new UserController();
