import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import CardForm from "./components/CardForm";
import Example from "./components/Example";
import ProvaRedux from "./components/ProvaRedux";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";

function App() {
  // FUNZIONE PASSATA AL FIGLIO PER AGGIUNGERE CARD DAL FORM DEL FIGLIO
  const addCity = (city) => {
    setCities([...cities, city]);
  };
  // ---------------------------------------------------------------
  const [cities, setCities] = useState([
    {
      id: 0,
      title: "Tokyo",
      description: "Ci troviamo a Tokyo",
      src: "https://media.istockphoto.com/id/904453184/it/foto/immagine-composita-del-monte-fuji-e-dello-skyline-di-tokyo.jpg?s=2048x2048&w=is&k=20&c=fZoNI6DrR2Q24uTJuViUkGwdFVkEwMZOepwafdDaWeQ=",
      isVisited: true,
    },
    {
      id: 1,
      title: "Berlino",
      description: "Ci troviamo a Berlino",
      src: "https://media.istockphoto.com/id/907886562/it/foto/cattedrale-di-berlino-con-nave-sul-fiume-sprea-al-tramonto-berlino-germania.jpg?s=2048x2048&w=is&k=20&c=w9RTcE8C2ld0WrPt4wN6Pg-p8ZR7TjzTyJUJ5ZIrMio=",
      isVisited: false,
    },
    {
      id: 2,
      title: "Parigi",
      description: "Ci troviamo a Parigi",
      src: "https://media.istockphoto.com/id/1145422105/it/foto/vista-aerea-della-torre-eiffel-parigi.jpg?s=2048x2048&w=is&k=20&c=376zXQHOsMbLrNYMp0u-0iQY6xxRhb-Guq98ic5Pq08=",
      isVisited: true,
    },
    {
      id: 3,
      title: "Roma",
      description: "Ci troviamo a Roma",
      src: "https://media.istockphoto.com/id/539115110/it/foto/colosseo-di-roma-e-sole-mattutino-italia.jpg?s=2048x2048&w=is&k=20&c=KFvMixcyzlISNGw5mZAADjwK9ZTlbOktmsmZ7gIAhyQ=",
      isVisited: false,
    },
  ]);

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  // USEeffect;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  // UseContext
  return (
    <>
      <Navbar />
      <LoginForm />
      <LogoutButton />
      <ProvaRedux></ProvaRedux>
      <Example />
      <CardForm addCity={addCity} />

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

      <div className="grid grid-cols-4 gap-[10px]">
        {data.map((item) => (
          <div key={item.id} className="bg-slate-400 rounded-lg p-3">
            <p className="text-red-500">userid: {item.userId}</p>
            <p className="text-white">title: {item.title}</p>
            <p className="text-black">body: {item.body}</p>
          </div>
        ))}
      </div>

      <button onClick={handleClick}>CONTA: {count}</button>
    </>
  );
}

export default App;
