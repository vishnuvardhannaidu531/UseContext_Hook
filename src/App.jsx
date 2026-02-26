// import { createContext, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './HEader'
// import Body from './Body'
// import Footer from './Footer'
// import Cart from '../Cart'
// import Items from './Items'


// // export const CounterContext=createContext();//produced here 

// export const ProductItem=createContext();

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       {/* <Header count={count} setCount={setCount}/>
//       <Body count={count} setCount={setCount}/>
//       <Footer/> */}
//       {/* <CounterContext  value={{count,setCount}}>
//         <Header/>
//         <Body/>
//         <Footer/>
//       </CounterContext> */}

//       {/* <ProductItem value={{count,setCount}}>
//         <Cart/>
//       </ProductItem> */}
//       <Items/>
//     </>
//   )
// }

// export default App


import { createContext, useContext, useState } from 'react'
import './App.css'
import Items from './Items'
import Cart from '../Cart';

export const ProductItem=createContext();//Here we had produced the context
function App() {
  const [count,setCount]=useState(0);
  return (
    <>
    <ProductItem value={{count,setCount}}>
      <Items />
      <Cart/>
    </ProductItem>
      
    </>
  )
}

export default App
