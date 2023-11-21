// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/comments');

// Create schema
var commentSchema = new mongoose.Schema({
    name: String,
    comment: String,
    created_at: {type: Date, default: Date.now}
});

// Create model
var Comment = mongoose.model('Comment', commentSchema);

// Create middleware
app.use(bodyParser.urlencoded({extended: true}));

// Set view engine to ejs
app.set('view engine', 'ejs');

// Set up routes
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/comments', function(req, res) {
    Comment.find({}, function(err, comments) {
        if (err) {
            console.log('Error: ' + err);
        } else {
            res.render('comments', {comments: comments});
        }
    });
});

app.post('/comments', function(req, res) {
    Comment.create(req.body.comment, function(err, newComment) {
        if (err) {
            console.log('Error: ' + err);
        } else {
            res.redirect('/comments');
        }
    });
});

// Start server
app.listen(8080, function() {
    console.log('Server is running!');
});