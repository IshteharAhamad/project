import React from 'react'

function Header() {
  return (  
<>
<nav class="bg-white border-gray-200">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap">E-Comm</span>
  </a>
  
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border
       border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse
        md:flex-row md:mt-0 md:border-0 md:bg-white">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-blue-700 
          rounded md:bg-transparent md:text-blue-700 md:p-0
           " aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Services</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  );
}

export default Header