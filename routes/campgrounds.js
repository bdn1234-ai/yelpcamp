const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { isLoggedin, isAuthor, validateCampground } = require('../middleware');
const campground = require('../controllers/campgrounds');



router.route('/')
       .get(catchAsync(campground.index))
       .post(isLoggedin, validateCampground, catchAsync(campground.createCampground))

router.get('/new', isLoggedin, campground.renderNewForm)


router.route('/:id')
       .get(catchAsync(campground.showCampground))
       .put(isLoggedin, isAuthor, validateCampground, catchAsync(campground.editCampground))
       .delete(isLoggedin, isAuthor, catchAsync(campground.deleteCampground))


router.get('/:id/edit', isLoggedin, isAuthor, catchAsync(campground.renderFormEdit))


module.exports = router;