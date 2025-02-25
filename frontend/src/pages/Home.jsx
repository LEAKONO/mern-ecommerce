import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <h1 className="text-4xl font-bold mb-5">Welcome to Our Store</h1>
      
      <p className="text-lg text-gray-700 max-w-xl mb-5">
        Discover amazing deals on high-quality products.  
        Enjoy a seamless shopping experience with secure payments.  
        Fast and reliable delivery right to your doorstep.  
      </p>

      <p className="text-lg text-gray-800 font-semibold mb-6">
        Your one-stop destination for all things eCommerce!
      </p>

      <Link to="/products" className="bg-blue-600 text-white px-4 py-2 rounded">
        Get Started
      </Link>
    </div>
  );
};

export default Home;
