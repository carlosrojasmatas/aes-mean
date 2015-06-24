var knex = require('knex')({
  client:'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password:'root',
    database:'aes',
    charset:'utf8'
  }
});

var Bookshelf = require("bookshelf")(knex);


exports.Knex = knex;
exports.Bookshelf = Bookshelf;