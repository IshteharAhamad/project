import { useContext } from "react";
import { createContext } from "react";

export const CartContext=createContext({
    cartList:[
        {
            id:1,
            productName:"",
            price:13,
            image:""
        }
    ],
    addCart:(id,productName,price,image)=>{},
    removeToCart:(id)=>{},
})

export  function useCartList(){
    return useContext(CartContext)
}
export const CartListProvider=CartContext.Provider;