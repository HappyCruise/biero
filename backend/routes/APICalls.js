let express = require('express');
let router = express.Router();
let conn = require('../database');


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