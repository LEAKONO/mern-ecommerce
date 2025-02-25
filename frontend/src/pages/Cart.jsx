import { useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import API from "../api";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect unauthenticated users to login
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const token = localStorage.getItem("token");

    API.get("/cart", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setCart(res.data.cart || []); // Ensure cart is always an array
      })
      .catch((err) => console.error("Error fetching cart:", err.response?.data?.message || err.message));
  }, [user]);

  // Remove item from cart (Backend)
  const removeItem = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.delete(`/cart/remove/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setCart(res.data.cart || []); // Update cart state after removing
    } catch (err) {
      console.error("Error removing item:", err.response?.data?.message || err.message);
    }
  };

  // Clear the entire cart (Backend)
  const clearCart = async () => {
    try {
      const token = localStorage.getItem("token");

      await API.delete("/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setCart([]); // Reset cart state
    } catch (err) {
      console.error("Error clearing cart:", err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">Cart</h1>
      
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.product._id} className="flex justify-between p-4 border">
              <p>{item.product.name} - ${item.product.price} (Qty: {item.quantity})</p>
              <button onClick={() => removeItem(item.product._id)} className="text-red-600">
                Remove
              </button>
            </div>
          ))}
          <button 
            onClick={clearCart} 
            className="bg-red-600 text-white p-2 w-full mt-5 rounded-md"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
