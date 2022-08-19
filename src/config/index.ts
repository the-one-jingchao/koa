// @ts-ignore
import dotenv from 'dotenv';
dotenv.config();

// console.log(process.env.npm_lifecycle_event)
// console.log(process.env.npm_config_env)

const config = {
  server: {
      port: Number(process.env.SERVER_PORT) || 9999,
      secret: process.env.AUTH_SECRET || 'secret'
  }
}

export default config;
