import "./App.css";
import Card from "./components/Card";
import CardForm from "./components/CardForm";
import Example from "./components/Example";
import ProvaRedux from "./components/ProvaRedux";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import CardAPI from "./components/CardAPI";
import NavbarRouting from "./components/NavbarRouting";
import { useSelector } from "react-redux";

function App() {
  const cities = useSelector((state) => state.cities.value);

  // UseContext
  return (
    <>
      <NavbarRouting />
      <div className="grid grid-cols-4 gap-[10px]">
        {cities.map((city) => (
          <Card
            key={city.id}
            title={city.title}
            src={city.src}
            description={city.description}
            isVisited={city.isVisited}
          />
        ))}
      </div>
    </>
  );
}

export default App;
