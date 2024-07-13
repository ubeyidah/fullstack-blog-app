import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Posts from "./pages/post/Posts";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Profile from "./pages/auth/Profile";
import Notification from "./pages/auth/Notification";
import WritePost from "./pages/post/WritePost";
import PublicRoute from "./components/layouts/auth/PublicRoute";
import PrivetRoute from "./components/layouts/auth/PrivetRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Posts />} />
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route element={<PrivetRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/writePost" element={<WritePost />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
