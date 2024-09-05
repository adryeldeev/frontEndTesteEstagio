import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import AtualizarTask from "../pages/AtualizarTask/AtualizarTask";
import CadastrarUser from "../pages/CadastroUser/CadastrarUser";
import Login from "../pages/Login/Login";
import Header from "../components/Header/Header";
import { useAuth } from "../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/editartask/:id"
          element={
            <PrivateRoute>
              <AtualizarTask />
            </PrivateRoute>
          }
        />
        <Route path="/cadastrar" element={<CadastrarUser />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
