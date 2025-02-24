import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router";
import Index from "../../front/src/pages/Index";
import AdminDashboard from "../../front/src/pages/admin/Dashboard";
import NotFound from "../../front/src/pages/NotFound";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
