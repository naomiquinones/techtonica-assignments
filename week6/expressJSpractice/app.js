// import express from 'express'; //this is ES6, used to be 
const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();


// init middleware
// app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// don't need this because express comes with functionality to make a static folder
// app.get('/', (req, res) => {
//   // res.send('<h1>Express practice</h1><p>Made on the back end using express by Naomi!</p>');
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

// set the static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000; // 5000 for development

app.listen(PORT, () => console.log(`Naomi's express server started on port ${PORT}`));

