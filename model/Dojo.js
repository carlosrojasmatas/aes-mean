var cnn = require('../config/connection');

var Dojo = cnn.Bookshelf.Model.extend({
	tableName : 'dojos',
	hasTimesstamps: true,
});

var Dojos = cnn.Bookshelf.Collection.extend({
	model:Dojo
});

exports.Dojos = Dojos;
exports.Dojo = Dojo;