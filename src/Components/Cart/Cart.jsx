import React from 'react'
import { IoTrash } from 'react-icons/io5'
import { FaMinus, FaPlus } from "react-icons/fa";
const Cart = ({ activePanel, handleClose, cart,removeItem,quantityIncrement,quantityDecrement,subTotal,shippingFee,orderTotal,setOrderSummary }) => {
    return (
        <div className={`flex flex-col justify-between gap-5 bg-zinc-100 fixed top-0 right-0 bottom-0 z-100 left-auto 
    md:w-[400px] w-[370px]  border-1 border-zinc-300 py-7 transform transition-transform duration-300 ${activePanel ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* heading */}
            <div className='px-10'>
                <h3 className='text-3xl font-bold text-zinc-800 text-center'>Your Cart</h3>
            </div>
            {/* cart items  */}
            <div className='flex-1 flex flex-col gap-2 overflow-y-auto scroll'>
                {
                    cart.length===0?
                    (<p className='text-zinc-800 text-center'>Your Cart is Empty</p>):
                    (
                    cart.map((product, index) => {
                        return (
                            <div key={product.id} className={`flex items-center gap-3 px-5 py-1 border-y-1 border-zinc-300 
                    ${index % 2 === 0 ? 'bg-blue-100' : 'bg-white'}`}>
                                {/* cart image  */}
                                <div className='w-20 h-20'>
                                    <img src={product.image} className='h-full w-full object-contain' />
                                </div>
                                {/* product details  */}
                                <div className='flex-1'>
                                    <div className='flex justify-between'>
                                        <h4 className='font-semibold text-lg text-zinc-800'>{product.name}</h4>
                                        <button className='w-8 h-8 bg-red-600 text-white rounded-full flex justify-center items-center mr-[26px] cursor-pointer active:bg-red-700' onClick={()=>removeItem(product)}><IoTrash /></button>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div>
                                            {
                                                product.onSale && (

                                                    <span className='text-zinc-600 mr-5 font-semibold text-lg line-through'>${product.oldPrice.toFixed(2)}</span>
                                                )
                                            }
                                            <span className='text-red-600 font-semibold text-lg'>${product.price.toFixed(2)}</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <button className='w-7 h-7 bg-blue-600 text-white rounded-full flex justify-center items-center cursor-pointer text-[14px] active:bg-blue-700' onClick={()=>quantityDecrement(product)}>
                                                <FaMinus />
                                            </button>
                                            <span>{product.quantity}</span>
                                            <button className='w-7 h-7 bg-blue-600 text-white rounded-full flex justify-center items-center cursor-pointer text-[14px] active:bg-blue-700'onClick={()=>quantityIncrement(product)}><FaPlus /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }))
                }
                

            </div>
            {/* cart total */}
            <div className='px-10 border-y border-zinc-300'>
                <div className='flex justify-between pt-2'>
                    <span className='text-zinc-800'>Subtotal</span>
                    <span className='text-zinc-800'>${subTotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between py-2'>
                    <span className='text-zinc-800'>Shipping & Handlings</span>
                    <span className='text-zinc-800'>${shippingFee.toFixed(2)}</span>
                </div>
                <div className='flex justify-between py-2 border-t border-zinc-300'>
                    <span className='text-lg font-bold text-blue-600'>Order Total</span>
                    <span className='text-lg font-bold text-blue-600'>${orderTotal.toFixed(2)}</span>
                </div>
            </div>
            {/* button  */}
            <div className='flex gap-x-2 px-10'>
                <button className='bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700' onClick={handleClose}>Close</button>
                <button className={` text-white flex-1 h-[7vh]
                    ${cart.length===0?'bg-gray-400 cursor-not-allowed':'bg-blue-600 cursor-pointer active:bg-blue-700'}`} 
                    disabled={cart.length===0} onClick={()=>setOrderSummary(true)}>Checkout</button>
            </div>

        </div>
    )
}

export default Cart