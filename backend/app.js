// Mongo DB connection mongodb+srv://mantzy:<password>@cluster0.17iyd.mongodb.net/<dbname>?retryWrites=true&w=majority
// Mongo Db password TnYMiUO2GqJZt1cc



const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/db.config');
/*const mongoose = require('mongoose');*/


const postRoutes = require('./routes/post');

const userRoutes = require('./routes/user');

const commentRoutes = require('./routes/comment');

const path = require('path');


// mongoose.connect('mongodb+srv://mantzy:TnYMiUO2GqJZt1cc@cluster0.17iyd.mongodb.net/<dbname>?retryWrites=true&w=majority')
//     .then(() => {
//         console.log('Successfully connected to MongoDB Atlas!');
//     })
//     .catch((error) => {
//         console.log('Unable to connect to MongoDB Atlas!');
//         console.error(error);
//     });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());


db.authenticate().then(() => console.log("Data  Base Connected !")).catch((err) => console.log(err));


app.use('/images', express.static(path.join(__dirname, 'images')));


app.use('/api/posts', postRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/comment', commentRoutes);

module.exports = app;