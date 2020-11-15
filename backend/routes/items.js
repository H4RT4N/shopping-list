const router = require('express').Router();

// Bring in Item Model
const Item = require('../models/item.model');

// @route GET items/
// @desc get all items
// @access public
router.route('/').get((req, res) => {
    Item.find()
    .then(items => res.json(items))
});

// @route POST items/
// @desc create an item
// @access public
router.route('/').post((req, res) => {
    const postItem = new Item({
        name: req.body.name,
        category: req.body.category
    });
    postItem.save()
    .then(() => res.json('Item successfully added!'))
});

// @route DELETE items/
// @desc DELETE ALL items in collection
// @access public
router.route('/').delete((req, res) => {
    Item.deleteMany({})
    .then(() => res.json('All Items have been deleted.'))
    .catch(err => res.status(404).json('Error: ' + err));
});

// @route DELETE items/:id
// @desc DELETE an item
// @access public
router.route('/:id').delete((req, res) => {
    Item.findByIdAndRemove(req.params.id)
    .then(() => res.json('Item has been deleted.'))
    .catch(err => res.status(404).json('Error: ' + err));
});

module.exports = router;