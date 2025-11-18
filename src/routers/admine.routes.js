const express = require('express');
const adminController = require('../controllers/admin.controller');
const multer = require('multer');
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post('/projects', upload.single('image'), adminController.addProject);
router.post('/clients', upload.single('image'), adminController.addClient);
router.get('/clients', adminController.getAllClients);
router.get('/inquiries', adminController.getAllInquiries);
router.get('/getSubscriptions', adminController.getAllSubscriptions);

module.exports = router;