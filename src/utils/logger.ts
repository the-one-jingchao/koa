import { configure, getLogger } from "log4js";
import config from './../config/logger';

configure(config.log);

export default getLogger();
