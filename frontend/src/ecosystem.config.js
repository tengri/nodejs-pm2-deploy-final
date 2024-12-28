require('dotenv').config();

const { DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/master' } = process.env;

module.exports = {
  apps: [{
    name: 'api-frontend',
    script: './dist/app.js',
    env: {
      NODE_OPTIONS: '--openssl-legacy-provider',
    },
  }],

  // Настройка деплоя
  deploy: {
    production: {
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'https://github.com/Username/repository.git',
      path: DEPLOY_PATH,
      'pre-deploy': 'scp -Cr ./build/*  praktikum@$84.252.132.236:home/praktikum/mesto-frontend',
      'post-deploy': 'export NODE_OPTIONS=--openssl-legacy-provider && npm i && npm run build',
    },
  },
};

