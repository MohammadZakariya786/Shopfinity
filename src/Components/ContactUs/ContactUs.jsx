import React from 'react';
import contactus from '../../assets/contactus.webp';
import { motion } from 'motion/react';

const ContactUs = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  }


  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeInOut'}}
    viewport={{ once: true }}
    className='max-w-[1400px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-center items-center mt-35 md:mt-55 lg:mt-35 pb-20'>
        <div className='relative w-full max-w-[500px] sm:max-w-[600px] md:max-w-[650px] lg:max-w-[700px] xl:max-w-[750px] mx-auto px-4'>
        {/* Floating image */}
        <motion.img
        initial={{ opacity: 0, scale: 0.8, x: -500 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut',delay: 0.3 }}
        viewport={{ once: true }}
          src={contactus}
          alt='Fruits'
          className='md:block mx-auto drop-shadow-blue-600 drop-shadow-xl md:absolute w-40 h-40 -top-15 -left-18 z-10 transition-transform duration-300 hover:scale-120 hover:-translate-x-4 hover:translate-y-2 md:mb-0 mb-5'
        />
      <div className='bg-white shadow-2xl shadow-blue-500  md:rounded-br-full md:rounded-l-none rounded-b-full overflow-hidden relative'>


        {/* Heading */}
        <div>
          <h1
          className='text-center text-white bg-gradient-to-b from-blue-400 to-blue-500 py-2 text-2xl font-bold'>
            <motion.p
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
          viewport={{ once: true }}
            >Contact Us
            </motion.p>
          </h1>
        </div>

        {/* Form */}
        <div className='bg-blue-100 px-6 sm:px-10 pt-8 md:pt-16 md:py-20 pb-30'>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className='max-w-[500px] md:max-w-[400px]'>
              <h3 className='text-zinc-800 font-semibold text-xl'>Name:</h3>
              <input
                type='text'
                placeholder='Type Your Name'
                className='mt-2 py-2 px-3 w-full outline-none bg-white rounded-md border-2 border-blue-300 focus:border-blue-500 transition-colors duration-200'
              />
            </div>

            {/* Email */}
            <div className='max-w-[500px] md:max-w-[400px]'>
              <h3 className='text-zinc-800 font-semibold text-xl mt-2'>Email:</h3>
              <input
                type='email'
                placeholder='Type Your Email'
                className='mt-2 py-2 px-3 w-full outline-none bg-white rounded-md border-2 border-blue-300 focus:border-blue-400 transition-colors duration-200'
              />
            </div>

            {/* Phone */}
            <div className='max-w-[500px] md:max-w-[400px]'>
              <h3 className='text-zinc-800 font-semibold text-xl mt-2'>Phone:</h3>
              <input
                type='number'
                placeholder='Type Your Phone Number'
                className='mt-2 py-2 px-3 w-full  outline-none bg-white rounded-md border-2 border-blue-300 focus:border-blue-400 transition-colors duration-200 mr-3'
              />
            </div>

            {/* Submit Button */}
            <div className='mt-3'>
              <button
                type='submit'
                className='bg-gradient-to-b from-blue-500 to-blue-600 text-white text-xl px-3 py-1 rounded-full hover:to-blue-700 active:to-blue-700 cursor-pointer transition-all duration-200 font-semibold'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
