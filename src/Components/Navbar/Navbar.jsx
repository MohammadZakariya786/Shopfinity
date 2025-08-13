import React, { useState } from 'react'
import logo from '../../assets/logo.webp'
import { IoSearch } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
const Navbar = ({handleScroll,setSearchTerm,isScrolled,handlePanel,totalItems,wishlist}) => {
    const [menuToggle, setMenuToggle] = useState(false);
    const handleMenu=()=>{
        setMenuToggle(current=>!current)
    }

    const scrollTop=()=>{
        window.scrollTo({top:0,behavior:'smooth'});
        }
    const onLinkMenuClose=()=>{
        setMenuToggle(false);
        }

  return (
    <motion.header
    initial={{
        opacity:0,
        y:-70
    }}
    animate={{
        opacity:1,
        y:0,
        transition:{
            duration:0.7,
            delay:.3,
            ease:'easeIn'
        }
    }}
    viewport={{once:'true'}}
    className={`gpu-boost bg-blue-600 fixed top-0 left-0 right-0 z-99 ${isScrolled?'shadow-lg':''} `}>
        <nav className='md:h-[14vh] h-[10vh] max-w-[1300px] md:px-12 px-5 mx-auto flex items-center justify-between'>
            {/* logo */}
            <Link to='/' 
            onClick={scrollTop}
            className='flex md:w-15 w-12 md:h-15 h-12 bg-zinc-100 rounded-full p-2'>
            <img src={logo} className='w-full h-full object-contain'/>
            </Link>
            {/* nav actions */}
            <div className='flex items-center md:gap-x-5 gap-x-3'>
                {/* pages section  */}
                <div className='hidden md:flex'>
                    <ul className='flex gap-x-5'>
                        <li>
                            <Link to='/' 
                            className='font-semibold text-lg text-white hover:border-b-2 hover:border-white tranform hover:transform transition-all duration-100 active:text-white'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about' 
                            className='font-semibold text-lg text-white hover:border-b-2 hover:border-white tranform hover:transform transition-all duration-100 active:text-white'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'
                            className='font-semibold text-lg text-white hover:border-b-2 hover:border-white transition-all duration-100 active:text-white'>Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* search bar  */}
                <div className='hidden p-1 rounded-full border-2 bg-white border-white md:flex'>
                    <input type='text' name='search' id='search' placeholder='Search your Product' autoComplete='off'
                    className='md:h-[5vh] h-[3vh] md:w-full w-[15vh] md:pl-4 pl-2 flex-1 focus:outline-none ' onFocus={handleScroll}
                    onChange={(e)=>setSearchTerm(e.target.value)}/>
                    <button className='bg-blue-500 w-8 h-8 rounded-full text-white text-xl flex justify-center items-center cursor-pointer active:bg-blue-600'><IoSearch/></button>
                </div>
                {/* icons  */}
                <button className='text-[1.9rem] text-white relative cursor-pointer' onClick={()=>handlePanel('wishlist')}>
                    <GoHeartFill/>
                    {
                        wishlist.length>0&&
                        <span className='flex justify-center items-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px] absolute top-4 right-3 border-2 border-white'>{wishlist.length}</span>
                    }
                </button>
                <button className='text-[1.9rem] text-white relative cursor-pointer' onClick={()=>handlePanel('cart')}>
                    <HiShoppingBag/>
                    {
                        totalItems>0&&
                        <span className='flex justify-center items-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px] absolute top-4 right-4 border-2 border-white'>{totalItems}</span>
                    }
                    </button>
                    <button className={`md:hidden text-[1.9rem] text-white relative cursor-pointer ${menuToggle?'rotate-45':'rotate-0'} transition-all duration-200`} onClick={handleMenu}>
                        <GiHamburgerMenu/>
                        </button>
            </div>
            
        </nav>
            {/* hamburger menu  */}
            <div className={`md:hidden flex bg-blue-600 w-auto justify-center  h-auto fixed border-t-2 border-white ${menuToggle?'right-0':'-right-80'} transition-all duration-200`}>
                    <ul className='flex flex-col gap-y-3 text-center py-5 w-full'>
                        <li className='pb-3'>
                            <Link to='/' 
                            onClick={onLinkMenuClose}
                            className='font-semibold text-lg text-white active:border-b-2 '>Home</Link>
                        </li>
                        <li className='pb-3'>
                            <Link to='/about'
                            onClick={onLinkMenuClose}
                            className='font-semibold text-lg text-white active:border-b-2 '>About</Link>
                        </li>
                        <li className='pb-3'>
                            <Link to='/contact' 
                            onClick={onLinkMenuClose}
                            className='font-semibold text-lg active:border-b-2 text-white transition-all duration-100'>Contact Us
                            </Link>
                        </li>
                        <li> 
                            {/* searchbar for mobile */}
                            <div className='md:hidden p-1 rounded-full border-2 bg-white outline-2 border-blue-500 outline-white flex mx-6 mt-2'>
                    <input type='text' name='search' id='search' placeholder='Search...' autoComplete='off'
                    className=' h-[3vh] w-[15vh] pl-2 flex-1 focus:outline-none' onFocus={handleScroll}
                    onChange={(e)=>setSearchTerm(e.target.value)}/>
                    <button className='bg-blue-500  w-7  h-7  rounded-full text-white text-lg flex justify-center items-center'><IoSearch/></button>
                </div>
                        </li>
                    </ul>
                </div>
    </motion.header>
  )
}

export default Navbar