import Header from "./Components/Header";
import { CartListProvider } from "./Contexts";
import ProductCard from "./Components/ProductCard";
import Home from './Components/Home';
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [cartList,setCartList]=useState([])
  const addCart=(id,productName,price,image)=>{
    // if (prevList.some((item) => item.id === id)) return prevList;
    setCartList((prevList)=> [{ id, productName, price, image }, ...prevList]);
  }
  const removeToCart=(id)=>{
    setCartList((prevList)=>prevList.filter((cart)=>cart.id!==id))
  }
  useEffect(()=>{
    const cartList=JSON.parse(localStorage.getItem("cartList"))
    if(!cartList && cartList.length>0){
      setCartList(cartList)
    }
  },[]);
  useEffect(()=>{
    localStorage.setItem("cartlist",JSON.stringify(cartList))
  },[cartList])

  return (
   <CartListProvider value={{cartList,addCart,removeToCart}}>
   <Header/>
   <Home/>
   </CartListProvider>
  );
}

export default App;
