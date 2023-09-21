const Product = require("../models/product.model");

const create = async (product) => {
  const newProduct = await Product.create(product);
  return newProduct;
};

const update = async (product) => {
  // const product = await Product.findOneAndUpdate({ _id: product._id}, product);
};

const findById = async (id) => {
  const product = await Product.findById(id);
  return product;
};

const deleteById = async () => {};

module.exports = {
  create,
  update,
  findById,
  deleteById,
};
