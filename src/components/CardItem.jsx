import NavbarRouting from "./NavbarRouting";
import Card from "./Card";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

function CardItem() {
  const cities = useSelector((state) => state.cities.value);
  return (
    <>
      <NavbarRouting />
      <div className="grid grid-cols-4 gap-[10px]">
        {cities.map((city) => (
          <Link to={`${city.id}`} key={city.id}>
            <Card
              id={city.id}
              title={city.title}
              src={city.src}
              description={city.description}
              isVisited={city.isVisited}
            />
          </Link>
        ))}
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default CardItem;
