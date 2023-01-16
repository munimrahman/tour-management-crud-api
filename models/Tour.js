const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minLength: [10, "Name must be at least 10 characters."],
    maxLength: [100, "Name must be at most 100 characters."],
  },
  location: {
    type: String,
    required: true,
    trim: true,
    maxLength: [100, "Location must be at most 100 characters."],
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minLength: [100, "Description must be at least 100 characters"],
    maxLength: [1000, "Description must be at most 1000 characters."],
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Minimum price must be greater than 0."],
  },
  maxCapacity: {
    type: Number,
    required: true,
    min: [0, "Maximum capacity must be greater than 0."],
  },
  minCapacity: {
    type: Number,
    required: true,
  },
  tourGuide: {
    type: String,
    required: true,
    trim: true,
    minLength: [10, "Name must be at least 10 characters."],
    maxLength: [100, "Name must be at most 100 characters."],
  },
  views: {
    type: Number,
    default: 0,
  },
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;

/*
name: the name of the tour.
start_date: the start date of the tour.
end_date: the end date of the tour.
locations: an array of locations that the tour will visit.
price: the price of the tour.
max_capacity: the maximum number of people that can book the tour.
current_capacity: the number of people currently booked on the tour.
tour_guide: a reference to the user who is serving as the tour guide.
bookings: an array of references to the bookings made for the tour.
*/
["name", "locations", "price", "image", "description"];
