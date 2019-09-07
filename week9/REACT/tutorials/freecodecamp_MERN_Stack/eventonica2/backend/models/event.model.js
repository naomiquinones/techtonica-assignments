const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  username: { type: String, required: true },
  keywords: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: String, required: true }
}, {
    timestamps: true,
  });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;