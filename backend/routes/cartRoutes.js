const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// 🛒 **Get Cart for Logged-in User**
router.get("/", protect, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate("products.product");
    res.json({ cart: cart ? cart.products : [] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 🛒 **Add Product to Cart**
router.post("/add", protect, async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;
    const product = await Product.findById(productId);

    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = new Cart({ user: req.user._id, products: [] });
    }

    // Check if product already exists in cart
    const existingItem = cart.products.find((item) => item.product.toString() === productId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.products.push({ product: productId, quantity });
    }

    await cart.save();
    res.json({ message: "Added to cart", cart: cart.products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ❌ **Remove Product from Cart**
router.delete("/remove/:id", protect, async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.products = cart.products.filter((item) => item.product.toString() !== req.params.id);

    await cart.save();
    res.json({ message: "Item removed", cart: cart.products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 🗑 **Clear Entire Cart**
router.delete("/", protect, async (req, res) => {
  try {
    await Cart.findOneAndDelete({ user: req.user._id });
    res.json({ message: "Cart cleared" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
