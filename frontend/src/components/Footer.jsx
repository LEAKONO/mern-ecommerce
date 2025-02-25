import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 E-Commerce Store. All rights reserved.</p>
        <div className="mt-2">
          <Link to="/privacy" className="mx-2">Privacy Policy</Link>
          <Link to="/terms" className="mx-2">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;