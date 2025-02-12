import { useDispatch } from "react-redux";

function Card({ title, src, description, isVisited }) {
  const visitata = isVisited && <span>Visistata</span>;
  const nonVisitata = !isVisited && <span>non Visistata</span>;

  const dispatch = useDispatch();
  return (
    <>
      <div className="rounded-md bg-zinc-950 relative">
        <span
          className="absolute text-indigo-200 cursor-pointer"
          style={{ top: "2%", right: "5%" }}
        >
          X
        </span>
        <img src={src} alt="" />
        <div className="flex flex-col p-[30px]">
          <h2 className="text-2xl  font-bold text-white">{title}</h2>
          <p className="pb-[20px]">{description}</p>

          {visitata}
          {nonVisitata}
        </div>
      </div>
    </>
  );
}

export default Card;
