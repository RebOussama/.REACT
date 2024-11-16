import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa'
export const Footer = () => {
    return (
        <div className='max-w-[1280px] mx-auto px-4 py-8 grid lg:grid-cols-3 gap-6 text-white'>
            <div className=' flex flex-col gap-6'>
                <h1 className='w-full text-4xl font-bold text-[#00df9a]'>.REACT</h1>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id aliquam nulla architecto optio sunt, ad voluptatum culpa ex nihil quibusdam quasi eius, sapiente eligendi laudantium. Excepturi ullam ducimus asperiores.</p>
                <div className='flex gap-6'>
                    <FaFacebookSquare size={40} />
                    <FaInstagramSquare size={40} />
                    <FaTwitterSquare size={40} />
                    <FaGithubSquare size={40} />

                </div>
                </div>
                <div className='col-span-2 flex flex-wrap gap-6  md:gap-32 md:justify-end'>
                    <div>
                        <h6 className='font-medium text-xl text-gray-400'>Solutions</h6>
                        <ul>
                            <li className='text-lg py-2'>Analytics</li>
                            <li className='text-lg py-2'>Marketing</li>
                            <li className='text-lg py-2'>Commerce</li>
                            <li className='text-lg py-2'>Insights</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-xl text-gray-400'>Support</h6>
                        <ul>
                            <li className='text-lg py-2'>Pricing</li>
                            <li className='text-lg py-2'>Documentation</li>
                            <li className='text-lg py-2'>Guides</li>
                            <li className='text-lg py-2'>API Status</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-xl text-gray-400'>Company</h6>
                        <ul>
                            <li className='text-lg py-2'>About</li>
                            <li className='text-lg py-2'>Blog</li>
                            <li className='text-lg py-2'>Jobs</li>
                            <li className='text-lg py-2'>Press</li>
                            <li className='text-lg py-2'>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-xl text-gray-400'>Legal</h6>
                        <ul>
                            <li className='text-lg py-2'>Claim</li>
                            <li className='text-lg py-2'>Policy</li>
                            <li className='text-lg py-2'>Terms</li>
                        </ul>
                    </div>
                </div>

            </div>
    )
}
