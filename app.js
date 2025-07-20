const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

//express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://mudash:<muda1407>@mudashtut.6drvj.mongodb.net/mudashtut?retryWrites=true&w=majority&appName=mudashtut';
 mongoose.connect(dbURI, { userNewUrlParser: true, useUnifiedTopology: true}) 
 .then((result) => console.log('server connected db'))
 .catch((err) => console.log(err, 'not connected'));

//rgister view engine

app.set('view engine', 'ejs');




//middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));
   
app.get('/', (req, res) => {
    const blogs = [
        {title: 'mudash finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'toyin finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'how to defeat browser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', {title: 'Home', blogs});
});



app.get('/about', (req, res) => {
    
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Creat a new Blog'});
})

//404 page
app.use((req, res) => {
    
   res.status(404).render('404', {title: '404'} );
});