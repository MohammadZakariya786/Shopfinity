import React, { useEffect } from 'react'
import BannerImage from "../../assets/banner.webp"
import { useState } from 'react';
import { motion } from 'motion/react';


const Banner = () => {
    const initialTime=5*60*60;
    const[timeLeft,setTimeLeft]=useState(()=>{
        const storedTime=localStorage.getItem('remainingTime');
        return storedTime&&parseInt(storedTime,10)>10?
        parseInt(storedTime,10):initialTime
    });

    useEffect(()=>{
            if (timeLeft<=0) return
            const timer=setInterval(() => {
              setTimeLeft(prev=>{
                if(prev<=1){
                    clearInterval(timer);
                    localStorage.setItem('remainingTime',0);
                    return 0;
                }
                const remainingTime=prev-1
                localStorage.setItem('remainingTime',remainingTime);
                return remainingTime;
              })  
            }, 1000);
            return ()=>clearInterval(timer);
        },[timeLeft])


    const formatTime=(time)=>{
        const hours=Math.floor(time/3600);
        const minutes=Math.floor((time%3600)/60);
        const seconds=time%60;
        return{
            hours:String(hours).padStart(2,'0'),
            minutes:String(minutes).padStart(2,'0'),
            seconds:String(seconds).padStart(2,'0'),
        }
    }
    const{hours,minutes,seconds}=formatTime(timeLeft);

  return (
    <motion.section 
    initial={{
        opacity:0,
    }}
    animate={{
        opacity:1,
        transition:{
            duration:1,
            delay:0.3,
            ease:'backIn'
        }
    }}
    className='md:h-[75vh] h-[40vh] mt-[14vh] md:bg-cover md:bg-top bg-[length:140%_100%] bg-center  bg-no-repeat' 
    style={{backgroundImage:`url(${BannerImage})`}}>
        <div 
        className='max-w-[1300px] mx-auto md:px-12 px-6 flex flex-col justify-center md:h-100 h-70 gap-3'>
            <h1 className='gpu-boost text-red-600 md:text-9xl text-5xl font-bold  uppercase tracking-tight'>Big Sale!</h1>  
            <h2
            className='gpu-boost text-zinc-800 md:text-3xl text-xl md:max-w-full max-w-[200px]'>Up to 50% Off - Limited Time Only!</h2>
            <div className='gpu-boost md:text-6xl text-xl font-bold text-zinc-800 flex md:gap-x-3 gap-x-2 md:mt-5 items-center'>
                <span className='text-white bg-zinc-800 md:p-3 p-2'>{hours}</span>:
                <span className='text-white bg-zinc-800 md:p-3 p-2'>{minutes}</span>:
                <span className='text-white bg-zinc-800 md:p-3 p-2'>{seconds}</span>
            </div>
        </div>
        

    </motion.section>
  )
}

export default Banner