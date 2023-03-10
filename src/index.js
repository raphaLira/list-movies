import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./global.css";
import DashBoard from "./pages/dashboard";

import { MenuLateral } from "./components/menu-lateral/MenuLateral";
import ListMovies from "./pages/list-movies";

ReactDOM.render(
  <BrowserRouter>
    <MenuLateral>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/movieList" element={<ListMovies />} />
        <Route path="/dashBoard" element={<DashBoard />} />
      </Routes>
    </MenuLateral>
  </BrowserRouter>,
  document.getElementById("root")
);
