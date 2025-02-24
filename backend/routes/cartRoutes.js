const express = require("express");
const Cart = require("../models/Cart");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = new Cart({ user: req.user._id, products: [] });
    }

    const { product, quantity } = req.body;

    const existingProduct = cart.products.find((item) => item.product.toString() === product);

    if (existingProduct) {
      existingProduct.quantity += quantity || 1;
    } else {
      cart.products.push({ product, quantity: quantity || 1 });
    }

    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", protect, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate("products.product");
    if (!cart) {
      return res.status(404).json({ message: "Cart is empty" });
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:productId", protect, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.products = cart.products.filter(
      (item) => item.product.toString() !== req.params.productId
    );

    await cart.save();
    res.json({ message: "Product removed from cart", cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/", protect, async (req, res) => {
  try {
    await Cart.findOneAndDelete({ user: req.user._id });
    res.json({ message: "Cart cleared" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
