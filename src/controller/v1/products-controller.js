const Products = require('../../mongo/models/products');

const createProduct = async (req, res) => {
  try {
    const { title, descr, price, images, userid } = req.body;

    const product = await Products.create({
      title, descr, price, images, user: userid
    });
    res.send({ status: 'OK', data: product });
  } catch (e) {
    console.log('createProduct error:', e);
    res.status(500).send({ status: 'Error', data: e.message });
  }
};
const deleteProduct = (req, res) => {};

const getProduct = async (req, res) => {
  try {
    const products = await Products.find({
      price: { $gt: 100 }
    }).populate('user', 'username email data role').select('title descr price');
    res.send({ status: 'OK', data: products });
  } catch (e) {
    console.log('GetProduct error:', e);
    res.status(500).send({ status: 'Error', data: e.message });
  }
};

const getProductByUser = async (req, res) => {
  try {
    const products = await Products.find({
      user: req.params.userid
    });
    res.send({ status: 'OK', data: products });
  } catch (e) {
    console.log('GetUserProduct error:', e);
    res.status(500).send({ status: 'Error', data: e.message });
  }
};

module.exports = { createProduct, deleteProduct, getProduct, getProductByUser };
