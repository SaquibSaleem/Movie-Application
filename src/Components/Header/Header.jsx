import React, { useState } from 'react'
import logo from '../../assets/Images/logo.png'
import { HiHome} from "react-icons/hi2";
import { FaInfoCircle,FaUser } from "react-icons/fa";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import {HiDotsVertical } from "react-icons/hi";
import HeaderItem from '../HeaderItem';
function Header() {
    const [toggle,setToggle]=useState(false);
    const menu=[
        {
            id: 1,
            name:'Home',
            icon:HiHome
        },
        {
            id: 2,
            name:'About Us',
            icon:FaInfoCircle
        },
        {
            id: 3,
            name:'Movies List',
            icon:MdOutlinePlaylistAdd
        },
        {
            id: 4,
            name:'Contact Us',
            icon:FaUser
        }
    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex  gap-8 items-center'>
        <img src={logo} className='w-[80px] 
        md:w-[115px] object-cover' />
        <div className='hidden md:flex gap-8'>
        {menu.map((item)=>(
            <HeaderItem name={item.name} Icon={item.icon} />
        ))}
        </div>
          <div className='flex md:hidden gap-5'>
        {menu.map((item,index)=>index<3&&(
            <HeaderItem name={''} Icon={item.icon} />
        ))}
         <div className='md:hidden' onClick={()=>setToggle(!toggle)}>       
            <HeaderItem name={''} Icon={HiDotsVertical} />
           {toggle? <div className='absolute mt-3 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4'>
            {menu.map((item,index)=>index>2&&(
            <HeaderItem name={item.name} Icon={item.icon} />
            ))}
            </div>:null}
            </div> 
        </div>
        </div>
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className='w-[40px] rounded-full'/>
        
    </div>
    
  )
}

export default Header