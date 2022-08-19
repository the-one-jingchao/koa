import type { Context } from "koa";
import Schema, { Value, Rules } from "async-validator";
import { getData } from "../../utils/methods";


/**
 *
 *
 * */
const GetUserInfoValidate = async <T extends Value>(
    ctx: Context,
    rules: Rules
): Promise<{ data: T, error: string}> => {
    const validator = new Schema(rules);
    let data: any = await getData(ctx, 'id');
    console.log(data)
    return await validator
        .validate(data)
        .then(() => {
            return{
                data: data as T,
                error: '',
            }
        }).catch(({ errors, fields }) => {
            console.log(fields);
            return {
                data: {} as T,
                error: errors[0].message,
            }
        });
}


export {
    GetUserInfoValidate,
};
