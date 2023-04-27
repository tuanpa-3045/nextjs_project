const { Router } = require('express');
const router = Router();

const { register } = require('../controllers/authenticationController');

router.route('/register').post(register);

module.exports = router;
