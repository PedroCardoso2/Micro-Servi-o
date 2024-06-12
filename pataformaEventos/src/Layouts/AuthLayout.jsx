import { useState } from "react";

import { Outlet } from "react-router-dom";

import "./AuthLayout.css";

const AuthLayout = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Dados de Default:", { username, password });
  };

  return (
    <div className="App">
        <Outlet />
    </div>
  );
};

export default AuthLayout;