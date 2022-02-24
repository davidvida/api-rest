const { userModel } = require('../models');

const getUsers = async () => {
  try {
    return await userModel.find();
  } catch (exception) {
    throw new Error(e.message);
  }
}

module.exports = {
  getUsers,
};
