import React from 'react'
import { motion, scale } from 'motion/react';
import { GoGoal } from "react-icons/go";
import Heading from '../Heading/Heading'
import { FaCheckCircle, FaLightbulb, FaUserCheck } from 'react-icons/fa';

const iconTapVariant={
    
    tap:{x:5,y:5}

}
const OurMission = () => {
  return (
    <motion.section
    initial={{
      opacity:0,y:100,scale:0.5
    }}
    whileInView={{
      opacity:1,y:0,scale:1,
      transition:{
        duration:0.3,
        ease:'easeIn',

      }
    }}
    viewport={{once:true}}
    className='max-w-[1300px] mt-2 py-2 md:px-12 px-6 mx-auto'>
        <div className='text-5xl text-green-500 flex justify-center md:-mb-7 mt-8'><GoGoal/></div>
        <Heading highlight='Our' heading='Mission'/>
        <div className='pb-10 flex-wrap text-center md:-mt-15 -mt-10 mx-auto max-w-[600px]'><h3 className='md:text-lg text-zinc-600'>To create meaningful connections between exceptional products and the people who value quality, innovation, and authentic experiences.   </h3>
        </div>
        {/* goal cards  */}
        <div className='grid md:grid-cols-3 grid-cols-1 gap-x-6 gap-y-10'>
            {
                goal.map((val,index)=>{
                    return(
                        <motion.div key={index} className='group max-w-[350px] bg-white p-7 rounded-lg border-1 border-zinc-300 hover:shadow-xl'
                        whileTap='tap'
                        
                        variants={iconTapVariant}
                        >
                            <h3 className='mb-5 group-hover:scale-1.2'><motion.div
                            
                            
                            variants={iconTapVariant}
                            >{val.icon}</motion.div></h3>
                            <h3 className='text-xl font-semibold pb-3'>{val.title}</h3>
                            <p className='text-zinc-600'>{val.description}</p>
                        </motion.div>
                    )
                })
            }
        </div>
    </motion.section>
  )
}

export default OurMission

const goal=[
  {
    "title": "Quality First",
    "description": "Every product is carefully curated and tested to meet our exceptional standards.",
    "icon": <FaCheckCircle className='bg-green-200/40 h-12 w-12 p-3 rounded-full text-green-500 '/>
  },
  {
    "title": "Customer Focus",
    "description": "Your satisfaction drives every decision we make, from product selection to service delivery.",
    "icon": <FaUserCheck className='bg-blue-200/40 h-12 w-12 p-3 rounded-full text-blue-500'/>
  },
  {
    "title": "Innovation",
    "description": "We continuously evolve our platform and processes to enhance your shopping experience.",
    "icon": <FaLightbulb className='bg-yellow-200/40 h-12 w-12 p-3 rounded-full text-yellow-500'/>
  }
]
