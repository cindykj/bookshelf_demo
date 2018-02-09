const bookshelf = require('./bookshelf');

// creates an instance of table; models know to look in the Users table whenever user is typed
// const User = bookshelf.Model.extend({
//   tableName: 'users',
//   hasTimestamps: true
// });

// es6
class User extends bookshelf.Model {
  get tableName() { return 'users'} //by accessing, it triggers an invocation automatically
  get hasTimestamps() { return true } //do not use ; not sure why!

}

module.exports = User;