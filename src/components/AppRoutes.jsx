import React from "react";
import { Route, Routes } from "react-router-dom";

import PostsList from "../features/posts/PostsList";
import PostDetails from "../features/posts/PostDetails";
import NewPostForm from "../features/posts/NewPostForm";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/sign_in" element={<h1>Login Form</h1>} />
      <Route path="/sign_up" element={<h1>Sign Up Form</h1>} />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="/new" element={<NewPostForm />} />
    </Routes>
  );
}

export default AppRoutes;
