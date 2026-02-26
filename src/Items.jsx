import { useState } from "react";
import Show from "./Show";

function Items() {

  const [body, setBody] = useState([
    { id: 1, name: "Milk", price: "100" },
    { id: 2, name: "Butter", price: "100" }
  ]);

  return (
    <>
      <h1>I am the Blinkit Body</h1>

      {body.map((it) => (
        <Show key={it.id} it={it} />
      ))}
    </>
  );
}

export default Items;