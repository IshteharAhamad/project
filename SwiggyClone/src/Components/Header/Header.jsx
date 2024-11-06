import React, { useState } from "react";
import logo from "../../assets/Swiggy.svg";
import { FaAngleDown } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";
function Header() {
    const [toggle,setToggle]=useState(false)
    const navList=[
        {
            name:"Search",
            icon:<RiSearch2Line/>,
            super:""
        },
        {
            name:"Offers",
            icon:<BiSolidOffer/>,
            super:"New"
        },
        {
            name:"Help",
            icon:<IoHelpBuoyOutline/>,
            super:""
        },
        {
            name:"Log In",
            icon:<CgProfile/>,
            super:""
        },
        {
            name:"Cart",
            icon:<FaCartPlus/>,
            super:0
        },
    ]
  return (
    <>
    <div className=" black-overlay w-full h-full fixed duration-200" style={{
        opacity:toggle?1:0,
        visibility:toggle?"visible":"hidden"
    }}
    onClick={()=>setToggle(!toggle)}
    >
        <div onClick={(e)=>e.stopPropagation()} className="w-[350px] h-full absolute duration-300 bg-white" style={{
            left:toggle?'0%' :'-100%'
        }}> </div>
    </div>
    <header className="p-[15px] shadow-lg">
      <div className="max-w-[1200px] h-8 mx-auto flex items-center  space-x-3 justify-between">
        <div className="w-[600px] flex items-center gap-2 ">
          <img src={logo} alt="" className="w-[100px] mx-2" />
          <span className="border-black font-medium border-b-[3px] hover:text-orange-400 hover:border-orange-400 ">Other </span> Chandigarh, India <FaAngleDown onClick={()=>setToggle(!toggle)} className='font-bold inline hover:text-orange-400 cursor-pointer '/>
        </div>
        
        <nav className=" list-none gap-10 ml-2 flex items-center text-[15px] font-semibold">
            {
                navList.map((item,index)=>
                    (<li key={index}className="flex items-center gap-1  hover:text-orange-500 cursor-pointer">
                        {item.icon}
                        {item.name}
                       <sup className="text-orange-400"> {item.super}</sup>
                    </li>
                ))
            }
        </nav>
      </div>
    </header>
    </>
  );
}

export default Header;
