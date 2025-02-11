import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  console.log(user);

  return (
    <nav>
      {isLoggedIn ? (
        <div>Benvenuto, {user.username}!</div>
      ) : (
        <div>Non sei loggato</div>
      )}
    </nav>
  );
}

export default Navbar;
