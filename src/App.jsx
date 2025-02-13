import "./App.css";
import Card from "./components/Card";
import CardForm from "./components/CardForm";
import NavbarRouting from "./components/NavbarRouting";
import { useSelector, useDispatch } from "react-redux";
import { removeCity } from "./stores/cities";
import { Link } from "react-router-dom";

function App() {
  const cities = useSelector((state) => state.cities.value);
  const dispatch = useDispatch();

  const handleRemoveCity = (id) => {
    dispatch(removeCity(id));
  };
  const remove = true;
  // UseContext
  return (
    <>
      <NavbarRouting />
      <CardForm></CardForm>
      <div className="grid grid-cols-4 gap-[10px]">
        {cities.map((city) => (
          // <Link to={`/${city.id}`} key={city.id}>
          <Card
            key={city.id}
            remove={remove}
            id={city.id}
            title={city.title}
            src={city.src}
            description={city.description}
            isVisited={city.isVisited}
            handleRemoveCity={handleRemoveCity}
          />
          // </Link>
        ))}
      </div>
    </>
  );
}

export default App;
