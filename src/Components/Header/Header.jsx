import React, { useState } from 'react'
import logo from '../../assets/Images/logo.png'
import { HiHome} from "react-icons/hi2";
import { FaInfoCircle,FaUser } from "react-icons/fa";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import {HiDotsVertical } from "react-icons/hi";
import HeaderItem from '../HeaderItem';
import { Link } from 'react-router-dom';
function Header() {
    const [toggle,setToggle]=useState(false);
    const menu=[
        {
            id: 1,
            name:'Home',
            icon:HiHome,
            link: '/home',
        },
        {
            id: 2,
            name:'About Us',
            icon:FaInfoCircle,
            link: '/about',
        },
        {
            id: 3,
            name:'Movies List',
            icon:MdOutlinePlaylistAdd,
            link: '/movielist',
        },
        {
            id: 4,
            name:'Contact Us',
            icon:FaUser,
            link: '/contact',
        }
    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex  gap-8 items-center'>
        <img src={logo} className='w-[80px] 
        md:w-[115px] object-cover' />
        <div className='hidden md:flex gap-8'>
        {menu.map((item)=>(
            <Link to={item.link || "#"} key={item.id}>
                <HeaderItem name={item.name} Icon={item.icon} />
            </Link>
        ))}
        </div>
          <div className='flex md:hidden gap-5'>
        {menu.map((item,index)=>index<3&&(
            <Link to={item.link || "#"} key={item.id}>
                 <HeaderItem name={''} Icon={item.icon} />
            </Link>
        ))}
         <div className='md:hidden' onClick={()=>setToggle(!toggle)}>       
            <HeaderItem name={''} Icon={HiDotsVertical} />
           {toggle? <div className='absolute mt-3 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4'>
            {menu.map((item,index)=>index>2&&(
                <Link to={item.link || "#"} key={item.id}>
                    <HeaderItem name={item.name} Icon={item.icon} />
                </Link>
            ))}
            </div>:null}
            </div> 
        </div>
        </div>
        <Link to="/login"> 
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" className='w-[40px] rounded-full' />
        </Link>
    </div>
    
  )
}

export default Header