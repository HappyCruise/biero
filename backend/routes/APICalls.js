let express = require('express');
let router = express.Router();
let conn = require('../database');
const url = require('url');


/**
 * Get all beers
 * METHOD: GET
 */
router.get('/beers', function(req,res){
	let sql = 'SELECT olut.id, olut.nimi, olut.kuvaus, olut.maku, tyyppi.nimi AS tyyppi, olut.kuvaURL FROM Olut, tyyppi WHERE tyyppi.id = olut.tyyppi';
	console.log(sql);
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

/**
 * Get beer by parameter
 * METHOD: GET
 * @req.url param parameter to search beer with
 */
router.get('/beer', function(req,res) {
	let q = url.parse(req.url, true).query;
	let sql = 'SELECT olut.id, olut.nimi, olut.kuvaus, olut.maku, tyyppi.nimi AS tyyppi, olut.kuvaURL FROM olut, tyyppi WHERE olut.tyyppi = tyyppi.id AND ';

	if(typeof q.param == 'string'){
		sql +=
			`Olut.nimi LIKE '%${q.param}%' OR olut.maku LIKE '%${q.param}%' OR olut.tyyppi LIKE '%${q.param}%' ;`;
		//`Olut.tyyppi = (SELECT id FROM tyyppi WHERE nimi LIKE '%${q.param}%')`;
	}else{
		sql += `Olut.id = ${q.param} ;`;
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

/**
 * Get all beer types
 * METHOD: GET
 */
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


/**
 * Update Beer with given data
 * METHOD: PUT
 * @body.nimi beer name
 * @body.kuvaus beer description
 * @body.maku beer taste
 * @body.tyyppi beer type
 * @body.id beer ID
 */
router.put('/beer', function(req,res){

	let sql = 'UPDATE olut SET '+
	`nimi = '${req.body.nimi}', kuvaus = '${req.body.kuvaus}', `+
	`maku = '${req.body.maku}',  tyyppi = ${req.body.tyyppi}, `+
	`kuvaURL = '${req.body.kuvaURL}' `+ `WHERE olut.id  = ${req.body.id};`;
	console.log(sql);
	(async () => {
		try{
			await conn.query(sql, (err, result) => {
				console.log(result);
				res.send(result);
			});
		}catch(err){
			logError(err,'beer METHOD: PUT');
		}
	})();

});
/**CREATE BEER
 *
 *
 * **/
router.post('/beer', function(req,res){

	let sql = 'INSERT INTO Olut VALUES (NULL, '+
		`'${req.body.beer.nimi}', '${req.body.beer.kuvaus}',
		 '${req.body.beer.maku}', ${req.body.beer.tyyppi},
		 '${req.body.beer.kuvaURL}');`;

	console.log(sql);
	(async () => {
		try{
			await conn.query(sql, (err, result) => {
				console.log(result);
				res.send(result);
			});
		}catch(err){
			logError(err,'beer METHOD: POST');
		}
	})();

});
/**
 * Delete beer with given ID in url parameters
 * METHOD: DELETE
 * @req.url id ;Beerid to be deleted
 */
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
			logError(err, 'beer METHOD: DELETE ; QUERY 2');
		}
	})();
	console.log(sql);
});


/**
 * gets the list with userID param
 * METHOD: GET
 * @req.url ?param=userID
 */
router.get('/list', function(req,res){
	let q = url.parse(req.url, true).query;

	let sql = 'SELECT olut.id, olut.nimi, olut.kuvaus, olut.maku, tyyppi.nimi AS tyyppi, olut.kuvaURL FROM olut, tyyppi '+
	`WHERE Olut.id IN (
		SELECT olutID FROM lista WHERE userID = ${q.userID}
	)AND tyyppi.id = olut.tyyppi
	ORDER BY Olut.id;
	`;
	console.log(sql);
	(async () => {
		try{
			await conn.query(sql, (err, result) => {
				res.send(result);
			});
		}catch(err){
			logError(err, '/list?userID=');
		}
	})();
});

/**
 * Add to users list
 * METHOD: POST
 * @body.userID id of user
 * @body.beerID id of beer
 */
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
/**
 * DELETE FROM OWN LIST
 * Method: DELETE
 */
router.delete('/list', function(req,res){
	let q = url.parse(req.url, true).query;
	let sql = `DELETE FROM Lista WHERE olutID = ${q.beerID};`;

	(async () => {
		try{
			await conn.query(sql, (err, result) => {
				res.send(result);
			});
		}catch(err){
			logError(err, 'beerList METHOD: DELETE');
		}

	})();
	console.log(sql);
});
/**
 * Console log the error
 * @param err	error
 * @param route	which route was called
 */
function logError (err, route){
	console.log('DATABASE ERROR ACCESSING api/'+route);
	console.log(err);
}

module.exports = router;