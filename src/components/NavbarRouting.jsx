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
        <Link to={""}>Pagina 3</Link>
      </li>
      <li>
        <Link to={""}>Pagina 4</Link>
      </li>
      <li>
        <Link to={""}>Pagina 5</Link>
      </li>
    </ul>
  );
}

export default NavbarRouting;
