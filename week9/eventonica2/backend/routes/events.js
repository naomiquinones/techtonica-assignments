const router = require('express').Router();
let Event = require('../models/event.model');
const eventfulSearch = require('../eventfulSearch.js');

// use eventful API to get event data
router.route('/').post((req, res) => {
  console.log(req);
  eventfulSearch(req)
      .then(res => {
        console.log(res.data);
        // display another item to let user sign up to go to this event
      })
      .catch(err => console.log('- - - - oops: \n'+err));

});

// add an event to mongoDB Atlas database
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const keywords = req.body.keywords;
  const location = req.body.location;
  // const date = Date.parse(req.body.date);
  const date = req.body.date;
  
  const newEvent = new Event({
    username,
    keywords,
    location,
    date,
  });

  newEvent.save() // use mongoose save function
    .then(() => res.json('Event added'))
    .catch(err => res.status(400).json('Error saving this event: ' + err)); // catch save new event error, must use '+', not ',' to concatenate
});


// show all events stored in mongoDB Atlas database
router.route('/list').get((req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error getting events: ' + err)); // catch get all events error
});

// show a specific event from mongoDB Atlas database
router.route('/:id').get((req, res) => {
  Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error getting this event: ' + err)); // catch findById error, must use '+', not ',' to concatenate
});

// update a specific event in mongoDB Atlas database
// ---------- using post and mongoose save function
// wrapped Date.parse around req.body.date to try
// to fix a bug that breaks when date format
// is not recognized when trying to update some items

router.route('/update/:id').post((req, res) => {
  Event.findById(req.params.id)
    .then(event => {
      console.log(event);
      event.username = req.body.username;
      event.keywords = req.body.keywords;
      event.location = req.body.location;
      // event.date = Date.parse(req.body.date);
      event.date = req.body.date;

      event.save() // use mongoose save function
        .then(() => res.json('Event updated'))
        .catch(err => res.status(400).json('Error saving the updates: ' + err)); // catch save error, must use '+', not ',' to concatenate
    })
    .catch(err => res.status(400).json('Error finding this event: ' + err)); // catch findById error, must use '+', not ',' to concatenate
});

// delete a specific event from mongoDB Atlas database
router.route('/:id').delete((req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => res.json('Event deleted.'))
    .catch(err => res.status(400).json('Error deleting this event: ' + err)); // catch findByIdAndDelete error, must use '+', not ',' to concatenate
});

module.exports = router;