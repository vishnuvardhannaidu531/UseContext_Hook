import { useContext } from "react";
import { CounterContext } from "./App";

function Display(){
    const values=useContext(CounterContext);

    return(
        <>
        <h1>Count value is:{values.count}</h1>
        </>
    )
}
export default Display;