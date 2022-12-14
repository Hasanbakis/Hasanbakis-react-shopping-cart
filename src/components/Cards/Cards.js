import React from 'react'
import './Cards.css'

const Cards = (props) => {
  const {title,author,price,img} = props.product;
  return (
    <div className='cards'>
        <div className='image_box'>
            <img src={img} alt=""/>
        </div>
        <div className='details'>
          <p>{title}</p>
          <p>{author}</p>
          <p>Price - {price}</p>
          <button onClick={()=>props.handleClick(props.product)}>Add to Cart</button>
         
        </div>
       
    </div>
   )
}

export default Cards