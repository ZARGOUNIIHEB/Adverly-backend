const mongoose = require('mongoose');

const AdvertSchema = mongoose.Schema({
    title: String,
    type: String,
    price: Number,
    city: String,
    delegation: String,
    category: String,
    subCategory: String,
    productCondition: String,
    imageAdvert: [{
        path: String
    }],
    userAdvert: String
    // addingDate: Date

})
module.exports = mongoose.model('advertSchemas', AdvertSchema);