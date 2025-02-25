import { Link } from "react-router-dom";
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div 
        className="flex flex-col items-center justify-center h-screen text-center px-6"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/shopping-bag-cart_23-2148879372.jpg?semt=ais_hybrid')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-4xl font-bold mb-5 text-white animate-fade-in">
          Welcome to Our Store
        </h1>
        
        <p className="text-lg text-gray-200 max-w-xl mb-5 animate-fade-in">
          Discover amazing deals on high-quality products.  
          Enjoy a seamless shopping experience with secure payments.  
          Fast and reliable delivery right to your doorstep.  
        </p>

        <p className="text-lg text-gray-100 font-semibold mb-6 animate-fade-in">
          Your one-stop destination for all things eCommerce!
        </p>

        <Link 
          to="/products" 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 animate-bounce"
        >
          Get Started
        </Link>
      </div>

      {/* Why Us Section */}
      <div className="py-16 bg-gray-100"> {/* Changed to a lighter grey */}
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-4">High-Quality Products</h3>
              <p className="text-gray-600">
                We source only the best products to ensure you get the best value for your money.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-100">
              <h3 className="text-xl font-semibold mb-4">Secure Payments</h3>
              <p className="text-gray-600">
                Your transactions are safe with our state-of-the-art encryption technology.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-200">
              <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
              <p className="text-gray-600">
                Get your products delivered to your doorstep in record time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50"> {/* Changed to a lighter grey */}
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up">
              <p className="text-gray-600 italic">
                "The best shopping experience I've ever had! Fast delivery and great customer service."
              </p>
              <p className="mt-4 font-semibold">- John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-100">
              <p className="text-gray-600 italic">
                "Amazing quality products at affordable prices. Highly recommended!"
              </p>
              <p className="mt-4 font-semibold">- Jane Smith</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-200">
              <p className="text-gray-600 italic">
                "I love how easy it is to shop here. The website is user-friendly and the products are top-notch."
              </p>
              <p className="mt-4 font-semibold">- Michael Johnson</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;