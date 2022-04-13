const express = require('express');
const path = require('path');

const app = express(),
	bodyParser = require('body-parser'),
	port = 3080;

app.use(bodyParser.json());
bodyParser.urlencoded ({extended: true});

app.use(express.static(path.join(__dirname, '../biero/src')));

app.get('/', (req,res)=> {
	res.sendFile(path.join(__dirname, '../biero/build/index.html'));
});

//Route all api calls to APICalls.js
app.use('/api', require('./routes/APICalls'));

app.listen(port, () => {
	console.log(`Server listening on port::${port}`);
});



