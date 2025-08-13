import React from 'react'


const OrderSummary = ({cart,subTotal,shippingFee,orderTotal,setOrderPlaced,setOrderSummary,setCart}) => {
const handlePlaceOrder=()=>{
    setOrderSummary(false)
    setOrderPlaced(true)
    setCart([]);
}

  return (
    <section className='flex justify-center items-center bg-black/95 z-110 fixed inset-0'>
        <div className='bg-zinc-100 md:w-[600px] w-[350px] md:mx-auto mx-6 p-8 rounded-lg border-1 border-zinc-300'>
            <h2 className='text-zinc-800 md:text-3xl text-2xl font-bold mb-5 text-center'>Order Summary</h2>
            <div>
                <div>
                    {
                        cart.map(item=>(
                            <div key={item.id} className='flex justify-between items-center border-b-1 border-zinc-300'>
                                <span className='text-zinc-800 py-2'>{item.name}(x{item.quantity})</span>
                                <span className='text-zinc-800 py-2'>${(item.price* item.quantity).toFixed(2)}</span>
                            </div>
                            
                        ))
                    }
                </div>
                <div className='flex justify-between pt-3'>
                    <span className='text-zinc-800'>SubTotal</span>
                    <span className='text-zinc-800'>${subTotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between py-3'>
                    <span className='text-zinc-800'>Shipping & Handling</span>
                    <span className='text-zinc-800'>${shippingFee.toFixed(2)}</span>
                </div>
                <div className='flex justify-between pt-3 border-t-1 border-zinc-300 mb-5'>
                    <span className='text-blue-600 text-xl font-bold'>OrderTotal</span>
                    <span className='text-blue-600 text-xl font-bold'>${orderTotal.toFixed(2)}</span>
                </div>
            </div>
            <div className='flex mt-10 gap-x-3'>
                <button className='bg-zinc-800 cursor-pointer flex-1 active:bg-zinc-900 py-3 text-white rounded-lg' onClick={()=>setOrderSummary(false)}>Cancel</button>
                <button className='bg-blue-600 cursor-pointer flex-1 active:bg-blue-700 py-3 text-white rounded-lg' onClick={handlePlaceOrder}>Place Order</button>


            </div>
        </div>
    </section>
  )
}

export default OrderSummary