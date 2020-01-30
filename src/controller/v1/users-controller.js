const bcrypt = require('bcryptjs');
const users = require('../../mongo/models/users')

const createUser = async (req, res) => {
  try {

    const { username, password, email, data } = req.body;

    const hash = await bcrypt.hash(password, 15);

    await users.create({
      username, // username: username
      email,
      data,
      password: hash
    });
    console.log('FIN', hash);

    res.send({ status: 'ok', message: 'user created' });
  } catch (error) {
    if (error.code && error.code === 11000) {
      res.status(400).send({ status: 'DUPLICATED_VALUES', message: error.keyValue });
      return;
    }
    // console.log('error createuser', error);
    res.status(505).send({ status: 'Error', message: error.message });
  }
};
const deleteUser = (req, res) => {
  res.send({ status: 'ok', message: 'user delete' });
};
const getUser = (req, res) => {
  res.send({ status: 'ok', data: [] });
};
const updateUser = (req, res) => {
  res.send({ status: 'ok', message: 'user updated' });
};

module.exports = {
  createUser,
  deleteUser,
  getUser,
  updateUser
};
