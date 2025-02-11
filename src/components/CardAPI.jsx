import { useState, useEffect } from "react";

function CardAPI() {
  // USEeffect;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-[10px]">
        {data.map((item) => (
          <div key={item.id} className="bg-slate-400 rounded-lg p-3">
            <p className="text-red-500">userid: {item.userId}</p>
            <p className="text-white">title: {item.title}</p>
            <p className="text-black">body: {item.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardAPI;
