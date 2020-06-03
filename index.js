const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const PUERTO = process.env.PORT || 3000;

let pintoresRouter = require('./routes/pintor');
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + './views/partials');
app.use(express.static(__dirname + './public'));

app.use('/', pintoresRouter);

mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://DanyR13:1234567890@riveracarlos-ha1hz.mongodb.net/pintores?retryWrites=true&w=majorityCopy';
mongoose.connect(cadena, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Conexión establecida');
})
.catch(err=> console.log(err));

app.listen(PUERTO, ()=>{
    console.log('Escuchando el puerto...');
});

