import React, { useState } from 'react'
import { animate, delay, easeIn, motion } from 'motion/react'
import { GoHeartFill } from 'react-icons/go'
import Heading from '../Heading/Heading'
import { useEffect } from 'react'
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/loading.json';
import AllImg from '../../assets/All.webp'
import WomenImg from '../../assets/Women.webp'
import JewelleryImg from '../../assets/Jewellery.webp'
import ElectronicsImg from '../../assets/Electronics.webp'
import NewArrivalImg from '../../assets/NewArrival.webp'
import OnSaleImg from '../../assets/Sale.webp'

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
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        const getUsersData= async()=>{
             setLoading(true);
            const url='https://fakestoreapi.com/products?limit=30'
            let response=await fetch(url)
            response=await response.json()
            // map 
            const formattedData=response.map((item,index)=>{
                let onSale = false;
                let NewArrival = false;

                // Randomly decide category, but exclusive
                const rand = Math.random();
                if (rand < 0.3) {
                    onSale = true;           // 30% chance
                } else if (rand < 0.5) {
                    NewArrival = true;       // 20% chance
                } 
        return {
               id:item.id,
               name:item.title,
               image:item.image,
               price:item.price,
               oldPrice:item.price + 20,
               onSale,
               NewArrival,
               category:item.category==="men's clothing"
               ?"Men"
               :item.category==="women's clothing"
               ?"Women"
               :item.category==="jewelery"
               ?"Jewellery"
               :"Electronics"}
            })
            setProductList(formattedData);
            setLoading(false);
        }
        getUsersData();
    },[])
        

const categoryImages = {
    All: AllImg,
    Men: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    Women: WomenImg,
    Jewellery: JewelleryImg,
    Electronics: ElectronicsImg,
    "New Arrivals": NewArrivalImg,
    "On Sale": OnSaleImg
  }


    const categories = ['All', 'Men', 'Women', 'Jewellery','Electronics', 'New Arrivals', 'On Sale']
    const filteredItems=productList.filter(item=>{
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
            key={product.id} className='gpu-boost bg-zinc-100 p-5 border-1 border-zinc-300 rounded-lg grid'>
                <div className='flex justify-between items-center mb-2'>
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
                <div className=' w-full md:h-[30vh] h-[20vh] flex justify-center items-center overflow-hidden'>
                    <img src={product.image} className='h-full object-contain'/>
                </div>
                {/* product detail  */}
                <div className='text-center  mt-3 flex flex-1 flex-col'>
                    <h3 className='text-lg font-semibold'>{product.name}</h3>
                    <div className='mt-1 mb-5'>
                        {
                            product.onSale && (

                            <span className='text-zinc-600 mr-8 font-semibold text-lg line-through'>${product.oldPrice.toFixed(2)}</span>
                            )
                        }
                        <span className='text-red-600 font-semibold text-lg'>${product.price.toFixed(2)}</span>
                    </div>
                    <div className='mt-auto'>
                    <button className='bg-blue-600 text-white text-lg py-3 w-full rounded-lg cursor-pointer active:bg-blue-700' onClick={()=>addToCart(product)}>Add To Cart</button>
                    </div>
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
                duration:1,
                ease:'easeIn',
                delay:0.2
            }
        }}
        viewport={{once:true}} 
        id='product-section' className='gpu-boost max-w-[1300px] mx-auto md:px-12 px-6 py-10'>
            {/* heading  */}
            <Heading highlight='Our' heading='Products'/>
            {/* tabs */}
            <motion.div
            initial='initial'
            whileInView='animate'
            variants={tabContainerVariant}
            viewport={{once:true}}
            className='gpu-boost flex flex-wrap gap-3 justify-center items-center -mt-5'>
                {
                    categories.map(category => (
                        <motion.div
                        key={category}
                        variants={tabButtonVariant}
                        className='flex flex-col items-center'
                        >
                            {/* category img          */}
                            <img
                            src={categoryImages[category]}
                            alt={category}
                            className={`w-16 h-16 hover:scale-110 object-contain  rounded-full mb-2 transform transition-all duration-300  border-2 
                                ${activeTab === category ? 'scale-120 shadow-md border-blue-400' : 'scale-100 border-zinc-200'}`}
                            />
                            {/* category button */}
                            <motion.button
                            variants={tabButtonVariant}
                            onClick={() => setActiveTab(category)} className={`cursor-pointer py-2 my-3 md:px-8 px-6 rounded-full text-lg
                            ${activeTab === category ? 'bg-blue-600 text-white' : 'bg-zinc-100 text-zinc-800'}`}>{category}</motion.button>
                            </motion.div>
                        
                    ))
                }
            </motion.div>
            {/* product listing */}
            <div

            className='gpu-boost grid lg:grid-cols-4  md:grid-cols-2  grid-cols-1 gap-9 mt-12'>
                {loading ? (
        // Lottie loading animation
        <div className='flex flex-col md:col-span-4 justify-center items-center  h-[400px]'>
            <Lottie 
                animationData={loadingAnimation} 
                loop={true} 
                style={{ height: 200, width: 200 }} 
            />
            <h3 className='mt-5 text-[1.2rem] text-blue-400 font-medium'>Products Loading....</h3>
        </div>
    ) : filteredItems.length === 0 ? (
        <p className='text-center col-span-4 text-zinc-800 text-lg'>No Product Found</p>
    ) : (
        renderProducts
    )}
            </div>
        </motion.section>
    )
}

export default Product