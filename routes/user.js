const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();


// GET /user                         
router.get('/', UserController.getusers);
// POST /user                        
router.post('/', UserController.createuser);
// PUT /user/:id                     
router.put('/', UserController.updateuser);
// DELETE /user/:id                  
router.delete('/', UserController.deleteuser);

module.exports = router;