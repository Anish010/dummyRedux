// src/App.js
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./pages/ItemDetail";
import Items from "./pages/Items";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/item-detail" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
