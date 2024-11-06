import React from 'react'
function ProductCard() {
  return (
    
<div className='p-4'>
<div class="w-full max-w-sm  bg-gray-200 border  border-gray-200 rounded-lg shadow-md">
    <a href="#">
        <img class="p-8 rounded-t-lg" src="{product.image}" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900">Product name</h5>
        </a>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900">$599</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
        </div>
    </div>
</div>
</div>

  );
}



export default ProductCard