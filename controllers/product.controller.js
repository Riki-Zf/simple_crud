const Product = require("../models/product.models.js");

const getProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body); //Update

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    const updateProduct = await Product.findById(id);
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      res.status(400).json({ message: "product not found" });
    }

    res.status(200).json({ message: "deleted product successfully" });
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
