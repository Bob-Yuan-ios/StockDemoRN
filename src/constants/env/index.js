// dev: 开发环境 prd：生产环境
const env = 'dev';

/* eslint-disable import/no-dynamic-require */
module.exports = require('./' + env);
/* eslint-enable import/no-dynamic-require */
