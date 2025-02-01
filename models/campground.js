const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const review = require('./review');

// Định nghĩa schema cho Campground
const campgroundSchema = new Schema({
    title: String,
    location: String,
    price: Number,
    description: String,
    image: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews:[
        {
            type: Schema.Types.ObjectId,
            ref: 'review'
        }
    ]
});


campgroundSchema.post('findOneAndDelete', async function (doc) {
    if(doc){
        await review.deleteMany({
            _id:{
                $in: doc.reviews
            }
        })
    }
})

// Export model
module.exports = mongoose.model('Campground', campgroundSchema);