import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import DressesProd from "../Pages/DressesProd";
import LoginPage from "../Pages/LoginPage";
import CartPage from "../Pages/CartPage";
import NotFound from "../Pages/NotFound";
import SingleProductpage from "../Pages/SingleProductpage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/dressespage" element={<DressesProd />}></Route>
      <Route path="/loginpage" element={<LoginPage />}></Route>
      <Route path="/cartpage" element={<CartPage />}></Route>
      <Route path="/dressespage/:id" element={<SingleProductpage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AllRoutes;
