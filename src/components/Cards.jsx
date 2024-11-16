import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

export const Cards = () => {
  return (
    <div className='bg-white'>
        <div className='max-w-[1280px] mx-auto py-28 grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
            <div className='w-full p-8  shadow-xl gap-4 flex flex-col items-center hover:scale-105'>
                <img className='w-20 mt-[-3rem]' src={Single} alt="" />
                <h1 className='text-4xl font-bold py-4'>Single User</h1>
                <p className='text-3xl my-4 font-bold'>$149</p>
                <div className='w-full'>
                    <p className='py-2 text-center border-b-2 font-medium text-xl'>500 GB Storage</p>
                    <p className='py-2 text-center border-b-2 font-medium text-xl'>1 Granted User</p>
                    <p className='py-2 text-center border-b-2 font-medium text-xl'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] px-6 rounded-md w-48 py-4 text-xl text-[#000300] mt-6'>Start Trial</button> 
                
            </div>
            <div className='w-full p-8  shadow-xl gap-4 flex flex-col items-center bg-gray-100  hover:scale-110'>
                <img className='w-20 mt-[-3rem]' src={Double} alt="" />
                <h1 className='text-4xl font-bold py-4'>Double User</h1>
                <p className='text-3xl my-4 font-bold'>$249</p>
                <div className='w-full'>
                    <p className='py-2 text-center border-b-2 font-medium text-xl'>1000 GB Storage</p>
                    <p className='py-2 text-center border-b-2 font-medium text-xl'>1 Granted User</p>
                    <p className='py-2 text-center border-b-2 font-medium text-xl'>Send up to 4 GB</p>
                </div>
                <button className='bg-[#000300] px-6 rounded-md w-48 py-4 text-xl text-[#00df9a] mt-6'>Start Trial</button> 
                
            </div>
            <div className='w-full p-8  shadow-xl gap-4 flex flex-col items-center hover:scale-105'>
                <img className='w-20 mt-[-3rem]' src={Triple} alt="" />
                <h1 className='text-4xl font-bold py-4'>Triple User</h1>
                <p className='text-3xl my-4 font-bold'>$299</p>
                <div className='w-full'>
                    <p className='py-2 text-center border-b-2 font-medium text-xl'>1500 GB Storage</p>
                    <p className='py-2 text-center border-b-2 font-medium text-xl'>1 Granted User</p>
                    <p className='py-2 text-center border-b-2 font-medium text-xl'>Send up to 6 GB</p>
                </div>
                <button className='bg-[#00df9a] px-6 rounded-md w-48 py-4 text-xl text-[#000300] mt-6'>Start Trial</button> 
                
            </div>

        </div>
         
    </div>
  )
}
