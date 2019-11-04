const { Schema, model, connect } = require('mongoose');

const venueSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  address: {
    required: true,
    type: String
  },
  phone: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String
  }
});

// const User = model('User', userSchema);

const uri =
  'mongodb+srv://dbUser:xpxA7Dwo4S53xNJo@elbrusbot-i8nza.mongodb.net/CookingBooking?retryWrites=true&w=majority';
connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

module.exports = model('Venue', venueSchema);