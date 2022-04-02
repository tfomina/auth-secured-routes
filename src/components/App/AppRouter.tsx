import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SecurityProvider from "./../../secure/SecurityProvider";
import SecureRoute from "./../../secure/SecureRoute";
import Home from "../Home";
import Private1 from "../Private1";
import Private2 from "../Private2";
import Public from "../Public";
import Login from "../Login";

const AppRouter = () => (
  <BrowserRouter>
    <SecurityProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/private1"
          element={
            <SecureRoute>
              <Private1 />
            </SecureRoute>
          }
        />
        <Route
          path="/private2"
          element={
            <SecureRoute>
              <Private2 />
            </SecureRoute>
          }
        />
        <Route path="/public" element={<Public />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </SecurityProvider>
  </BrowserRouter>
);

export default AppRouter;
