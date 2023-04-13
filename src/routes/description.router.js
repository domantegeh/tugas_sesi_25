const express = require('express');
const descriptionController = require('../controllers/description.controller');
const descriptionMiddleware = require('../middleware/description.middleware');

const router = express.Router();

router.get('/description', descriptionMiddleware.descriptionMiddleware, descriptionController.description);

module.exports = router;
