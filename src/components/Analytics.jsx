import React from 'react'
import Laptop from '../assets/laptop.jpg'
export const Analytics = () => {
  return (
    <div className='w-full  bg-white'>
        <div className='max-w-[1200px] mx-auto grid   md:grid-cols-2'>
            <img className='m-4 mx-auto' src={Laptop} alt="Laptop" />
            <div className='flex flex-col p-4 text-center md:text-start justify-center gap-6'>
                <p className='uppercase text-xl text-[#00df9a] font-bold'>data analytics dashboard</p>
                <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl'>Manage Data Analytics Centrally</h1>
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aperiam quas, corrupti omnis perspiciatis hic, minus aut sequi mollitia autem quod saepe ex nemo possimus id vitae expedita in eos.</p>
                <button className='bg-[#000300] mx-auto md:mx-0 px-6 rounded-md w-48 py-4 text-xl text-[#00df9a]'>Get Started</button> 

            </div>
        </div>
        
    </div>
  )
}
