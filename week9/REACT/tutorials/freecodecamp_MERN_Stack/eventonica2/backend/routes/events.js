const router = require('express').Router();
let Event = require('../models/event.model');

// show all events
router.route('/').get((req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error getting events: ' + err)); // catch get all events error
});

// add an event
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const keywords = req.body.keywords;
  const location = req.body.location;
  const date = Date.parse(req.body.date);

  const newEvent = new Event({
    username,
    keywords,
    location,
    date,
  });

  newEvent.save() // use mongoose save function
    .then(() => res.json('Event added'))
    .catch(err => res.status(400).json('Error saving this event: ' + err)); // catch save new event error
});

// show a specific event
router.route('/:id').get((req, res) => {
  Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err)); // catch findById error
});

// update a specific event
// ---------- using post and mongoose save function
router.route('/update/:id').post((req, res) => {
  Event.findById(req.params.id)
    .then(event => {
      event.username = req.body.username;
      event.keywords = req.body.keywords;
      event.location = req.body.location;
      event.date = req.body.date;

      event.save() // use mongoose save function
        .then(() => res.json('Event updated'))
        .catch(err => res.status(400).json('Error saving the updates: ' + err)); // catch save error
    })
    .catch(err => res.status(400).json('Error finding this event: ' + err)); // catch findById error
});

// delete a specific event
router.route('/:id').delete((req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;