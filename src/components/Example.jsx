import { useState, useReducer } from "react";
import NavbarRouting from "./NavbarRouting";

function formReducer(state, action) {
  switch (action.type) {
    case "CHANGE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return { name: "", email: "" };
    default:
      return state;
  }
}

function Example() {
  const initialState = { name: "", email: "" };
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleFieldChange = (field, value) => {
    dispatch({ type: "CHANGE_FIELD", field, value });
  };

  const resetForm = (e) => {
    e.preventDefault();
    dispatch({ type: "RESET_FORM" });
    setFormData(null);
  };

  const sendForm = (e) => {
    e.preventDefault();
    setFormData({ name: formState.name, email: formState.email });
    console.log(formState);
  };

  return (
    <>
      <div className="container mx-auto max-w-4xl flex flex-col items-center">
        <NavbarRouting />
        <form className="w-full p-4  rounded-lg shadow-md">
          <div>
            <label htmlFor="name">Nome: </label>
            <input
              className="bg-white text-black border rounded p-2 w-full"
              type="text"
              name="name"
              id="name"
              onChange={(e) => handleFieldChange("name", e.target.value)}
              value={formState.name}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              className="bg-white text-black border rounded p-2 w-full"
              type="email"
              name="email"
              id="email"
              onChange={(e) => handleFieldChange("email", e.target.value)}
              value={formState.email}
            />
          </div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={resetForm}
          >
            Reset
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded ml-2"
            onClick={sendForm}
          >
            Invia
          </button>
        </form>
      </div>
      <div>
        <p>Name: {formData && formData.name}</p>
        <p>Email: {formData && formData.email}</p>
      </div>
    </>
  );
}

export default Example;
