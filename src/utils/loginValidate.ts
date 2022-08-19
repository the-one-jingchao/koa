import type { Context } from "koa";
import Schema, { Value, Rules } from "async-validator";
import { getData } from "./methods";


/**
 *
 *
 * */

const loginValidate = async <T extends Value>(
    ctx: Context,
    rules: Rules
): Promise<{ data: T, error: string}> => {
    const validator = new Schema(rules);
    let data: any = await getData(ctx);
    return await validator
        .validate(data)
        .then(() => {
            return{
                data: data as T,
                error: '',
            }
        }).catch(({ errors, fields }) => {
            return {
                data: {} as T,
                error: errors[0].message,
            }
        });
}


export default loginValidate;
