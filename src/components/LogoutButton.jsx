import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../stores/authSlice";

function LogoutButton() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) return null;

  return <button onClick={() => dispatch(logout())}>Logout</button>;
}

export default LogoutButton;
