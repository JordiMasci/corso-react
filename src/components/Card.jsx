function Card({ title, src, description, isVisited }) {
  const visitata = isVisited && <span>Visistata</span>;
  const nonVisitata = !isVisited && <span>non Visistata</span>;

  return (
    <>
      <div className="rounded-md bg-zinc-950">
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
