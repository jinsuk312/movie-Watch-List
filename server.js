// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
// create instance of express app
var app = express();
// tell express we are using body-parser
app.use(bodyParser.urlencoded({
    extended: false
}))
// tell express we are using method-override
app.use(methodOverride('_method'));
// tell express we are using handlebars, default layout with be in the main.handlebars file
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// tell express our view engine is handlebars 
app.set('view engine', 'handlebars');
// Port we are listening for
var port = 443;
app.listen(port);
// create mysql connection
var connection = mysql.createConnection({
    host: 'cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    // user name
    user: 'ka2u2sqjn1okypec',
    // password
    password: 'g8e0qc45conl8djj',
    database: 'ofzdifkpn53w0zz0',
    port: 3306
})
// when we connect, console.log the message, otherwise throw the error
connection.connect(function (err) {
    // throw err if there is an error
    if (err) throw err;
    console.log('Connected as id: ' + connection.threadId);
})
// create an express route that posts the information to the page
app.get('/', function (req, res) {
    // query our database, grabbing all the information from movies database
    connection.query('SELECT * FROM movies;', function (err, data) {
        // renders the information at index.handlebars and movies with the data object
        res.render('index', { movies: data });
    })
})

// create an express route that adds movies to the mysql database
app.post('/create', function (req, res) {
    // create a query that adds the data to the database
    connection.query('INSERT INTO movies (movie) VALUES (?);', [req.body.movie], function (err, results) {
        // throw err if there is an error
        if (err) throw err;
        // to the main page when we get the query to the database and its successful
        res.redirect('/');
    })
})
// create an express route that updates a row of data in the mysql database, based on the movies id
app.put('/update', function (req, res) {
    connection.query('UPDATE movies SET movie = ? WHERE id= ?;', [req.body.movie, req.body.id], function (err, results) {
        // throw err if there is an error
        if (err) throw err;
        // redirect to the main page when we get the query to the database and its succesful
        res.redirect('/');
    })
})
// creates an express route that deletes a row of data in mysql database, based on the movies id 
app.delete('/delete', function (req, res) {
    connection.query("DELETE FROM movies WHERE id = ?;", [req.body.id], function (err, results) {
        // throw err if there is an error
        if (err) throw err;
        // redirect to the main page when we get the query to the database and its succesful
        res.redirect('/');
    })
})