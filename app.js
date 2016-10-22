
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose"); 

app.use(bodyParser.json());


  Genre = require('./models/genre');
  Book = require('./models/book')
//connect to mongoose

mongoose.connect('mongodb://localhost/restful')
var db = mongoose.connection;

app.get('/', function(req, res){
    //res.send('Hello workd');
    res.send('prelae use /api/book or /api/gener ..');
}); 

app.get('/api/genres', function(req, res){
console.log('sending data ... ' + req.body); 
    Genre.getGenres(function(err, genres){
         if(err){
         console.log('error occure in getting genres .. ');
            throw err;
        }
        res.json(genres);
    });  
});

app.get('/api/books', function(req, res){
console.log('sending data ... ' + req.body); 
    Book.getBooks(function(err, books){
         if(err){
         console.log('error occure in getting books .. ');
            throw err;
        }
        res.json(books);
    });  
});

app.get('/api/book/:_id', function(req, res){
console.log('sending data ... ' + req.body); 
    Book.getBookById(req.params._id, function(err, book){
         if(err){
         console.log('error occure in getting books .. ');
            throw err;
        }
        res.json(book);
    });  
});

app.post('/api/genres', function(req, res){
var genre = req.body;

    Genre.addGenre(genre, function(err, genre){
         if(err){
         console.log('error occure in adding genre .. ');
            throw err;
        }
        res.json(genre);
    });  
});

app.post('/api/books', function(req, res){
var book = req.body;

    Book.addBook(book, function(err, book){
         if(err){
         console.log('error occure in adding boo..k .. ');
            throw err;
        }
        res.json(book);
    });  
});

app.put('/api/genres/:_id', function(req, res){
var id = req.params._id;
var genre = req.body;

    Genre.updateGenre(id, genre, {}, function(err, genre){
         if(err){
         console.log('error occure in adding genre .. ');
            throw err;
        }
        res.json(genre);
    });  
}); 

app.put('/api/books/:_id', function(req, res){
var id = req.params._id;
var book = req.body;

    Book.updateBook(id, book, {}, function(err, book){
         if(err){
         console.log('error occure in adding book .. ');
            throw err;
        }
        res.json(book);
    });  
}); 

app.delete('/api/genres/:_id', function(req, res){  // express api delete method
var id = req.params._id;

    Genre.removeGenre(id,  function(err, genre){  // method from model that use mongoose
         if(err){
         console.log('error occure in deleting genre .. ');
            throw err;
        }
        res.json(genre);
    });  
}); 
 
app.delete('/api/books/:_id', function(req, res){  // express api delete method
var id = req.params._id;

    Book.removeBook(id,  function(err, book){  // method from model that use mongoose
         if(err){
         console.log('error occure in deleting book .. ');
            throw err;
        }
        res.json(book);
    });  
}); 

app.listen(3000); 
console.log('running on port 3000 ... lar'); 