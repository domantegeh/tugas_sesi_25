const express = require('express');
const Controller = require('../controllers/controller');
const Middleware = require('../middleware/middleware');

const router = express.Router();

router.get('/api', Middleware.helloWorld, Controller.helloWorld);

module.exports = router;
