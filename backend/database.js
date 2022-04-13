let mysql = require('mysql');

//Database config
let conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'pelidata',
	database: 'bieroDB'
});

//Connect to database with config
conn.connect(function (err){
	if(err) throw err;
	console.log('Database Connected Successfully.');
});
module.exports = conn;