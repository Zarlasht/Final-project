import '../css/home.css';
import { FiPhone } from 'react-icons/fi'
import { AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import Testimonial from '../Components/Testimonial';
function Home() {
  return (
    <main>
      <div className='videoContainer'>
        <video autoPlay muted loop className='background-video'>
          <source src='/videos/bgVid.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className='content'>
          <h1>Little joys home bakes</h1>
          <h4>Where every creation baked with love</h4>
        </div>
      </div>
      <div className='homeText'>
        <p>Hi, I'm Maryam...<br />
          I'm a cake maker based in Thatcham, near Newbury and Reading, West Berkshire, specialising in wedding cakes, celebration cakes and cupcakes. I offer a wide range of flavours and also cater for certain dietary requirements such as gluten and dairy free, eggless and vegan.
          Whatever your occasion, let me help make it special.</p>
        <a href="#contactBox"><button>Contact Me</button></a>
      </div>
      <div className='cakesContainer'>
        <div className='cakePhotos'>
          <img src="./images/home1.jpg" alt="cake-photo" className='big' id='item1' />
          <img src="./images/home2.jpg" alt="cake-photo" className='big' id='item2' />
          <img src="./images/home3.jpg" alt="cake-photo" className='small' id='item3' />
          <img src="./images/home4.jpg" alt="cake-photo" className='small' id='item4' />

        </div>
        <a href="/menu"><button>See More</button></a>
      </div>
      <div className='contactBox' id='contactBox'>
        <h2>Want to get in Touch?</h2>
        <div className='socialMedia'>
          <div className='icon'>
            <a href="tel:+1234567890" aria-label="Phone">
              <FiPhone />
            </a>
            <p>+1234567890</p>
          </div>
          <div className='icon'>
            <a href="https://www.instagram.com/littlejoys_homebakes?igsh=MThha3kzNmZyMmZrbQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <AiFillInstagram />
            </a>
            <p>@littlejoys_homebakes</p>
          </div>
          <div className='icon'>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <AiOutlineWhatsApp />
            </a>
            <p>+1234567890</p>
          </div>
          <div className='icon'>
            <a href="mailto:youremail@example.com" aria-label="Email">
              <MdEmail />
            </a>
            <p>littlejoys_homebakes@gmail.com</p>
          </div>
        </div>
      </div>
      <Testimonial/>

    </main>

  )
}

export default Home