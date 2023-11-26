import React, { useState } from 'react'
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineSearch, AiOutlineClose, AiFillTag } from "react-icons/ai";
import { BsFillCartFill,BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdHelp,MdFavorite } from "react-icons/md";




function Navbar() {
    const [open, setOpen] = useState(false);


  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* left side */}
        <div className='flex items-center'>
        <div className='cursor-pointer'>
            <TfiMenu size={30} onClick={() => setOpen(!open)}/>
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl pl-8 pr-3'>
            Best <span className='font-bold'>Eats</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1'>
        <p className='bg-black text-white rounded-full p-2'>Delivery</p>
        <p className='p-2'>Pickup</p>
        </div>
        </div>

        {/* search input */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25}/>
            <input className='bg-transparent p-2 focus:outline-none w-full' type='text' placeholder='search food'/>
        </div>
        
        {/* cart button */}
        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
            <BsFillCartFill size={20} className='mr-2' /> Cart
        </button>

        {/* mobile menu */}
        {/* overlay */}
        {open ? <div className='bg-black/80 fixed h-screen z-10 w-full top-0 left-0'>
        </div>: ''}


        {/* side drawer menu */}
        <div className={open ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose  size={30} className='absolute right-4 top-4 cursor-pointer' onClick={() => setOpen(!open)}/>
            <h1 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h1>
            <nav className='py-8'>
                <ul className='flex flex-col p-4 text-gray-700 hover:cursor-pointer hover:bg-black hover:text-white'>
                    <li className='flex text-xl'><TbTruckDelivery size={25} className='mr-4'/>Orders</li>
                </ul>

                <ul className='flex flex-col p-4 text-gray-700 hover:cursor-pointer hover:bg-black hover:text-white'>
                    <li className='flex text-xl'><MdFavorite size={25} className='mr-4'/>Favorites</li>
                </ul>

                <ul className='flex flex-col p-4 text-gray-700 hover:cursor-pointer hover:bg-black hover:text-white'>
                    <li className='flex text-xl'><FaWallet size={25} className='mr-4'/>Wallet</li>
                </ul>

                <ul className='flex flex-col p-4 text-gray-700 hover:cursor-pointer hover:bg-black hover:text-white'>
                    <li className='flex text-xl'><MdHelp size={25} className='mr-4'/>Help</li>
                </ul>

                <ul className='flex flex-col p-4 text-gray-700 hover:cursor-pointer hover:bg-black hover:text-white'>
                    <li className='flex text-xl'><AiFillTag size={25} className='mr-4'/>Promotions</li>
                </ul>

                <ul className='flex flex-col p-4 text-gray-700 hover:cursor-pointer hover:bg-black hover:text-white'>
                    <li className='flex text-xl'><BsFillSaveFill size={25} className='mr-4'/>Best ones</li>
                </ul>

                <ul className='flex flex-col p-4 text-gray-700 hover:cursor-pointer hover:bg-black hover:text-white'>
                    <li className='flex text-xl'><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar
