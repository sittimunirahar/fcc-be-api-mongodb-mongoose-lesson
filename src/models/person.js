let mongoose = require('mongoose');

let mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  // demonstrates definition of doc shape
  // defining as an object enables passing of useful options (validators)
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});

module.exports = mongoose.model('Person', personSchema);
