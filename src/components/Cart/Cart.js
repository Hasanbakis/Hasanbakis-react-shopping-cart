import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = ({ cart, setCart,handleChange }) => {
  const [price, setPrice] = useState(0);


  const handlePice = () =>{
    let ans=0;
    cart.map((product)=>(
      ans += product.amount * product.price
    ))
    setPrice(ans)
  }


  useEffect(()=>{
    handlePice();
  })

  const handleRemove = (id) =>{
    const arr = cart.filter((product)=>( 
      product.id !== id
    ));
    setCart(arr);

  }
  return (
    <article>
      <div className="shopping-cart">
        <div className="title">Shopping Books</div>
        {cart.map((product) => (
          <div className="item" key={product.id}>
            <div className="image">
              <img src={product.img} alt="" />
            </div>

            <div className="description">
              <span>{product.title}</span>
              <span></span>
              <span>{product.author}</span>
            </div>

            <div className="quantity">
              <button onClick={()=>handleChange(product,-1)} className="plus-btn" type="button" name="button">
                -
              </button>
              <span className="amount">{product.amount}</span>
              <button onClick={()=>handleChange(product,+1)} className="minus-btn" type="button" name="button">
                +
              </button>
              <button onClick={()=>handleRemove(product.id)} className="remove-btn" type="button" name="button">
                rmv
              </button>
            </div>

            <div className="total-price">${product.price*product.amount}</div>
          </div>
        ))}
      </div>

      <div className='total'>
        <span>Total Price of your Carts</span>
        <span>${price}</span>
      </div>
    </article>
  );
};

export default Cart;
