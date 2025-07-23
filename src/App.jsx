import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage.jsx";
import MainPage from "./MainPage.jsx";
import PostDetail from "./PostDetail.jsx";
import Edit from "./Edit.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/posts/:id" element={<PostDetail />} />
      <Route path="/posts/:id/edit" element={<Edit />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
