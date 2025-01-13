import '../css/testimonial.css'
import '../data/Testimonials.json'
import { useState, useEffect } from 'react'
function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/data/Testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTestimonials(data);
      })
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} />
            <p className="feedback">"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonial