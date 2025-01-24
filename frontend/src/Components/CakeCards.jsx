import React from 'react'
import "../css/cakecards.css"

function CakeCards(props) {
  return (
    <div className='cakecards'>
        <img src={props.img} alt="" />
        <p>{props.name}</p>
        <a href="/ordernow"><button>Order Now</button></a>
    </div>
  )
}

export default CakeCards