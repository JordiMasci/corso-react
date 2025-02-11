import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../stores/counter";

function ProvaRedux() {
  // Valore dello stato
  const count = useSelector((state) => state.counter.count);

  // permette di mandare azioni
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Contatore: {count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </>
  );
}

export default ProvaRedux;
