import '../css/testimonial.css'
import { useState, useEffect } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation } from "swiper/modules";


function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/data/Testimonials.json")
    .then((response)=>response.json())
    .then((data)=>setTestimonials(data))
    .catch((err)=>console.error("error fetching testimonials:",err))
  }, []);
  

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className="swiper-container"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-card">
              <img
                src={testimonial.image}
                className="testimonial-image"
              />
              <blockquote>{testimonial.feedback}</blockquote>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  )
}

export default Testimonial