const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products_manager', {useNewUrlParser:true});

const 
 ModelSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true, 
        minlength: [3, 'Title cant be less than 3']
    },
    url: { 
        type: String, 
        required: true, 
        minlength: 3 
    },
    price: { 
        type: Number, 
        required: true 
    },
}, {timestamps:true});

module.exports = mongoose.model('Model', ModelSchema);