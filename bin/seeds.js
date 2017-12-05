const mongoose = require('mongoose');
const dbURL = "mongodb://localhost/teachMeNow";
mongoose.connect(dbURL, { useMongoClient: true} )

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const User = require('../models/User');
// const Meeting = require ('../models/Meeting')
// const Subject = require('../models/Subject');
// const Rating = require('../models/Rating');


const pass = 'teach';
const salt = bcrypt.genSaltSync(bcryptSalt);
const encryptedPass = bcrypt.hashSync(pass, salt);


const users = [{
    username: 'Ernesto',
    password: encryptedPass,
    role: 'alumn',
    email: 'rns_mh@hotmail.com',
    latitude: 40.392711,
    longitude: -3.698479,
    phone: 636142859,
    price_per_hour: '',
    level: 'Postgrado',
    subject: '',

  },
  {
    username: 'Marc',
    password: encryptedPass,
    role: 'teacher',
    email: 'marc@faable.com',
    latitude: 40.394688,
    longitude: -3.700067,
    phone: 634092042,
    price_per_hour: '20',
    level: 'Postgrado',
    subject: ['Informática', 'Matemáticas'],

  },
];

// User.collection.drop();
User.create(users)
  .then(user => {
    console.log("seeds hechos")
    mongoose.connection.close()
  })
  .catch(err => console.log(err))
// User.create(users, (err, docs) => {
//   if (err) {
//     throw err;
//   }
//   docs.forEach((user) => {
//     console.log('User: ' + user.username);
//   });
// });
