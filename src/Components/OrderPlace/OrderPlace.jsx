import React from 'react'

const OrderPlace = ({setOrderPlaced}) => {
  return (
    <section className='flex justify-center items-center bg-black/95 z-110 fixed inset-0'>
        <div className='bg-zinc-100 md:w-[400px] w-[350px] text-center p-8 rounded-lg border-1 border-zinc-300'>
            <h2 className='text-3xl font-bold text-green-600 '>Order Placed!</h2>
            <p className='my-4 text-zinc-800'>Thanks for your purchase!</p>
            <button className='bg-blue-600 active:bg-blue-700 px-6 py-3 text-white rounded-lg' 
            onClick={()=>setOrderPlaced(false)}>Close</button>
        </div>
    </section>
  )
}

export default OrderPlace