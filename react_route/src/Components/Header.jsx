
import React from 'react';
import { useState } from 'react'
import { RiMenuUnfoldLine } from "react-icons/ri";
import { MdMenuOpen } from "react-icons/md";
import { NavLink } from 'react-router-dom';

function Header() {
  const [toggle, settoggle]=useState(false);
  return (
    <header className='shadow sticky z-50 top-0'>
    <nav className="w-full h-12 bg-gray-200 flex justify-between items-center fixed px-4 md:px-4 shadow">
          {
            toggle ?
            <MdMenuOpen onClick={()=>settoggle(!toggle)} className='text-black text-2xl  md:hidden block'/> 
            :<RiMenuUnfoldLine onClick={()=>settoggle(!toggle)} className='text-black  text-2xl md:hidden block'/>
          }
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-yellow-500 to-green-400 inline-block text-transparent bg-clip-text">CT Tech</h1>           <div className='md:flex hidden font-semibold gap-12 items-center' >
            <ul className='md:flex hidden  gap-12 text-sm '>
            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                <li className=' cursor-pointer'>
                <NavLink
                                to="/services"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Services
                                </NavLink></li> 
                <li className=' cursor-pointer'> <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink></li>
                <li className=' cursor-pointer'><NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About Us
                                </NavLink></li>
            </ul>        
            <button className='px-2 py-1 text-white rounded-full cursor-pointer bg-gradient-to-r from-blue-400 to-green-400 inline-block text-transparent'>SignIn/SignUp</button>
            </div>
            {/* Responsive with react  */}
            <div className={`md:hidden w-[50%] h-screen rounded-md text-white 
              bg-black top-[48px] fixed  duration-300 px-10 py-2 
              md:font-semibold text-sm
              ${toggle?'left-[0]':'left-[-100%]'}
              `}>
            <ul className=' flex flex-col'>
                
                <li className='py-3 cursor-pointer'>Services</li>
                <li className='py-3 cursor-pointer'>Contact Us</li>
                <li className='py-3 cursor-pointer'>About Us</li>
            </ul> 
            <div className='py-3 md:font-semibold text-sm'>      
            <button className='px-2 py-1 text-white rounded-full cursor-pointer bg-gradient-to-r from-blue-400 to-green-400 inline-block text-transparent'>SignIn/SignUp</button>
            </div>
            </div>
    </nav>
    </header>
    
  )
}
export default Header;
