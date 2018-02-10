const bookshelf = require('./bookshelf');

const User = require('./User');

class Post extends bookshelf.Model {
  get tableName() { return 'posts' }
  get hasTimestamps() { return true }

  author() {
    return this.belongsTo(User); //referencing User class, ensure include const User
  }
}

module.exports = Post;