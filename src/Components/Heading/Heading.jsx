import React from 'react'

const Heading = ({heading,highlight}) => {
  return (
    <section className='md:mt-10 mt-5 md:pb-20 pb-15 text-center'>
        <h1 className='text-zinc-800 md:text-4xl text-3xl font-bold'>
            <span className='text-blue-500'>{highlight}</span> {heading}</h1>
    </section>
  )
}

export default Heading