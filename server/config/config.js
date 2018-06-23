var env = 'mongo ds217131.mlab.com:17131/my_todo_nodeapp -u todo_user -p todoapp@123' || 'developement';

if (env === 'developement' || env === 'test') {
  var config = require('./config.json');
  var envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
