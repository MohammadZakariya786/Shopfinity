import React from 'react'
import { animate, motion, scale } from 'motion/react'
import Heading from '../Heading/Heading'
import { FaCreditCard, FaShoppingCart, FaStar, FaTruck } from 'react-icons/fa'
import { IoCall, IoStarOutline } from 'react-icons/io5'
import { RiLoopRightFill } from "react-icons/ri";

const cardParent={
  initial:{
    opacity:0,y:100,
  },
  animate:{
    opacity:1,y:0,
    transition:{
    staggerChildren:0.3,
    ease:'anticipate'
    }
  }
}

const cardChild={
  initial:{
    opacity:0,y:100,scale:0.8
  },
  animate:{
    opacity:1,y:0,scale:1
  },
  transition:{
    duration:0.3,
    ease:'anticipate'
  }
}


const cardTapVariant={
    tap:{scale:1.1},
};


const WhyChooseUs = () => {
  return (
    <motion.section
    initial={{
            opacity:0,y:100
        }}
        whileInView={{
            opacity:1,y:0,
            transition:{
                duration:0.5,
                ease:'anticipate'
            }
        }}
        viewport={{once:true}}
    className='max-w-[1300px] py-10 md:px-12 px-6 mx-auto'>
        <Heading highlight='Why' heading='Choose Us'/>
        <div className='pb-10 flex-wrap text-center md:-mt-15 -mt-10'><h3 className='md:text-lg text-zinc-600'>We're committed to provide you with the best shopping experience possible.<br/>
                 Here' what sets us apart from the competition   </h3>
        </div>
        <motion.div
        initial='initial'
        whileInView='animate'
        variants={cardParent}
        viewport={{once:true}}
        className='py-10 grid md:grid-cols-3 gap-10 grid-cols-1'>
            {
                values.map(val=>{
                    return(
                        <motion.div key={val.id} className='max-w-[400px] border-1 border-zinc-300 shadow-md hover:shadow-blue-600 hover:border-blue-300 p-5 rounded-lg  group group hover:bg-blue-600'
                        whileTap={cardTapVariant.tap}
                  
                        variants={cardChild}
                        >
                            <div className='flex items-center gap-x-4'>
                                <motion.span className='flex justify-center text-xl items-center w-10 h-10 bg-blue-600  rounded-lg text-white group-hover:text-blue-600 group-hover:bg-white'
                                >
                                <div className=''
                                    
                                    >
                                    {val.icon}
                                    </div>
                                    </motion.span>
                                <h4 className='text-lg font-bold group-hover:text-white'>{val.title}</h4></div>
                                <div className='mt-3'>
                                    <p className='text-zinc-600 group-hover:text-white'>{val.description}</p>
                                </div>
                                
                        </motion.div>
                    )
                })
            }
        </motion.div>
            <div className=' flex bg-green-600 w-fit rounded-full md:gap-x-3 gap-x-2 md:py-3 py-2 md:px-6 px-3 mx-auto items-center justify-center'>
                <span className='text-white md:text-2xl text-md  flex'><IoStarOutline/></span>
                <h3 className='text-white md:text-xl  text-[13px]  font-bold'>Trusted by over 10,000+ happy customers</h3>
            </div>
    </motion.section>
  )
}

export default WhyChooseUs

const values=[
  {
    "id": 1,
    "title": "Premium Product Quality",
    "description": "We offer only the finest handpicked items that go through a strict quality check — ensuring durability, comfort, and satisfaction in every purchase.",
    "icon":<FaStar/>
  },
  {
    "id": 2,
    "title": "24/7 Customer Support",
    "description": "Our dedicated support team is always ready to help — whether it's tracking your order, solving issues, or answering your queries quickly and kindly.",
    "icon": <IoCall/>
  },
  {
    "id": 3,
    "title": "Fast & Reliable Shipping",
    "description": "We deliver across the country with trusted courier partners. Most orders are shipped within 24 hours and delivered in 2–4 business days.",
    "icon": <FaTruck/>
  },
  {
    "id": 4,
    "title": "Secure & Flexible Payments",
    "description": "Pay your way — UPI, Cards, Cash on Delivery, or Wallets. All payments are protected by end-to-end encryption and SSL security.",
    "icon": <FaCreditCard/>
  },
  {
    "id": 5,
    "title": "Easy Checkout",
    "description": "Quickly add your favorite items to the wishlist and enjoy a smooth shopping experience with minimal steps and a clean interface.",
    "icon": <FaShoppingCart/>
  },
  {
    "id": 6,
    "title": "30 Days Return",
    "description": "Shop with confidence — if something isn’t right, you can return or exchange it within 30 days with a smooth, hassle-free process.",
    "icon": <RiLoopRightFill/>
  }
]
