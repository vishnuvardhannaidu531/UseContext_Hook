import { useContext, useState } from "react";
import { ProductItem } from "./App";

function Show({ it }) {

    //We have to consume the data or context
    const {count,setCount}=useContext(ProductItem);
  const [addCart, setAddCart] = useState(false);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Name: {it.name}</h2>
      <h3>Price: ₹{it.price}</h3>

      {
        addCart
          ? <button onClick={() => {setAddCart(false) , setCount(count-1)}}>Remove</button>
          : <button onClick={() => {setAddCart(true) , setCount(count+1)}}>Add</button>
      }
    </div>
  );
}

export default Show;