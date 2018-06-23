const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://todo_user:todoapp@123@ds217131.mlab.com:17131/my_todo_nodeapp');

module.exports = {mongoose};
