const express = require('express');
const authorController = require('../controllers/author.controller');
const authorMiddleware = require('../middleware/author.middleware');

const router = express.Router();

router.get('/author', authorMiddleware.authorMiddleware, authorController.author);

module.exports = router;
