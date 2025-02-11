import { useState, useEffect, useReducer } from "react";

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
  const [data, setData] = useState(null);

  //   useEffect(() => {
  //     // document.title = "conteggio: " + count;
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //         // console.log(data);
  //       });
  //   }, []);

  const initialState = { name: "", email: "" };
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const handleFieldChange = (field, value) => {
    dispatch({ type: "CHANGE_FIELD", field, value });
  };

  const resetForm = (e) => {
    e.preventDefault();
    dispatch({ type: "RESET_FORM" });
  };

  const sendForm = (e) => {
    e.preventDefault();
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
    </>
  );
}

export default Example;
