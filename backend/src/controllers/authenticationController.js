const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

const createToken = (user) => jwt.sign({ _id: user.id }, process.env.JWT_SECRET);

class AuthenticationController {
  async register(req, res, next) {
    const { email, password } = req.body;
    console.log(req.body);
    try {
      if (!email || !password) {
        return res.status(500).json({
          message: 'Email and password must be provided',
        });
      }
      const user = await User.findOne({ email });
      if (user) {
        return res.status(422).json({ message: 'Email is already in use' });
      }
      if (password.length < 5) {
        return res.json({
          status: 'error',
          error: 'Password to small. Should be atleast 6 characters',
        });
      }

      const encodePassword = bcrypt.hash(password, 10);

      const newUser = new User({
        email,
        password: encodePassword,
      });
      await newUser.save();
      res.status(200).json({ token: createToken(newUser) });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = new AuthenticationController();
