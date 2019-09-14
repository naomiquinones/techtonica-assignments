const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// fyi used to need bodyparser but new version of express includes it

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
// mongodb nodejs ... rewrote to parse MongoDB strings and deal with deprecated ensure function so need these flags for now

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('\n-*-*-*-*-*-*-*-*-*-*-* Hooray! We have a successful MongoDB database connection! *-*-*-*-*-*\n')
})

const eventsRouter = require('./routes/events');
const usersRouter = require('./routes/users');

app.use('/events', eventsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`\n-----\n-------  Eventonica 2 server running on port: ${port}  -------`);
})