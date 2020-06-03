const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PintoresSchema = new Schema({

    username:{
        type: String,
        required: [true, 'Quiero Username']
    },
    password:{
        type: String,
        required: [true, 'Quiero pass'],
        default:"123@qwerty"
    },
    firstname:{type: String},
    lastname:{type: String},
    email:{type: String}
});
module.exports = mongoose.model('pintores', PintoresSchema);