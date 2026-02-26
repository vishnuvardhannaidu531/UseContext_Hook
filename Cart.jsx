import { useContext } from "react";
import { ProductItem } from "./src/App";

function Cart(){
    //Consuming
    const {count}=useContext(ProductItem);

    return (
        <>
            <h1>No of Cart items :{count}</h1>
        </>
    )
}
export default Cart;