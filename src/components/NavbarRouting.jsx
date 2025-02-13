import { Link } from "react-router-dom";

function NavbarRouting() {
  return (
    <ul className="w-full flex justify-around pb-[20px]">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/cardAPI"}>Card API</Link>
      </li>
      <li>
        <Link to={"/example"}>Example</Link>
      </li>
      <li>
        <Link to={"/contatore"}>Contatore</Link>
      </li>
      <li>
        <Link to={"/loginLogout"}>Login - Logout</Link>
      </li>
      <li>
        <Link to={"/cardItem"}>Card Children</Link>
      </li>
    </ul>
  );
}

export default NavbarRouting;
