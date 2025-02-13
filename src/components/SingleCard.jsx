import NavbarRouting from "./NavbarRouting";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function SingleCard() {
  const { cardID } = useParams();

  const cityObject = useSelector((state) =>
    state.cities.value.filter((singleCity) => singleCity.id == cardID)
  );

  const city = cityObject[0];
  console.log(city);

  return (
    <>
      <NavbarRouting></NavbarRouting>
      <h1 className="text-3xl font-bold">{city.title}</h1>
      <div>
        {city.isVisited && <span>Visitata</span>}
        {!city.isVisited && <span>Non visitata</span>}
      </div>
      <p>{city.description}</p>
      <div className="flex justify-center">
        <img src={city.src} alt="" width="400" className="rounded-t-md" />
      </div>
    </>
  );
}

export default SingleCard;
