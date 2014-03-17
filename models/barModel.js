var Mysql = require('./../lib/'),
	Bar = MySql.Model.extend({
  		tableName: 'bar'
	});

exports.Bar = Bar;