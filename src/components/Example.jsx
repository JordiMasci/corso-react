import { useState, useReducer } from "react";

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
      <form action="">
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            className="bg-white color text-black"
            type="text"
            name="name"
            id="name"
            onChange={(e) => handleFieldChange("name", e.target.value)}
            value={formState.name}
          />
        </div>
        <div>
          <label htmlFor="email">email: </label>
          <input
            className="bg-white color text-black"
            type="email"
            name="email"
            id="email"
            onChange={(e) => handleFieldChange("email", e.target.value)}
            value={formState.email}
          />
        </div>
        <button onClick={resetForm}>Reset</button>
        <button onClick={sendForm}>Invia</button>
      </form>

      <div>
        <p>Name: {formData && formData.name}</p>
        <p>Email: {formData && formData.email}</p>
      </div>
    </>
  );
}

export default Example;
