import React from 'react'
import OurMission from '../OurMission/OurMission'
import { motion } from 'motion/react'
import aboutus from '../../Assets/aboutus.webp'


const About = () => {

    const leftText = {
        initial: { opacity: 0, x: -100 },
        animate: {
            opacity: 1, x: 0,
            transition: {
                duration: 0.5,
                ease: 'easeIn',
                delay: 0.5
            }
        }
    }


    
  return (
    <section className='max-w-[1300px] md:mt-10 mt-5 md:py-10 py-5 md:px-12 px-6 mx-auto overflow-x-hidden'>
        {/* parent container of two sub parent div  */}
        <div className=' grid md:grid-cols-2 grid-cols-1 gap-y-8'>
        {/* parent div of left side text content  */}
        <div className='md:mr-4 md:pt-25 pt-20'>
            <div>
                <motion.h1
                initial={{opacity:0,y:-100}}
                animate={{opacity:1,y:0,transition:{duration:0.5,ease:'anticipate'}}}
                viewport={{once:true}}
                className='md:text-6xl text-4xl font-bold text-blue-600'>
                    About <span className='text-zinc-800'>Us</span>
                </motion.h1>
                <motion.p 
                initial='initial'
                animate='animate'
                variants={leftText}
                viewport={{once:true}}
                className='text-zinc-600 md:text-xl mt-5 md:pb-10 pb-5 max-w-[500px]'>We're passionate about bringing you the finest products with exceptional service. Our journey started with a simple vision: to make quality accessible to everyone.</motion.p>
            </div>
            <motion.div 
            initial={{
                opacity:0,scale:0.5
            }}
            animate={{
                opacity:1,scale:1,
                transition:{
                    duration:0.5,
                    ease:'easeIn',
                    delay:1
                }
            }}
            viewport={{once:true}}

            className='flex gap-x-8 text-center'>
                <div>
                <h3 className='md:text-3xl text-2xl  text-blue-500 font-bold'>50K+</h3>
                <p className='text-zinc-600 md:text-lg text-xs'>Happy Customers</p>
                </div>
                <div>
                <h3 className='md:text-3xl text-2xl text-blue-500  font-bold'>10+</h3>
                <p className='text-zinc-600 md:text-lg text-xs'>Years Experience</p>
                </div>
                <div>
                <h3 className='md:text-3xl text-2xl text-blue-500  font-bold'>25+</h3>
                <p className='text-zinc-600 md:text-lg text-xs'>Countries</p>
                </div>
            </motion.div>
            <div className='flex items-center md:mt-7 mt-5'>
            <motion.button
            initial='initial'
            animate='animate'
            viewport={{once:true}}
            variants={leftText}
            className=' text-white md:text-lg text-xs cursor-pointer active:to-green-700 bg-gradient-to-b from-green-500 to-green-600 py-2 px-5 rounded-lg border-none'>Start Shopping
            </motion.button>
            </div>
        </div>
        {/* parent div of right side image content  */}
        <motion.div 
        initial={{
                opacity:0,x:100
            }}
            animate={{
                opacity:1,x:0,
                transition:{
                    duration:0.5,
                    ease:'easeIn',
                    delay:0.5
                }
            }}
            viewport={{once:true}}
        className='relative'>
            <img 
            src={aboutus}
            className='md:h-full h-[400px] w-full rounded-2xl object-cover'/>
            <div className='absolute  md:top-23 -top-5 md:right-20 -right-48  bg-blue-600 text-center md:p-5
            p-4 md:pr-4 pr-50 rounded-xl'><h3 className='text-white font-bold md:text-2xl text-xl'>200%</h3>
            <p className='text-white md:text-md text-sm'>Growth Rate</p></div>

        </motion.div>
        
        </div>
        <OurMission/>
    </section>
  )
}

export default About