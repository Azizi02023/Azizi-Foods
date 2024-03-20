import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineClose,AiOutlineCar, AiOutlineHeart, AiOutlineWallet, AiOutlineQuestionCircle, AiOutlineGift, AiOutlineStar, AiOutlineUserAdd} from 'react-icons/ai'

export const Navbar = () => {
const [nav, setNav] = useState(true)
  return (
    <div className='max-w-[1640px] bg-slate-500 mx-auto flex justify-around items-center p-4 '>
      {/* Left Side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)}
         className='cursor-pointer'>
          <AiOutlineMenu size={30}></AiOutlineMenu>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Azizi <span className="font-bold">Foods</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full text-[14px] p-1'>
          <p className=' bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>

      {/* Search */}
      <div className='bg-gray-200 rounded-full flex items-center w-[200px] sm:w-[400px] lg:w-[500px] px-2'>
        <AiOutlineSearch></AiOutlineSearch>
        <input className='p-2 bg-transparent w-full focus:outline-none' type='text' placeholder='Search Foods'></input>
      </div>

      {/* Cart button */}
      <button className='bg-black text-white hidden md:flex items-center rounded-full p-2'>
        <AiOutlineShoppingCart size={20} className='mr-2'></AiOutlineShoppingCart>Cart
      </button>
      
      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='fixed top-0 left-0 w-full h-full bg-black/80 z-10'></div> : ''}
      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-50 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-50 duration-300' }>
        <AiOutlineClose onClick={()=> setNav(!nav)}
        size={30} className=' absolute right-4 top-4 cursor-pointer'></AiOutlineClose>
        <h2 className=' text-2xl p-4'>Azizi <span className=' text-bold'>Foods</span>
        </h2>
        <nav>
        <ul className='flex flex-col text-gray-800 p-4'>
        <li className='items-center text-xl py-4 flex'><AiOutlineCar size={20} className='mr-2' /> Delivery</li>
        <li className='items-center text-xl py-4 flex'><AiOutlineHeart size={20} className='mr-2' /> Favorites</li>
        <li className='items-center text-xl py-4 flex'><AiOutlineWallet size={20} className='mr-2' /> Wallet</li>
        <li className='items-center text-xl py-4 flex'><AiOutlineQuestionCircle size={20} className='mr-2' /> Help</li>
        <li className='items-center text-xl py-4 flex'><AiOutlineGift size={20} className='mr-2' /> Promotions</li>
        <li className='items-center text-xl py-4 flex'><AiOutlineStar size={20} className='mr-2' /> Best Ones</li>
        <li className='items-center text-xl py-4 flex'><AiOutlineUserAdd size={20} className='mr-2' /> Invite Friends</li>
      </ul>
        </nav>
      </div>
    </div>
  )
}
