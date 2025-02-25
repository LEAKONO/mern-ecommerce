import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext"; 
import API from "../api";

const ProductDetails = () => {
  const { id } = useParams();
  const { cart, setCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    API.get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p className="text-center text-lg">Loading...</p>;

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login"); // Redirect if user is not authenticated
    } else {
      setCart((prevCart) => [...prevCart, product]); // Correctly update cart state
      alert("Product added to cart! 🛒");
    }
  };

  return (
    <div className="container mx-auto p-5 flex flex-col items-center">
      <div className="border rounded-lg shadow-md p-5 max-w-md mx-auto bg-white">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg"/>
        <h1 className="text-2xl font-bold mt-3">{product.name}</h1>
        <p className="text-gray-600 text-lg font-semibold">${product.price}</p>
        <p className="text-sm text-gray-500 mt-2">{product.description}</p>
        <button 
          className="bg-green-600 hover:bg-green-700 text-white p-2 mt-3 w-full rounded-lg"
          onClick={handleAddToCart}>
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
