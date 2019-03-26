const express = require('express');
const router = express.Router();


//Item model
const Item = require('../../models/Item') // the "../" mean back to the one directory

//@route GET api/items
//@desc Get All items
//@access public

router.get('/',(req,res) => {
  Item.find()
    .sort({date:-1})
    .then(items => res.json(items))
});

//@route POST api/items
//@desc create a Item
//@access public

router.post('/',(req,res) => {
   const newItem = new Item({
       name:req.body.name
     });
     newItem.save().then(item => res.json(item));
});

//@route DELETE api/items
//@desc Delete a Item
//@access public

router.delete('/:id',(req,res) => {
  Item.findById(req.params.id)
     .then(item => item.remove().then(()=>res.json({sucess: true})))
     .catch(err => res.status(404).json({sucess:false}));
});


module.exports = router;


