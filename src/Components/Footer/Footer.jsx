import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

const Footer = () => {
  return (
    <section className='max-w-[1300px] py-10 mt-10 md:px-12 px-6 mx-auto bg-zinc-200'>
        <div className='flex md:space-x-35 gap-y-5 flex-wrap md:flex-row flex-col justify-between'>
            <div className='max-w-[310px]'>
                <h2 className='text-2xl font-bold text-zinc-800'>Shop<span className='text-blue-600'>F</span>inity</h2>
                <p className='text-zinc-600 mt-4 text-sm'>&copy; 2025 Shopfinity | Built with React & Tailwind | By Mohammad Zakariya</p>
            </div>
            <div className='flex justify-between  gap-x-30' >
                <ul className='space-y-3'>
                    <li>
                        <h3 className='text-xl font-bold text-zinc-800'>Company</h3>
                    </li>
                    <li>
                        <a href='#' className='text-sm text-zinc-600 font-semibold hover:border-b-2 border-blue-600 active:text-blue-600'>About</a>
                    </li>
                    <li>
                        <a href='#' className='text-sm text-zinc-600 font-semibold hover:border-b-2 border-blue-600 active:text-blue-600'>FAQ'S</a>
                    </li>
                </ul>
                <ul className='space-y-3'>
                    <li>
                        <h3 className='text-xl font-bold text-zinc-800  '>Support</h3>
                    </li>
                    <li>
                        <a href='#' className='text-sm text-zinc-600 font-semibold hover:border-b-2 border-blue-600 active:text-blue-600'>Support Center</a>
                    </li>
                    <li>
                        <a href='#' className='text-sm text-zinc-600 font-semibold hover:border-b-2 border-blue-600 active:text-blue-600'>Feedback</a>
                    </li>
                    <li>
                        <a href='#' className='text-sm text-zinc-600 font-semibold hover:border-b-2 border-blue-600 active:text-blue-600'>Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className='space-y-3'>
                <h3 className='text-xl font-bold text-zinc-800'>Stay Connected</h3>
                <p className='text-zinc-600 text-sm'>Questions or Feedback?<br/>
                    We'd love to hear from you</p>
                <div className='flex  items-center'>
                    <input type='email' name='email' id='email' autoComplete='off' placeholder='Email Address' className=' py-2 px-4 bg-white text-zinc-600 rounded-lg  focus:outline-blue-500 focus:outline-2'/>
                    <button className='text-white h-8 w-8 flex justify-center items-center  -translate-x-9  rounded-lg text-lg bg-gradient-to-b from-blue-500 to-blue-600 cursor-pointer active:to-blue-700'><IoArrowForward/></button>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Footer