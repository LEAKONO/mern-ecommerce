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

import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export function ProductCard({ id, name, price, image, category }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="border rounded-lg shadow-sm overflow-hidden hover-card-animation">
      <div className="p-0 relative aspect-square">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={image}
          alt={name}
          className={`object-cover w-full h-full transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
        />
        <span className="absolute top-4 left-4 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-background/80 backdrop-blur-sm">
          {category}
        </span>
      </div>
      <div className="flex flex-col items-start gap-2 p-6">
        <h3 className="font-medium text-lg">{name}</h3>
        <div className="flex items-center justify-between w-full">
          <p className="text-lg font-semibold">${price}</p>
          <button className="inline-flex items-center justify-center rounded-full text-sm font-medium bg-primary text-primary-foreground px-3 py-2 hover:bg-primary/90">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
