const mongoose = require('mongoose');

const AdvertSchema = mongoose.Schema({
    title: String,
    type: String,
    price: Number,
    description: String,
    city: String,
    delegation: String,
    category: String,
    subCategory: String,
    productCondition: String,
    imageAdvert: [{
        path: String
    }],
    userAdvert: String,
    // addingDate: Date
    advertState: String,
    //"Approved" or "Under review" 
})
module.exports = mongoose.model('advertSchemas', AdvertSchema);