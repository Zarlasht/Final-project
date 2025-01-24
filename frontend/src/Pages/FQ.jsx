import React from 'react'
import InstagramAPI from "../Components/InstagramAPI"
import "../css/fq.css"
function FQ() {
  return (
    <div className='faqContainer'>
      <div className="policies">
        <h2>Policies</h2>
        <ul>
          <li><strong>Order Minimum:</strong> All orders start from £45.</li>
          <li><strong>Lead Time:</strong> Please place your order at least 1 week in advance.</li>
          <li><strong>Payment:</strong> Full payment is required when placing your order.</li>
          <li><strong>Delivery:</strong>
            <ul>
              <li>1-5 miles: £5.50</li>
              <li>6-10 miles: £10.00</li>
              <li>For locations beyond 10 miles, please contact me for arrangements.</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="faq">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <ul>
          <li><strong>1. How do I place an order?</strong><p>Orders can be placed directly through our website or by contacting us.</p></li>
          <li><strong>2. Can I request a specific delivery date?</strong><p>Yes, we will do our best to accommodate your requested delivery date if it meets the 1-week lead time.</p></li>
          <li><strong>3. Do you offer refunds or cancellations?</strong><p>As full payment is required at the time of order, please contact us as soon as possible for any changes or cancellations. Refunds are subject to our cancellation policy.</p></li>
          <li><strong>4. Do you deliver outside your listed areas?</strong><p>For deliveries beyond 10 miles, please reach out to us to discuss options and additional fees.</p></li>
        </ul>
      </div>

      <InstagramAPI />



    </div>
  )
}

export default FQ