// Defines database connection
// This class is a singleton (single instance) of Database class
let mongoose = require('mongoose');

const server = '127.0.0.1:3000'; // REPLACE WITH YOUR DB SERVER
const database = 'fcc-Mail'; // REPLACE WITH YOUR DB NAME

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection error');
      });
  }
}

// This statmement returns an instance of the class
module.exports = new Database();