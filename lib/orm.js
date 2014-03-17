var Knex = require('knex'),
	Bookshelf = require('bookshelf'),
	MySql = Bookshelf.initialize({
  		client: 'mysql',
  		connection: {
	    	host     : '127.0.0.1',
	    	user     : 'root',
	    	database : 'cityowls',
	    	charset  : 'utf8'
  		}
	});

exports.Mysql = MySql;