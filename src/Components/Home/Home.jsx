import React, { useEffect, useState } from 'react'
import Banner from '../Banner/Banner'
import Product from '../Product/Product'
import Testimonial from '../Testimonial/Testimonial'
import Partner from '../Partners/Partner'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'



const Home = ({searchTerm,wishlist,addToCart,addToWishlist}) => {
  return (
    <div>
        {/* banner */}
        <Banner/>
        {/* product  */}
        <Product searchTerm={searchTerm} addToCart={addToCart} addToWishlist={addToWishlist} wishlist={wishlist}/>
        
        {/* testimonial  */}
        <Testimonial/>
        {/* why choose us  */}
        <WhyChooseUs/>
        {/* partner  */}
        <Partner/>
        

    </div>
  )
}

export default Home