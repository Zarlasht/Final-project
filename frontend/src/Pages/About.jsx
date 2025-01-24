import React from 'react'
import "../css/about.css"
import InstagtramAPI from "../Components/InstagramAPI"
function About() {
  return (
    <div>
      <h2>Welcome to Little Joys Home Bakes – Where Every Bite Brings a Smile!</h2>
      <div className="about">
        <div className='bg'> </div>
        <div className='content'>
          <h4>About</h4>
          <p>At Little Joys Home Bakes, we believe the sweetest moments come from the little things—like the smell of fresh bread, sharing cupcakes with loved ones, or the care baked into every treat.
            With a passion for homemade delights, we craft every cookie, pastry, and cake using fresh ingredients and family-inspired warmth. Whether it’s a special occasion or a simple indulgence, our bakes are here to spread happiness, one little joy at a time.</p>
        </div>

      </div>
      <div className='bakerContainer'>
      <h3>Meet The Baker</h3>
        <p>Hello and welcome to Little Joys Home Bakes, I am Maryam. The baker behind every treat we offer! I have always enjoyed baking and creating cakes at home for my family and friends; my own children's Birthday cake requests seemed to get more challenging every year! Whilst living abroad for the last 5 years I realised it was not always possible to find beautiful, tasty cakes with a reasonable price, after many requests and dedication I decided to turn my hobby into a business and here we are! I am registered with Waverley County Council and received a Food Hygiene Rating of 5 from the Food Standards Agency. Thank you for supporting my small business, I’m so excited to share my love for baking with you!</p>

   <a href="/#contactBox"><button>Contact Me</button></a>
      </div>
      <div className="aboutPhotos">
        <img src="./images/about1.jpg" alt="certificate" />
        <img src="./images/about2.jpg" alt="certificate" />
        <img src="./images/about3.jpg" alt="certificate" />
        <img src="./images/footer1.jpg" alt="" />
      </div>
      
      <InstagtramAPI />

    </div>
  )
}

export default About