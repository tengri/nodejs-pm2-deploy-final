require('dotenv').config();

module.exports = {
  apps: [{
    name: 'api-service',
    script: './dist/app.js',
    env: {
      NODE_OPTIONS: '--openssl-legacy-provider',
    },
  }],
};
