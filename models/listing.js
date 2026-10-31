const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title :{
        type : String,
        required : true
    },
    discription : String,
    image :{
        type : String,
        set : (V)=> (V === "")?"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800" : V,
        default : "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    },
    price : Number,
    location : String,
    country : String
});

const listing = mongoose.model("Listing",listingSchema);
module.exports = listing;