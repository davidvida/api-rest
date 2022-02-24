const { userService } = require('../services');

const getUsers = async (req, res, next) => {
  try {
    const result = await userService.getUsers();
    res
    .status(200)
    .send(result);
    next();
  } catch (exception) {
    res
    .status(400)
    .send({ message: exception.message });
  }
};

module.exports = {
  getUsers,
};
