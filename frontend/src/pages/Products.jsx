import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto px-6 pb-10">
      <h1 className="text-3xl font-semibold text--100 mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-[#1E1E1E] border border-gray-700 rounded-lg shadow-lg p-5 transition transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h2 className="text-xl text-gray-200 font-semibold">{product.title}</h2>
            <p className="text-gray-400 text-sm">{product.category}</p>
            <p className="text-gray-300 text-sm truncate">{product.description}</p>
            <p className="text-gray-400 font-bold">${product.price}</p>
            <Link
              to={`/products/${product._id}`}
              className="block mt-3 text-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
