const joi = require('joi')
const campground = require('./models/campground')
const review = require('./models/review')

module.exports.campgroundSchema = joi.object({
    campground: joi.object({
        title: joi.string().required(),
        price: joi.number().required(),
        image: joi.string().required(),
        location: joi.string().required(),
        description: joi.string().required(),
    }).required()
})

module.exports.reviewSchema = joi.object({
    review: joi.object({
        rate: joi.number().required().min(0).max(5),
        body: joi.string().required()
    }).required()
})
