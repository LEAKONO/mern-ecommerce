import { useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import API from "../api";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  // Fetch cart data from the backend
  useEffect(() => {
    API.get("/cart")
      .then((res) => setCart(res.data.products)) // Set cart to the products array
      .catch((err) => console.error(err));
  }, []);

  // Remove item from cart
  const removeItem = (id) => {
    API.delete(`/cart/${id}`)
      .then(() => setCart(cart.filter((item) => item.product._id !== id))) // Update cart state
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.product._id} className="flex justify-between p-4 border">
            <p>{item.product.name} - ${item.product.price} (Qty: {item.quantity})</p>
            <button onClick={() => removeItem(item.product._id)} className="text-red-600">
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
