import React from 'react'
import CakeCards from '../Components/CakeCards'
import "../css/menu.css"

function Menu() {
  return (
    <div className='menu'>
      <h2>Celebration Cakes</h2>
      <div className="cakesContainer">
        <CakeCards img="./images/celeb1.jpg" name="6 inch Unicorn Birthday Cake" />
        <CakeCards img="./images/celeb2.jpg" name="6 inch Mermaid theme Birthday Cake" />
        <CakeCards img="./images/celeb3.jpg" name="6 inch fresh Strawberry and Cream Cake" />
        <CakeCards img="./images/celeb4.jpg" name="Two Tiered Pearl wedding Cake" />
        <CakeCards img="./images/celeb5.jpg" name="8 inch Lemon Pistachio and Rose naked Cake" />
        <CakeCards img="./images/celeb6.jpg" name="6 inch Vanilla and Fresh Season Fruits Birthday cake “Personalised Cake Topper”" />
        <CakeCards img="./images/celeb7.jpg" name="6 inch Dinasour cake with a “Mini Birthday Cake”" />
        <CakeCards img="./images/celeb8.jpg" name="6 inch Dino theme Birthday Cake with Handmade edible Toppers" />
        <CakeCards img="./images/celeb9.jpg" name="Buttercream Flower Cake with matching Cupcakes" />
        <CakeCards img="./images/celeb10.jpg" name="8 inch Purple Vintage theme Birthday Cake" />
        <CakeCards img="./images/celeb11.jpg" name="Lemon Blueberry Double Loaf Cakes" />
      </div>
      <h2>Cupcakes</h2>
      <div className="cupcakePhotos">
        <img src="./images/aboutbg.jpg" alt="cupcake" />
        <img src="./images/home5.jpg" alt="cupcake" />
        <img src="./images/cupcakeBg.jpg" alt="cupcake" />
      </div>
      <h3>Flavours</h3>
      <div className="flavours">

        <div>
          <img src="./images/flav1.jpg" alt="" />
          <p>Basic Vanilla</p>
        </div>
        <div>
          <img src="./images/flav2.jpg" alt="" />
          <p>Chocolate</p>
        </div>
        <div>
          <img src="./images/flav3.jpg" alt="" />
          <p>Lemon</p>
        </div>
      </div>
      <div class="customization">
        <h3>Make It Yours</h3>
        <p>We offer personalization options to make your cupcake truly special. Let us know your preferences for:</p>
        <ul>
          <li>Age</li>
          <li>Preferred Colors</li>
          <li>Customized Toppings or Numbers</li>
        </ul>
        <p class="note">
          <strong>Note:</strong> Additional charges apply for customized toppings and numbers.
        </p>
        <a href="7ordernow"><button>Order Now</button></a>
      </div>

      <h2>Cinammons Rolls</h2>
      <div className="cinammonPhoto">

      </div>

      <h3>Toppings</h3>
      <div className="toppings">

        <div>
          <img src="./images/topping1.webp" alt="pistachioCream Photo" />
          <p>Pistachio Cream</p>
        </div>
        <div>
          <img src="./images/topping2.webp" alt="Picans Photo" />
          <p>Picans</p>
        </div>
        <div>
          <img src="./images/topping3.jpg" alt="OreoCrumbs Photo" />
          <p>Oreo Crumbs</p>
        </div>
        <div>
          <img src="./images/topping4.jpg" alt="Nutella Photo" />
          <p>Nutella</p>
        </div>

      </div>
      <div className="chooseYourTopping">
        <h3>Choose Your Toppings</h3>
        <p class="instructions">
          Please choose <strong>one topping</strong> per box to make your dessert extra special!
          From creamy Pistachio to indulgent Nutella, we've got something to satisfy every craving.
        </p>
        <a href="/ordernow"><button>Order Now</button></a>
      </div>
      <h2>Basbosa</h2>
      <div className="basbosa">

      </div>
      <div className='basbosaDesc'>
      <h3>Delicious Basbosa – A Sweet Almond & Coconut Treat</h3>
      <p>“almond coconut semolina cake sweatend with rose water
        syrup, sprinkled with nuts”</p>
      <p>if you prefer your basbosa with vanila, saffron cardemon or orange blossom water please let me know.</p>
      <a href="/ordernow"><button>Order Now</button></a>
      </div>
    </div>
  )
}

export default Menu