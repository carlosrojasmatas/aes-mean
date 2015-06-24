var cnn = require('../config/connection');

var Post = cnn.Bookshelf.Model.extend({
	tableName : 'posts',
	hasTimesstamps: true,
});

var Posts = cnn.Bookshelf.Collection.extend({
	model:Post
});

exports.Posts = Posts;
exports.Post = Post;