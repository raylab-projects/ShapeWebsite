import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
    const [nav, setNav] =useState(false)
    const handleNav = () => (
        setNav(!nav)
    )
  return (
    <div className='bg-black font-mono flex justify-between items-center h-20 max-w-full mx-auto px-4 text-white'>
        <a href='http://localhost:3000/' className='hover:cursor-pointer'><h1 className='w-full text-2xl mx-10 tracking-widest'>Title Here</h1></a>
        <ul className=' font-thin hidden md:flex'>
            <li className='p-4'><a href='http://localhost:3000/' className='hover:cursor-pointer'>Home</a></li>
            <li className='p-4'>About</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/> }
            
        </div>  
        <div className={!nav ? 'fixed left-[-100%]' : 'md:hidden sm:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-cyan-700  ease-in-out duration-500'  }>
            <a href='http://localhost:3000/'><h1 className='w-full text-3xl font-mono text-[#e0e0e0] m-4'>Title Here.</h1></a>

            <ul className='text-[#e0e0e0] font-mono uppercase p-4'> 
                <li className='p-4 border-b border-gray-600'><a href='http://localhost:3000/' className='hover:cursor-pointer'>Home</a></li>
                <li className='p-4 border-b border-gray-600'>About</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar