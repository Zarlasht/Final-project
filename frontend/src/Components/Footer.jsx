import React from 'react'
import "../css/footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='talk'>
               <h5>Let’s Talk</h5>
               <p>Phone: 018274922</p>
               <p>Email: littlejoys@gmail.com</p>
               <p>Instagram: @littlejoys_homebakes</p> 
        </div>
        
        <div className='quickLinks'>
            <h5>Quick Links</h5>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/menu">Menu</a>
            <a href="/fq">FAQ</a>
            <a href="#contactBox">Contact</a>
        </div>
        <div className='products'>
        <h5>Products</h5>
            <a href="">Celebration Cakes</a>
            <a href="">Cupcakes</a>
            <a href="">Cinammon Rolls</a>
            <a href="">Pistachio Lemon Cake</a>
            <a href="">Basbosa</a>

        </div>
        <img src="./images/footer1.jpg" alt="food hygiene" />

    </div>
  )
}

export default Footer