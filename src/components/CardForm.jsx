import { useState } from "react";

function CardForm({ addCity }) {
  // LOGICA PER AGGIUNGERE CARD DAL FORM DEL FIGLIO
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    src: "",
    isVisited: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData((formData) => ({
      ...formData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      src: formData.src,
      isVisited: formData.isVisited,
    };
    setFormData({
      title: "",
      description: "",
      src: "",
      isVisited: false,
    });
    addCity(city);
  };

  // -----------------------------------------------------
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-1/2 pb-5">
      <div className="flex flex-col">
        <label htmlFor="">Nome Citta </label>
        <input
          className=" bg-gray-500 mb-[10px]"
          type="text"
          name="title"
          onChange={handleChange}
          value={formData.title}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Descrizione</label>
        <textarea
          className=" bg-gray-500 mb-[10px]"
          type="text"
          name="description"
          onChange={handleChange}
          value={formData.description}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Immagine</label>
        <input
          className=" bg-gray-500 mb-[10px]"
          type="text"
          name="src"
          onChange={handleChange}
          value={formData.src}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Visitata?</label>
        <input
          className=" bg-gray-500 mb-[10px]"
          type="checkbox"
          name="isVisited"
          onChange={handleChange}
          checked={formData.isVisited}
        />
      </div>

      <button type="submit">Aggiungi card</button>
    </form>
  );
}

export default CardForm;
