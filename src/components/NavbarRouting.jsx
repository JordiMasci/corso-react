import { Link } from "react-router-dom";

function NavbarRouting() {
  return (
    <ul>
      <li>
        <Link to={""}>Pagina 1</Link>
        <Link to={""}>Pagina 2</Link>
        <Link to={""}>Pagina 3</Link>
        <Link to={""}>Pagina 4</Link>
        <Link to={""}>Pagina 5</Link>
      </li>
    </ul>
  );
}

export default NavbarRouting;
