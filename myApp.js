require('dotenv').config()

var Person = require('./src/models/person')

const createAndSavePerson = function(done) {
  //  create document instance
  var person = new Person({
    name: 'Sitti',
    age: 30,
    favoriteFoods: [
      'nasi ayam',
      'mee goreng'
    ]
  });

  person.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
};

var arrayOfPeople = [
  {name: "Frankie", age: 74, favoriteFoods: ["Del Taco"]},
  {name: "Sol", age: 76, favoriteFoods: ["roast chicken"]},
  {name: "Robert", age: 78, favoriteFoods: ["wine"]}
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, data) {
    if (err) return console.error(err)
    done(null, data)
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(err, data) {
    if (err) return console.error(err)
    done(null, data)
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
};

const findPersonById = (personId, done) => {
  Person.findById(personId, function(err, data) {
    if (err) return console.error(err)
    done(null, data)
  });
};

const findEditThenSave = (personId, done) => {
  findPersonById(personId, function(err, person){
    if (err) return console.error(err)

    const foodToAdd = "hamburger"
    person.favoriteFoods.push(foodToAdd)
    
    person.save(function(err, data) {
      if (err) return console.error(err);
      done(null, data)
    });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20
  Person.findOneAndUpdate({'name': personName}, {age: ageToSet}, {new: true}, function(err, updatedPerson){
    if (err) return console.error(err)
    done(null, updatedPerson)
  });
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, function(err, data){
    if (err) return console.error(err)
    done(null, data)
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary"
  Person.remove({'name': nameToRemove}, function(err, updatedPerson){
    if (err) return console.error(err)
    done(null, updatedPerson)
  });
};

const queryChain = (done) => {
  const foodToSearch = "burrito"
  Person.find({favoriteFoods: foodToSearch})
        .sort({name: 1})
        .limit(2)
        .select({ age: 0 })
        .exec(function(err, result){
          if (err) return console.error(err)
          done(null, result)
        })
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
