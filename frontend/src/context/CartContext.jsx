import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {  // ✅ No 'export' here
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;  // ✅ Exporting as default
