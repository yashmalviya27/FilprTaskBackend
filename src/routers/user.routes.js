const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

router.post('/inquiry',userController.createInquiry);
router.get('/getprojects',userController.getAllProjects);
router.get('/getclients',userController.getAllClients);
router.post('/addsubscribed',userController.addSubscribed);




module.exports = router;