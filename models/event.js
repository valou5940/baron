const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({

  barName: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  fbLink: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },

});

module.exports = mongoose.model('Event', eventSchema);


