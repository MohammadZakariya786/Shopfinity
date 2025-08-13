import React, { useState } from 'react'
import { animate, delay, easeIn, motion } from 'motion/react'
import ProductList from '../Product/ProductList'
import { GoHeartFill } from 'react-icons/go'
import Heading from '../Heading/Heading'

const tabContainerVariant={
    initial:{
        opacity:0,y:100
        
    },
    animate:{
        opacity:1,y:0,
        transition:{
            staggerChildren:0.2,
            ease:'easeOut'
        }
    }
}
const tabButtonVariant={
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1,
        transition:{
            duration:0.2,
            ease:'easeOut'
        }
    }
}


const Product = ({searchTerm,addToCart,addToWishlist,wishlist}) => {
    const [activeTab, setActiveTab] = useState('All')
    const categories = ['All', 'Men', 'Women', 'Kids', 'New Arrivals', 'On Sale']
    const filteredItems=ProductList.filter(item=>{
    const matchesCategory=
    (activeTab==='All')||
    (activeTab==='New Arrivals'&& item.NewArrival)||
    (activeTab==='On Sale'&& item.onSale)||
    (activeTab===item.category)
     const matchesSearch=item.name.toLowerCase().includes(searchTerm.toLowerCase());   
    return matchesCategory && matchesSearch;
    })
    const renderProducts = filteredItems.map((product,index) => {
        return (
            // CARD
            <motion.div 
            initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.4, ease: 'easeIn', delay:index*0.03 }}
            key={product.id} className='gpu-boost bg-zinc-100 p-5 border-1 border-zinc-300 rounded-lg'>
                <div className='flex justify-between items-center'>
                    <button className={`text-3xl cursor-pointer
                        ${wishlist.some(item=>item.id===product.id)?'text-red-600':'text-zinc-300'}`} onClick={()=>addToWishlist(product)}>
                        <GoHeartFill />
                    </button>
                    <div>
                        {
                            (product.onSale || product.NewArrival)&&
                            (
                                <span className={`text-white px-3 py-1 ${product.onSale?'bg-red-600':'bg-green-600'}`}>
                                    {product.onSale?'Sale':'New'}
                                </span>
                            )
                        }
                    </div>
                </div>




                {/* product image */}
                <div className='w-full md:h-[30vh] h-[20vh] flex justify-center items-center overflow-hidden'>
                    <img src={product.image} className='h-full object-contain'/>
                </div>
                {/* product detail  */}
                <div className='text-center mt-3'>
                    <h3 className='text-[1.4rem] font-semibold'>{product.name}</h3>
                    <div className='mt-1 mb-5'>
                        {
                            product.onSale && (

                            <span className='text-zinc-600 mr-8 font-semibold text-lg line-through'>${product.oldPrice.toFixed(2)}</span>
                            )
                        }
                        <span className='text-red-600 font-semibold text-lg'>${product.price.toFixed(2)}</span>
                    </div>
                    <button className='bg-blue-600 text-white text-lg py-3 w-full rounded-lg cursor-pointer active:bg-blue-700' onClick={()=>addToCart(product)}>Add To Cart</button>
                </div>
            </motion.div>
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
                duration:0.3,
                ease:'easeIn'
            }
        }}
        viewport={{once:true}}
        
        id='product-section' className='max-w-[1300px] mx-auto md:px-12 px-6 py-10'>
            {/* heading  */}
            <Heading highlight='Our' heading='Products'/>
            {/* tabs */}
            <motion.div
            initial='initial'
            whileInView='animate'
            variants={tabContainerVariant}
            viewport={{once:true}}
            className='flex flex-wrap gap-3 justify-center items-center'>
                {
                    categories.map(category => {
                        return (
                            <motion.button
                            variants={tabButtonVariant}
                            key={category} onClick={() => setActiveTab(category)} className={`cursor-pointer py-2 md:px-8 px-6 rounded-full text-lg
                            ${activeTab === category ? 'bg-blue-600 text-white' : 'bg-zinc-100 text-zinc-800'}`}>{category}</motion.button>
                        )
                    })
                }
            </motion.div>
            {/* product listing */}
            <div

            className='grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-9 mt-12'>
                 {
                    filteredItems.length===0?
                    <p className='text-center col-span-4 text-zinc-800 text-lg'>No Product Found</p>:
                    renderProducts
                }
            </div>
        </motion.section>
    )
}

export default Product