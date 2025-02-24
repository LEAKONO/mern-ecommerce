import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <Link to={`/product/${product._id}`} className="block bg-blue-500 text-white py-1 mt-2 text-center rounded">View Details</Link>
    </div>
  );
};

export default ProductCard;
