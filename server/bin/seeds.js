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


const users = [{  username: "Ernesto",
  password: encryptedPass,
  role: "student",
  subject: '',
  isAvailable: '',
  price_per_hour: '',
  rating: '',
  level: 'Postgrado',
  email: 'rns_mh@hotmail.com',
  position: {latitude: '40.391885', longitude: '-3.697440'},
  phone: '693850356',
  avatar: 'https://vignette.wikia.nocookie.net/dragonball/images/1/15/Gohan_ssj2.jpg/revision/latest?cb=20130708143143&path-prefix=es',
  description: ''
},
{  username: "Marc",
  password: encryptedPass,
  role: "teacher",
  subject: 'Informática',
  isAvailable: 'true',
  price_per_hour: '20',
  rating: [5],
  level: 'Postgrado',
  email: 'marc@faable.com',
  position: {latitude: '40.491885', longitude: '-3.707440'},
  phone: '693334556',
  avatar: 'https://avatars2.githubusercontent.com/u/33485488?s=200&v=4',
  description: 'El puto amo de la programación. Si no vuelvo con la ciclogénesis explosiva, le cedo el poder a Papu.'
},
{  username: "Gema",
  password: encryptedPass,
  role: "teacher",
  subject: 'Informática',
  isAvailable: 'true',
  price_per_hour: '15',
  rating: [3],
  level: 'Postgrado',
  email: 'marc@faable.com',
  position: {latitude: '40.394459', longitude: '-3.698471'},
  phone: '600900007',
  avatar: 'http://static.azteca.com/imagenes/2017/43/1-2171851.jpg',
  description: 'Ingeniera informática con 6 años de experiencia en distintos ámbitos de la enseñanza. Seria y responsable'
},
{  username: "Alberto",
  password: encryptedPass,
  role: "teacher",
  subject: 'Lengua',
  isAvailable: 'true',
  price_per_hour: '14',
  rating: [3],
  level: 'Bachillerato',
  email: 'alberto@gmail.com',
  position: {latitude: '40.395472', longitude: '-3.700778'},
  phone: '624564556',
  avatar: 'https://estaticos.muyinteresante.es/uploads/images/article/5665552c5bafe8845fdc6838/perros-inteligentes_0.jpg',
  description: 'Filólogo y experto en Lengua y Literatura española. Garantizo mejoría inmediata'
},
{  username: "Claudio",
  password: encryptedPass,
  role: "teacher",
  subject: 'Lengua',
  isAvailable: 'true',
  price_per_hour: '12',
  rating: [2],
  level: 'Secundaria',
  email: 'alberto@gmail.com',
  position: {latitude: '40.396452', longitude: '-3.699426'},
  phone: '624564556',
  avatar: 'https://efici.com/wp-content/uploads/2016/05/posts-8.jpg',
  description: 'Filólogo jugón'
},
{  username: "Juan",
  password: encryptedPass,
  role: "teacher",
  subject: 'Historia',
  isAvailable: 'true',
  price_per_hour: '15',
  rating: [4],
  level: 'Universidad/FP',
  email: 'juano@juan.com',
  position: {latitude: '40.390164', longitude: '-3.701686'},
  phone: '622564222',
  avatar: 'https://pbs.twimg.com/media/By9bIzzCQAA3fP9.jpg',
  description: 'Qué mejor que un repaso a nuestra evolución para crecer como personas. Amante del arte.'
},
{  username: "Laura",
  password: encryptedPass,
  role: "teacher",
  subject: 'Informática',
  isAvailable: 'true',
  price_per_hour: '17',
  rating: [4],
  level: 'Postgrado',
  email: 'laura@jlaaan.com',
  position: {latitude: '40.392542', longitude: '-3.703478'},
  phone: '622424222',
  avatar: 'https://pixel.nymag.com/imgs/daily/vulture/2017/08/04/cersei/bored-matchmaker-cersei.w710.h473.jpg',
  description: 'Mi promesa de clase no será un null. Eso es algo observable if confías en mi service'
},
{  username: "Floki",
  password: encryptedPass,
  role: "teacher",
  subject: 'Matemáticas',
  isAvailable: 'true',
  price_per_hour: '10',
  rating: [2],
  level: 'Postgrado',
  email: 'floka@flok.com',
  position: {latitude: '40.394838', longitude: '-3.696376'},
  phone: '622353566',
  avatar: 'https://vignette.wikia.nocookie.net/deathbattlefanon/images/0/08/2816096-thumbnail_1992608045960713568.jpg/revision/latest?cb=20170828123523',
  description: 'Especialista en geometría y integrales'
},
{  username: "Tony",
  password: encryptedPass,
  role: "student",
  subject: '',
  isAvailable: '',
  price_per_hour: '',
  rating: '',
  level: 'Bachillerato',
  email: 'tony@hotmail.com',
  position: {latitude: '40.421885', longitude: '-3.707440'},
  phone: '693844444',
  avatar: '',
},
{  username: "Mari",
  password: encryptedPass,
  role: "student",
  subject: '',
  isAvailable: '',
  price_per_hour: '',
  rating: '',
  level: 'Secundaria',
  email: 'rns_mh@hotmail.com',
  position: {latitude: '40.381235', longitude: '-3.672542'},
  phone: '634893753',
  avatar: '',
},
{  username: "Carmenxu",
  password: encryptedPass,
  role: "student",
  subject: '',
  isAvailable: '',
  price_per_hour: '',
  rating: '',
  level: 'Postgrado',
  email: 'krmenxu@hotmail.com',
  position: {latitude: '40.382785', longitude: '-3.671440'},
  phone: '617189933',
  avatar: '',
},
{  username: "Cristial",
  password: encryptedPass,
  role: "student",
  subject: '',
  isAvailable: '',
  price_per_hour: '',
  rating: '',
  level: 'Postgrado',
  email: 'cristial@yahoo.com',
  position: {latitude: '40.431885', longitude: '-3.697440'},
  phone: '688050356',
  avatar: '',
},
{  username: "Manuten",
  password: encryptedPass,
  role: "teacher",
  subject: 'Informática',
  isAvailable: '',
  price_per_hour: '13',
  rating: '',
  level: 'Postgrado',
  email: 'manu@yahoo.com',
  position: {latitude: '40.392580', longitude: '-3.695772'},
  phone: '688050356',
  avatar: 'https://bythesegao.s3.amazonaws.com/foticas/1ac95552-572e-4f91-b9c2-3ec792d7b180/10499937_2.jpg',
  description: 'Profesor serio y profesional. Años de clases a alumnos de distintas edades'
},
{  username: "Sergio",
  password: encryptedPass,
  role: "student",
  subject: '',
  isAvailable: '',
  price_per_hour: '',
  rating: '',
  level: 'Postgrado',
  email: 'serge@yahoo.com',
  position: {latitude: '40.592580', longitude: '-3.635772'},
  phone: '677463356',
  avatar: '',
},
{  username: "Ro",
  password: encryptedPass,
  role: "student",
  subject: '',
  isAvailable: '',
  price_per_hour: '',
  rating: '',
  level: 'Postgrado',
  email: 'ro@ro.com',
  position: {latitude: '40.618462', longitude: '-3.647596'},
  phone: '611101101',
  avatar: '',
},
];

User.collection.drop();

User.create(users)
  .then(user => {
    console.log("seeds hechos");
    // mongoose.connection.close();
  })
  .catch(err => console.log(err));
//

const subjects = [{
    name:  'Matemáticas',
    // level: ['Secundaria','Instituto','Universidad / FP','Postgrado'],
    image: 'https://image.flaticon.com/icons/svg/201/201558.svg'
  },
  {
    name:  'Informática',
    // level: ['Secundaria','Instituto','Universidad / FP','Postgrado'],
    image: 'https://image.flaticon.com/icons/svg/201/201559.svg'
  },
  {
    name:  'Lengua',
    // level: ['Secundaria','Instituto','Universidad / FP','Postgrado'],
    image: 'https://image.flaticon.com/icons/svg/201/201571.svg'
  },
  {
    name:  'Historia',
    // level: ['Secundaria','Instituto','Universidad / FP','Postgrado'],
    image: 'https://image.flaticon.com/icons/svg/201/201606.svg'
  }
];

Subject.collection.drop();

Subject.create(subjects)
  .then(user => { mongoose.connection.close(); })
  .catch(err => console.log(err));
