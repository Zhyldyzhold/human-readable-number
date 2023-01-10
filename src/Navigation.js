import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Provider from "./context/Provider";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";
import MainPage from "./pages/MainPage";

function Navigation() {
  return (
    <div>
      <Provider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/edit/:id" element={<EditPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default Navigation;
