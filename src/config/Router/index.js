import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from "../../pages/Home";
import App from "../../pages/App";
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import NotFound from '../../pages/NotFound';
export const Router = createBrowserRouter([
  { path: "/", errorElement: <NotFound />, element: <Home /> },
  {path: "Home", element: <Home />},
  {path: "Auth/Login", element: <Login />},
  {path: "Auth/Register", element: <Register />}
  ]);