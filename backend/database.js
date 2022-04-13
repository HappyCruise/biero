let mysql = require('mysql');
let conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'pelidata',
	database: 'bieroDB'
});
conn.connect(function (err){
	if(err) throw err;
	console.log('Database Connected Successfully.');
});
module.exports = conn;