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
			logError(err, '/beer METHOD: GET WITH PARAMS');
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


/*UPDATE BEER*/
router.put('/beer', function(req,res){

	let sql = 'UPDATE olut SET '+
	`nimi = '${req.body.nimi}', kuvaus = '${req.body.kuvaus}', `+
	`maku = '${req.body.maku}',  tyyppi = ${req.body.tyyppi} `+
	`WHERE olut.id  = ${req.body.id}`;
	console.log(sql);
	(async () => {
		try{
			await conn.query(sql, (err, result) => {
				res.send(result);
			});
		}catch(err){
			logError(err,'beer METHOD: PUT');
		}
	})();

});

/* DELETE BEER */
router.delete('/beer', function(req,res){
	let q = url.parse(req.url, true).query;
	if(!q.id){
		console.log('No ID provided');
		res.send('No ID');
	}

	//Clear all List values with beer that will be deleted. Then delete beer
	let sql = `DELETE FROM Lista WHERE olutID = ${q.id}`;
	let sql2 = `DELETE FROM Olut WHERE id = ${q.id}`;
	(async () => {
		try{
			await conn.query(sql, (err, result) => {
				console.log(result);
			});
		}catch(err){
			logError(err, 'beer METHOD: DELETE');
		}

		try{
			await conn.query(sql2, (err, result) => {
				res.send(result);
			});
		}catch(err){
			console.log(err);
		}
	})();
	console.log(sql);
});


router.post('/list', function(req, res){
	let sql = 'INSERT INTO lista VALUES '+
		`(${req.body.userID}, ${req.body.beerID});`;

	(async() => {
		try{
			await conn.query(sql, (err, result) => {
				res.send(result);
			});
		}catch(err){
			logError(err, 'list METHOD POST');
		}
	})();
});
//Console log the error
function logError (err, route){
	console.log('DATABASE ERROR ACCESSING api/'+route);
	console.log(err);
}

module.exports = router;