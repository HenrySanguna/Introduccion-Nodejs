const bcrypt = require('bcryptjs');

const createUser = async (req, res) => {
  try {
    console.log('req.body', req.body);

    const hash = await bcrypt.hash(req.body.password, 15);
    console.log('FIN', hash);

    res.send({ status: 'ok', message: 'user created' });
  } catch (error) {
    console.log(error);
    res.status(505).send({ status: 'Error', message: 'error.message' });
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
