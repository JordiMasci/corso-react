import { useEffect } from "react";
import NavbarRouting from "./NavbarRouting";
import { useSelector, useDispatch } from "react-redux";
import { setCitiesAPI, removeCityAPI } from "../stores/citiesAPI";

function CardAPI() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.citiesAPI.value);

  useEffect(() => {
    if (data.length === 0) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          dispatch(setCitiesAPI(data));
        });
    }
  }, []);

  const handleRemove = (id) => {
    dispatch(removeCityAPI(id));
  };

  return (
    <>
      <NavbarRouting></NavbarRouting>
      <div className="grid grid-cols-4 gap-[10px]">
        {data.map((item) => (
          <div key={item.id} className="bg-slate-400 rounded-lg p-3">
            <p className="text-red-500">userid: {item.userId}</p>
            <p className="text-white">title: {item.title}</p>
            <p className="text-black">body: {item.body}</p>
            <p
              className="flex w-full  justify-center items-end cursor-pointer"
              onClick={() => handleRemove(item.id)}
            >
              ELIMINA
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardAPI;
