// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();


// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Allow CORS:
// not necessary since we'll be making requests from a js file
  // that we are also serving (as static assets in public)
// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// ROUTES
// Root Route
app.get('/', function(req, res){
	res.sendFile('views/index.html', { root : __dirname });
});
// Gallery View Route


// The Number Guessing Game
var correctNumber = 7;

app.get('/pick-a-number', function(req, res){
	var num = parseInt(req.query.number);
	if (num === correctNumber){
		res.send('Nailed it! ' + num + ' is the correct number!');
	} else if (num < correctNumber){
		res.send('Too low!');
	} else if (num > correctNumber){
		res.send('Too High!');
	} else {
		res.send("Looks like something went wrong.");
	}
});

app.post('/pick-a-number', function(req, res){
	correctNumber = parseInt(req.body.number);
	res.send("There is a new target number");
});

// Gallery
var artworks = [title:
				artist:
				description:
				];

app.get('/artworks', function(req, res){
	res.json(artworks);
});

app.post('/artworks', function(req, res){
	var newArtwork = {
		title: req.body.title,
		artist: req.body.artist,
		description: req.body.description
	};
	artworks.push(newArtwork);
	res.json(artworks);
});


// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
