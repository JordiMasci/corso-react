import "./App.css";
import Card from "./components/Card";
import CardForm from "./components/CardForm";
import NavbarRouting from "./components/NavbarRouting";
import { useSelector, useDispatch } from "react-redux";
import { removeCity } from "./stores/cities";

function App() {
  const cities = useSelector((state) => state.cities.value);
  // console.log(cities);
  const dispatch = useDispatch();

  const handleRemoveCity = (id) => {
    dispatch(removeCity(id));
  };
  // UseContext
  return (
    <>
      <NavbarRouting />
      <CardForm></CardForm>
      <div className="grid grid-cols-4 gap-[10px]">
        {cities.map((city) => (
          <Card
            key={city.id}
            id={city.id}
            title={city.title}
            src={city.src}
            description={city.description}
            isVisited={city.isVisited}
            handleRemoveCity={handleRemoveCity}
          />
        ))}
      </div>
    </>
  );
}

export default App;
