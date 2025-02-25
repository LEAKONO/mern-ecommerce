import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating API response with sample products
    const sampleProducts = [
      {
        _id: "1",
        name: "Wireless Headphones",
        image: "https://via.placeholder.com/150",
        price: 49.99,
      },
      {
        _id: "2",
        name: "Smartphone",
        image: "https://via.placeholder.com/150",
        price: 299.99,
      },
      {
        _id: "3",
        name: "Laptop",
        image: "https://via.placeholder.com/150",
        price: 799.99,
      },
    ];
  
    setProducts(sampleProducts);
  }, []);
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Latest Products</h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products available.</p>
      )}
    </div>
  );
};  
export default Home;
