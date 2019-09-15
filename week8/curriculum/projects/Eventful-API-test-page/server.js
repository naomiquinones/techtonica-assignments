const express = require('express');
const expressServer = express();

// const hostname = '127.0.0.1'
const port = 5000;

expressServer.get('/', (req,res) => {
  res.send('Hello, what would you like to do here?');
});

// implement GET with route /ping
expressServer.get('/ping', (req,res) => {
  // console.log('getting to /ping',res);
  res.send('we got to /ping');
});

// example of how to post could be going to specific event name
expressServer.post('/events/:event', (req,res) => {
  res.send(req.params.event); // call the API with an event
});

expressServer.listen(port, () => {
  console.log(`Starting our eventful app at ${port}/`);
});