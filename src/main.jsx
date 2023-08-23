import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/User/User.jsx";
import Admin from "./components/Admin/Admin.jsx";
import HomePage from "./components/Home/HomePage.jsx";
import UserManagement from "./components/Admin/Content/UserManagement.jsx";
import Dashboard from "./components/Admin/Content/Dashboard.jsx";
import CategoryManagement from "./components/Admin/Content/CategoryManagement.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/user" element={<User />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="manage-users" element={<UserManagement />} />
          <Route path="manage-categories" element={<CategoryManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
