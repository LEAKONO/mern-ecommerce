import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">E-Commerce</Link>
        <div>
          <Link to="/products" className="mx-2">Products</Link>
          <Link to="/cart" className="mx-2">Cart</Link>
          <Link to="/login" className="mx-2">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
