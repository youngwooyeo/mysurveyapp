import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Bottom from "./components/bottom";

import Home from './pages/Home';
import Menu1 from "./pages/Menu1";
import Menu2 from "./pages/Menu2";
import Menu3 from "./pages/Menu3";
import Menu4 from "./pages/Menu4";
import Menu5 from "./pages/Menu5";
import Survey from "./pages/Survey";
import React from 'react';

import "./App.css";
import { useEffect, useRef, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router"

export default function App() {

  type Props = { nowStep: number }




  return (
    // <RouterProvider router={Router} />

    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/menu1" element={<Menu1 />} />
        <Route Component={Menu2} path="/menu2" />
        <Route Component={Menu3} path="/menu3" />
        <Route Component={Menu4} path="/menu4" />
        <Route Component={Menu5} path="/menu5" />
        <Route Component={Survey} path="/survey" />
      </Routes>

      <Bottom />
    </BrowserRouter>

  );
}