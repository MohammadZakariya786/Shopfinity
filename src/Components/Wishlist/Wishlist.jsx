import React from 'react'
import { IoTrash } from 'react-icons/io5'
import { FaMinus, FaPlus } from "react-icons/fa";
const Wishlist = ({activePanel,handleClose,wishlist,addToCart,clearWishlist}) => {
  return (
     <div className={`flex flex-col justify-between gap-5 bg-zinc-100 fixed top-0 right-0 bottom-0 z-100 left-auto md:w-[400px] w-[370px] border-1 border-zinc-300 py-7 transform transition-transform duration-300 
     ${activePanel==='wishlist'?'translate-x-0':'translate-x-full'}`}>
            {/* heading */}
            <div className='px-10'>
                <h3 className='text-3xl font-bold text-zinc-800 text-center'>Your Wishlist</h3>
            </div>
            {/* cart items  */}
          <div className='flex-1 flex flex-col gap-2 overflow-y-auto scroll'>
              {
                  wishlist.length === 0 ?
                      (<p className='text-zinc-800 text-center'>Your Wishlist is Empty</p>) :
                      (

                          wishlist.map((product, index) => {
                              return (
                                  <div key={index} className={`flex items-center gap-3 px-5 py-1 border-y-1 border-zinc-300
                          ${index % 2 === 0 ? 'bg-blue-100' : 'bg-white'}`}>
                                      {/* cart image  */}
                                      <div className='w-20 h-20'>
                                          <img src={product.image} className='h-full w-full object-contain' />
                                      </div>
                                      {/* product details  */}
                                      <div className='flex-1'>
                                          <div className='flex flex-col'>
                                              <p className='md:text-sm text-[12px] text-zinc-500 py-2 '>Added:{product.addDate}</p>
                                              <h4 className='font-semibold text-lg text-zinc-800'>{product.name}</h4>
                                          </div>
                                          <div className='flex justify-between'>
                                              <div>
                                                  {
                                                      product.onSale && (

                                                          <span className='text-zinc-600 md:mr-4 mr-3 font-semibold text-lg line-through'>${product.oldPrice.toFixed(2)}</span>
                                                      )
                                                  }
                                                  <span className='text-red-600 font-semibold text-lg'>${product.price.toFixed(2)}</span>
                                              </div>
                                              <button className='md:text-sm text-[13px] bg-blue-600 text-white  md:px-5 px-3 
                                              py-[5px] rounded-full active:bg-blue-700 cursor-pointer'
                                               onClick={()=>addToCart(product)}>Add To Cart</button>
                                          </div>
                                      </div>
                                  </div>
                              )
                          }
                          )
                      )
              }

          </div>
           
            {/* button  */}
            <div className='flex gap-x-2 px-10'>
                <button className='bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700' 
                onClick={handleClose}>Close</button>
                <button className='bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700'
                onClick={clearWishlist}>Clear All</button>
            </div>
    
        </div>
  )
}

export default Wishlist