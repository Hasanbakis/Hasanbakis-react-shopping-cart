import React, { useState } from "react";
import Navbar from "./components/MainHeader/Navbar";
import Cart from "./components/Cart/Cart"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import './components/Home/Home.css';

const  App =() => {
  const[show,setShow] =  useState(true);
  const [cart,setCart] = useState([])
  const [warning,setWarning] = useState(false);
  const [search,setSearch] = useState("");
 

  const handleSearch = (event) =>{
    setSearch(event.target.value)
  }


 

  const handleClick = (event)=>{
    let isPresent=false
    cart.forEach((product)=>{
      if(event.id === product.id){
        isPresent = true;
      }
     
    })
    if(isPresent){
      setWarning(true);
      setTimeout(()=>{
        setWarning(false);
      },3000)
      return;
    }
     setCart([...cart,event])
    
  }


  const handleChange = (product,d) =>{
    let ind=-1;
    cart.forEach((data,index)=>{
      if(data.id===product.id){
        ind = index;
      }
    })

    const tempArr = cart;
    tempArr[ind].amount +=d;

    if(tempArr[ind].amount===0){
      tempArr[ind].amount =1;
    }

    setCart([...tempArr])
  }


 
  return (
    <React.Fragment>
      <Navbar size={cart.length} handleSearch={handleSearch} setShow={setShow}/>
      {
        show ? <Home item={search} handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
      }
      {
          warning && <div className="warning">Item is already added to your cart</div>
      }
      <Footer/>
    </React.Fragment>
  );
}

export default App;
