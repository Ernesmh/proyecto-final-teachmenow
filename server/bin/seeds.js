const mongoose = require('mongoose');
const dbURL = "mongodb://localhost/teachMeNow";
mongoose.connect(dbURL, { useMongoClient: true} );

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const User = require('../models/User');
// const Meeting = require ('../models/Meeting')
const Subject = require('../models/Subject');
// const Rating = require('../models/Rating');


const pass = 'teach';
const salt = bcrypt.genSaltSync(bcryptSalt);
const encryptedPass = bcrypt.hashSync(pass, salt);


const users = [{
    username: 'Ernesto',
    password: encryptedPass,
    role: 'student',
    available: '',
    email: 'rns_mh@hotmail.com',
    latitude: 40.392711,
    longitude: -3.698479,
    phone: 636142859,
    price_per_hour: '',
    avatar:'',
    level: 'Postgrado',
    subject: '',
    rating: '',
    meeting: '',
  },
  {
    username: 'Marc',
    password: encryptedPass,
    role: 'teacher',
    available: 'yes',
    email: 'marc@faable.com',
    latitude: 40.394688,
    longitude: -3.700067,
    phone: 634092042,
    price_per_hour: '20',
    avatar:'',
    level: 'Postgrado',
    subject: ['Informática', 'Matemáticas'],
    rating: '',
    meeting: '',

  },
  {
    username: 'Manuel',
    password: encryptedPass,
    role: 'teacher',
    available: 'yes',
    email: 'manuel@manuel.com',
    latitude: 40.404688,
    longitude: -3.680067,
    phone: 630399044,
    price_per_hour: '15',
    avatar:'',
    level: 'Bachillerato',
    subject: ['Lengua', 'Historia'],
    rating: '',
    meeting: '',
  },
  {
    username: 'John',
    password: encryptedPass,
    role: 'teacher',
    available: 'yes',
    email: 'john@john.com',
    latitude: 40.394028,
    longitude: -3.695871,
    phone: 622999340,
    price_per_hour: '10',
    avatar:'',
    level: 'Postgrado',
    subject: ['Matemáticas'],
    rating: '',
    meeting: '',
  },
  {
    username: 'Guilhem',
    password: encryptedPass,
    role: 'teacher',
    available: 'no',
    email: 'guille@guille.com',
    latitude: 40.392361,
    longitude: -3.695989,
    phone: 630399044,
    price_per_hour: '18',
    avatar:'',
    level: 'Universidad / FP',
    subject: ['Lengua'],
    rating: '',
    meeting: '',
  },
  {
    username: 'Ernesto',
    password: encryptedPass,
    role: 'student',
    available: '',
    email: 'rns_mh@hotmail.com',
    latitude: 40.392711,
    longitude: -3.698479,
    phone: 636142859,
    price_per_hour: '',
    avatar:'',
    level: 'Postgrado',
    subject: '',
    rating: '',
    meeting: '',
    },
    {
    username: 'Rocío',
    password: encryptedPass,
    role: 'student',
    available: '',
    email: 'ro@rocio.com',
    latitude: '',
    longitude: '',
    phone: 638299302,
    price_per_hour: '',
    avatar:'',
    level: 'Instituto',
    subject: '',
    rating: '',
    meeting: '',
    },
    {
    username: 'Claudia',
    password: encryptedPass,
    role: 'student',
    available: '',
    email: 'clau@clau.com',
    latitude: '',
    longitude: '',
    phone: 688928934,
    price_per_hour: '',
    avatar:'',
    level: 'Universidad / FP',
    subject: '',
    rating: '',
    meeting: '',
    },
];

// User.collection.drop();
User.create(users)
  .then(user => {
    console.log("seeds hechos");
    mongoose.connection.close();
  })
  .catch(err => console.log(err));


const subjects = [{
    name:  'Matemáticas',
    level: ['Secundaria','Instituto','Universidad / FP','Postgrado'],
    image: ''
  },
  {
    name:  'Informática',
    level: ['Secundaria','Instituto','Universidad / FP','Postgrado'],
    image: ''
  },
  {
    name:  'Lengua',
    level: ['Secundaria','Instituto','Universidad / FP','Postgrado'],
    image: ''
  },
  {
    name:  'Historia',
    level: ['Secundaria','Instituto','Universidad / FP','Postgrado'],
    image: ''
  }
];

// User.collection.drop();
Subject.create(subjects)
  .then(user => { mongoose.connection.close(); })
  .catch(err => console.log(err));
