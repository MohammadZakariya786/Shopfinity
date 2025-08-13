import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Components/Home/Home'
import About from './Components/About/About'
import{BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import ContactUs from './Components/ContactUs/ContactUs'
import Navbar from './Components/Navbar/Navbar'
import OrderPlace from './Components/OrderPlace/OrderPlace'
import OrderSummary from './Components/OrderSummary/OrderSummary'
import Wishlist from './Components/Wishlist/Wishlist'
import Cart from './Components/Cart/Cart'
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePanel, setActivePanel] = useState(null);
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [cart, setCart] = useState(()=>{
    const storeCart = localStorage.getItem('cart');
    return storeCart ? JSON.parse(storeCart) : []
  });
  const [wishlist, setWishlist] = useState(() => {
    const storeWishlist = localStorage.getItem('wishlist');
    return storeWishlist ? JSON.parse(storeWishlist) : []
  });

   // total calculation 
      const subTotal=cart.reduce((acc,item)=>acc+item.price*item.quantity,0);
      const totalItems=cart.reduce((acc,items)=>acc+items.quantity,0);
      const shippingFee=totalItems*2;
      const orderTotal=subTotal+shippingFee;


  // handle scroll 
    const handleScroll=()=>{
           const section=document.getElementById('product-section');
            if(section){
                section.scrollIntoView({behavior:'smooth'});
            }
        }
    // cart and wishlist showtab function 
    const handlePanel=(tabName)=>{
        setActivePanel(prev=>(
            prev===tabName?null:tabName
        ))
    }

        // Close tab function 
    const handleClose=()=>setActivePanel(null)


    // save items to local storage 
    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart));
        localStorage.setItem('wishlist',JSON.stringify(wishlist));
    },[cart,wishlist])  

    useEffect(() => {
        
          const changeNavbar= () => {
            setIsScrolled(window.scrollY>10)
          }
          window.addEventListener('scroll',changeNavbar);
    
        }, []);

    // remove item 
    const removeItem=(product)=>{
        setCart(cart.filter(item=>item.id !== product.id))
    }

    // quantityincrement 
    const quantityIncrement=(product)=>{
        setCart(cart.map(item=>
            item.id===product.id?
            {...item,quantity:item.quantity+1}:item
        ))
    }
    // quantitydecrement 
    const quantityDecrement=(product)=>{
        setCart(cart.map(item=>
            item.id===product.id && item.quantity>1?
            {...item,quantity:item.quantity-1}:item
        ))
    }

    // Add to Cart function 
    const addToCart=(product)=>{
        const alreadyAdded=cart.find(item=>item.id===product.id);
        if(alreadyAdded){
            toast.warning('Item is already in the Cart')
            return;
        }
        setCart([...cart,{...product,quantity:1}]);
        toast.success('Added to cart!');
    }

    // addToWishlist Function 
    const addToWishlist=(product)=>{
        const isInWishlist=wishlist.some(item=>item.id===product.id);
        if (isInWishlist){
            setWishlist(wishlist.filter(item=>item.id !== product.id))
            toast.info('Removed from wishlist');
        }
        else{
            const addDate=new Date().toLocaleDateString('en-GB');
            setWishlist([...wishlist,{...product,addDate}]);
            toast.success('Added to Wishlist!');
        }
    }

    // clearwishlit
    const clearWishlist=()=>{
        setWishlist([]);
        toast.success('Wishlist cleared');
    }
    

  return (
      <BrowserRouter>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} />
      <ScrollToTop/>

      <Navbar

    handleScroll={handleScroll}
    setSearchTerm={setSearchTerm}
    totalItems={totalItems}
    isScrolled={isScrolled}
    handlePanel={handlePanel}
    wishlist={wishlist}
      />
    {/* card tab  */}
        <Cart activePanel={activePanel} handleClose={handleClose} cart={cart} removeItem={removeItem} quantityIncrement={quantityIncrement} quantityDecrement={quantityDecrement} subTotal={subTotal}
        shippingFee={shippingFee} orderTotal={orderTotal} setOrderSummary={setOrderSummary}/>
        {/* wishlist  */}
        <Wishlist activePanel={activePanel} handleClose={handleClose} wishlist={wishlist} addToCart={addToCart} clearWishlist={clearWishlist}/>
        {/* OrderSummary  */}
        {
            orderSummary&&
            <OrderSummary cart={cart} subTotal={subTotal} shippingFee={shippingFee} orderTotal={orderTotal} setOrderPlaced={setOrderPlaced} setOrderSummary={setOrderSummary} setCart={setCart}/>
        }
        {/* order placed  */}
        {
            orderPlaced&&
            <OrderPlace setOrderPlaced={setOrderPlaced}/>
        }
      <Routes>
        <Route 
        path='/' 
        element={
            <Home
            searchTerm={searchTerm}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            wishlist={wishlist}
            />}></Route>

      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<ContactUs/>}></Route>
      
      
      </Routes>
      {/* footer  */}
        <Footer/>
      </BrowserRouter>
    
  )
}

export default App