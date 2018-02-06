/**
 * Created by carl.oconnor on 31/01/2018.
 */

var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


var db = mongoose.connect('mongodb://localhost/mongodb');

var Location = require('./models/locationModel');

var app = express();
var port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var router = express.Router();

router.route('/location')
    .post(function(req, res) {
        var location = new Location(req.body);

        console.log(location);
        res.send(location);

    })
    .get(function (req, res) {
        var query = {};

        if(req.query.address) {
            query.address = req.query.address;
        }

        Location.find(query, function(err, locations) {
            if(err)
                res.status(500).send(err);
            else
                res.json(locations);
        })
    });


router.route('/location/:address')
    .get(function(req, res) {
        var query = {};

        if(req.query.adderss) {
            query.address = req.query.address;
        }

        Location.findById(req.params.address, function(err, location) {
            if(err)
                res.status(500).send(err);
            else
                res.json(location);
        });
    });



app.use('/api', router);

app.get('/', function(req, res) {
   res.send('welcome to my API');
});

app.listen(port, function () {
    console.log('Gulp is running on PORT: ' + port);
});