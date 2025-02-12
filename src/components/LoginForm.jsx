import React from "react";
import LogoutButton from "./LogoutButton";
import { useDispatch } from "react-redux";
import { login } from "../stores/authSlice";
import Navbar from "./Navbar";
import NavbarRouting from "./NavbarRouting";

function LoginForm() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const userData = { username: "JhonDoe", email: "jhon@example.com" };
    dispatch(login(userData));
  };

  return (
    <>
      <NavbarRouting></NavbarRouting>
      <Navbar></Navbar>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
      <LogoutButton />
    </>
  );
}

export default LoginForm;
