const mongoose = require('../config/mongoose');
const { Schema, Types } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
  password: {
    type: String
  },
  registerDay: {
    type: Date
  }
});

const UserModel = mongoose.model('User', userSchema);

const find = async () => {
  try {
    const result = await UserModel.find({});
    return result;
  } catch (exception) {
    throw new Error(exception.message);
  }
};

// Add here the method to save a new resource

module.exports = {
  find,
};
