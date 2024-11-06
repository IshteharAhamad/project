import React,{useState} from "react";
import { faker } from "@faker-js/faker";
import {useCartList} from '../Contexts/index'
import {Link} from 'react-router-dom'
function Home() {
    const {addCart,removeToCart} =useCartList()
    const [addIntoCart, setAddIntoCart] = useState([])
    const productList = [...Array(20)].map(() => ({
      id: faker.string.uuid(),
      productName: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.avatar(),
    }));
    faker.seed(100)
    const addToList=()=>{

    }
   
  return (
    <div className="w-full flex flex-wrap gap-5 my-4 h-auto p-5">
      <Link to="/cart">
        {
            productList.map((product)=>(

      <div class="w-80 max-w-sm  bg-gray-200 border  border-gray-200 rounded-lg shadow-md" key={product.id}>
        
        <a href="#">
          <img
            className="p-3 rounded-3xl w-full object-cover"
            src={product.image}
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900">
              {product.productName}
            </h5>
          </a>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900">${product.price}</span>
            {addIntoCart.includes(product)?(
                <button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none 
                 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                 onClick={removeToCart(product.id)}
              >
                Remove from cart
              </button>
            ):(<button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none 
                 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                 onClick={()=>addCart({id:product.id,productName:product.productName,price:product.price,image:product.image})}
              >
                Add to cart
              </button>)}
          </div>
        </div>
      </div>
            ))
        }
        </Link>
    </div>
  );
}

export default Home;
