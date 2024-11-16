import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
export const Header = () => {
    const [nav, setnav] = useState(false)
    const handleNav=()=>{
        setnav(!nav)
    }

  return (
    <div className='text-white relative flex mx-auto mt-4 justify-between items-center h-24 max-w-[1200px] p-12'>
        <h1 className='w-full text-4xl font-bold text-[#00df9a]'>.REACT</h1>
        <ul className='hidden md:flex  text-xl font-bold '>
            <li className='cursor-pointer w-36  p-3 text-center'>Home</li>
            <li className='cursor-pointer w-36 p-3 text-center'>Account</li>
            <li className='cursor-pointer w-36 p-3 text-center'>Sign in</li>
            <li className='cursor-pointer w-36 bg-white text-[#000300] rounded-md	  p-3 text-center '>Get Started</li>
        </ul>
        <div className='text-3xl block md:hidden' onClick={handleNav}>
            {nav ?<AiOutlineClose/>:<AiOutlineMenu/>}
        </div>
        <div className={nav?'absolute h-screen top-0 left-0 w-[60%]  bg-[#000300] ease-in-out duration-200 border-r-2 border-r-[#000300] block md:hidden':'absolute top-0 left-[-100%] w-[60%]  bg-[#000300] ease-in-out duration-200 '}>
        <h1 className='w-full p-8 text-4xl font-bold text-[#00df9a]'>.REACT</h1>

            <ul className='p-4 uppercase text-xl'>
                <li className='cursor-pointer p-4 border-b-2 border-gray-600'>Home</li>
                <li className='cursor-pointer p-4 border-b-2 border-gray-600'>Company</li>
                <li className='cursor-pointer p-4 border-b-2 border-gray-600'>Resources</li>
                <li className='cursor-pointer p-4 border-b-2 border-gray-600'>About</li>
                <li className='cursor-pointer p-4'>Contact</li>
            </ul>
        </div>

    </div>
  )
}
