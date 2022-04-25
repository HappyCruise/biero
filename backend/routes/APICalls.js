let express = require('express');
let router = express.Router();
let conn = require('../database');
const url = require('url');


/*GET ALL BEERS*/
router.get('/beers', function(req,res){
	let sql = 'SELECT * FROM Olut';
	(async() => {
		try {
			await conn.query(sql, (err, result) => {
				res.send(result);
			});
		}catch(err){
			logError(err, 'beers');
		}
	})();
});

/* GET BEER BY PARAM */
router.get('/beer', function(req,res) {
	let q = url.parse(req.url, true).query;
	let sql = 'SELECT * FROM Olut WHERE ';

	if(typeof q.param == 'string'){
		sql +=
			`Olut.nimi LIKE '%${q.param}%' OR `+
			`Olut.tyyppi = (SELECT id FROM tyyppi WHERE nimi LIKE '%${q.param}%')`;
	}else{
		sql += `Olut.id = ${q.param}`;
	}

	(async () => {
		try{
			await conn.query(sql, (err, result) => {
				res.send(result);
			});
		}catch(err){
			logError(err, '/beer?param=');
		}
	})();

});

/*GET ALL BEER TYPES*/
router.get('/beer/types', function(req,res){
	let sql = 'SELECT * FROM Tyyppi';
	(async() => {
		try{
			await conn.query(sql, (err, result) => {
				console.log('BEERS ');
				console.log(result);
				res.send(result);
			});
		}catch(err){
			logError(err, 'types');
		}
	})();
});
/*GET LIST BY USER*/

//Console log the error
function logError (err, route){
	console.log('DATABASE ERROR ACCESSING api/'+route);
	console.log(err);
}

module.exports = router;