const bcrypt = require('bcryptjs');
const users = require('../../mongo/models/users');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await users.findOne({ email });
    if (user) {
      const isOk = await bcrypt.compare(password, user.password);
      if (isOk) {
        res.send({ status: 'OK', data: {} });
      } else {
        res.status(403).send({ status: 'INVALID_PASSWORD', message: '' });
      }
    } else {
      res.status(401).send({ status: 'USER_NOT_FOUND', message: '' });
    }
  } catch (e) {
    res.status(500).send({ status: 'ERROR', message: e.message });
  }
};

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
const updateUser = async (req, res) => {
  try {
    const { username, email, data, userId } = req.body;
    await users.findByIdAndUpdate(userId, {
      username, email, data
    });
    res.send({ status: 'ok', message: 'user updated' });
  } catch (error) {
    if (error.code && error.code === 11000) {
      res.status(400).send({ status: 'DUPLICATED_VALUES', message: error.keyValue });
      return;
    }
    res.status(500).send({ status: 'ERROR', message: 'not updated' });
  }
};

module.exports = {
  createUser,
  deleteUser,
  getUser,
  updateUser,
  login
};
