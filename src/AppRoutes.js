import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Survey from "./pages/Survey";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Survey" element={<Survey />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};
