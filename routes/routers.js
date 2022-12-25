const express = require('express');
const router = express.Router();
const {getAllItems, createItems, getItemId, updateItem, deleteItem} = require('../controllers/controller')

router.route('/').get(getAllItems).post(createItems);
router.route('/:id').get(getItemId).patch(updateItem).delete(deleteItem);
module.exports = router