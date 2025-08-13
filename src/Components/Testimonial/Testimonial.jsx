import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'motion/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import { FaStar } from 'react-icons/fa'
import Heading from '../Heading/Heading';

const Testimonial = () => {
    
    const cards=customer.map((cus,index)=>{
        return(
            <SwiperSlide key={cus.id} className='bg-blue-600 max-w-[350px] p-6 rounded-lg gpu-boost'>
            <div className='flex  items-center gap-5 border-white pb-2'>
            {/* image  */}
            <div className='h-16 w-16'>
                <img className='w-full h-full rounded-full outline-2 outline-white outline-offset-4' src={cus.image}></img>
            </div>
            {/* customer text detail  */}
            <div className='flex-1'>
            <div className='flex items-center justify-between'>

            <h2 className='text-white text-xl font-bold'>{cus.name}</h2>
            <p className='text-white font-semibold md:text-xs text-[10px]'>{cus.date}</p>
            </div>
            <div>
            <p className='text-yellow-300 font-semibold text-sm flex py-1'>{
                Array.from({length:cus.stars},(_,index)=>(<FaStar key={index}/>))}
            </p>
            <p className='text-white font-semibold text-sm'>{cus.location}</p>
            </div>
            </div>
            </div>
            <div className='mt-2 p-3 rounded-lg border-x-2 border-white'>
                <p className='text-white text-sm/snug text-justify'>{cus.para}</p>
            </div>
        </SwiperSlide>
        )
    })
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
    className='max-w-[1300px] py-10 md:px-0 px-0  mx-auto'>
        <Heading highlight='What' heading='Our Client Says'/>
        <motion.div
        initial={{
          opacity:0,y:100,scale:0.8
        }}
        whileInView={{
          opacity:1,y:0,scale:1,
          transition:{
            duration:0.3,
            ease:'easeOut'
          }
        }}
        viewport={{once:true}}

        className='flex'>
            <Swiper
            effect={'coverflow'}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper gpu-boost"
      >
            {
                cards
            }
        </Swiper>
        </motion.div>
    </motion.section>
  )
}

export default Testimonial



const customer = [
  {
    id: 1,
    name: 'John smith',
    para: "I'm thoroughly impressed by the seamless shopping experience. The site is intuitive, and the customer service was outstanding. Definitely my go-to platform now!",
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    stars: 5,
    date: '2024-11-15',
    location: 'Sydney, Australia'
  },
  {
    id: 2,
    name: 'Caroline',
    para: "The product variety is amazing and the delivery was quicker than expected. I loved how easy it was to navigate and find exactly what I needed.",
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    stars: 4,
    date: '2025-01-08',
    location: 'Bangalore, India'
  },
  {
    id: 3,
    name: 'David',
    para: "A user-friendly interface and timely delivery made this my favorite online store. The quality of products is top-notch!",
    image: 'https://randomuser.me/api/portraits/men/33.jpg',
    stars: 5,
    date: '2025-03-02',
    location: 'Ahmedabad, India'
  },
  {
    id: 4,
    name: 'Kim seon',
    para: "From order to delivery, everything was smooth. Their customer support team was very helpful with my exchange query.",
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    stars: 5,
    date: '2025-04-19',
    location: 'Seoul, South Korea'
  },
  {
    id: 5,
    name: 'Imran Sheikh',
    para: "Good products, fair pricing, and responsive support. Could improve packaging slightly but overall very satisfied.",
    image: 'https://randomuser.me/api/portraits/men/28.jpg',
    stars: 4,
    date: '2025-05-11',
    location: 'Bengaluru, India'
  },
  {
    id: 6,
    name: 'Jessica',
    para: "This platform is a hidden gem! Loved the product curation and aesthetic. Already recommended it to my followers.",
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    stars: 5,
    date: '2025-06-26',
    location: 'Bangalore, India'
  }
];
