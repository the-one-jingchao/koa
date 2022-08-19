module.exports = {
  apps : [{
    script: 'main.ts',
    watch: true,
    env_production : {
      NODE_ENV: 'production'  //使用production模式 pm2 start ecosystem.config.js --env production
    },
  }],

  deploy : {
    production : {
      user : 'root',
      host : '47.94.86.190',
      ref  : 'origin/main',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
