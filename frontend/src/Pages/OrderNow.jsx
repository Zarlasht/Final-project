import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/OrderNow.css";

export const OrderNow = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    productType: "",
    flavor: "",
    quantity: "",
    pickupDeliveryDate: "",
    specialInstructions: "",
    address: "", // New field for address
  });

  const [message, setMessage] = useState("");

  const items = {
    cupcake: ["Vanilla", "Chocolate", "Lemon", "Other"],
    cake: [
      "Chocolate",
      "Vanilla",
      "Carrot",
      "Coffee",
      "Lemon",
      "Funfetti",
      "Coconut",
      "Caramel",
      "Other",
    ],
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleProductTypeChange = (event) => {
    const productType = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      productType,
      flavor: "",
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.contact ||
      !formData.productType ||
      !formData.quantity ||
      !formData.pickupDeliveryDate ||
      !formData.address // Ensure address is filled
    ) {
      setMessage("Please fill out all required fields.");
      return;
    }

    try {
      emailjs.init("nARGadHwgnUSN5xtS");

      const templateParams = {
        name: formData.name,
        contact: formData.contact,
        product_type: formData.productType,
        flavor: formData.flavor || "None",
        quantity: formData.quantity,
        pickup_delivery_date: formData.pickupDeliveryDate,
        special_instructions: formData.specialInstructions || "None",
        address: formData.address, // Include address in template params
      };

      const response = await emailjs.send(
        "service_fddyfhi",
        "template_0a7ippd",
        templateParams
      );

      if (response.status === 200) {
        setMessage("Your order has been placed successfully! Thanks");
        setFormData({
          name: "",
          contact: "",
          productType: "",
          flavor: "",
          quantity: "",
          pickupDeliveryDate: "",
          specialInstructions: "",
          address: "",
        });
      } else {
        setMessage(`Failed to send the order. Error: ${response.text}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage(`Failed to send the order. Error: ${error.message}`);
    }
  };

  return (
    <div className="order-now-container">
      <div className="order-heading">
        <p>
          Place your order now and let <span>Little Joys Home Bakes</span> add
          sweetness to your special moments!
        </p>
      </div>
      <form onSubmit={handleSubmit} ref={form}>
        <div className="input">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="input">
          <label htmlFor="contact">Contact*</label>
          <input
            type="text"
            id="contact"
            value={formData.contact}
            onChange={handleInputChange}
            placeholder="Enter your contact details"
          />
        </div>
        <div className="input">
          <label htmlFor="address">Address*</label>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter your address"
          />
        </div>
        <div className="input">
          <label htmlFor="productType">Product Type*</label>
          <select
            id="productType"
            value={formData.productType}
            onChange={handleProductTypeChange}
          >
            <option value="">-- Select a product --</option>
            <option value="cupcake">Cupcake</option>
            <option value="cake">Cake</option>
            <option value="cinnamonRolls">Cinnamon Rolls</option>
            <option value="basbosa">Basbosa</option>
          </select>
        </div>
        {formData.productType && items[formData.productType]?.length > 0 && (
          <div className="input">
            <label htmlFor="flavor">Flavor*</label>
            <select
              id="flavor"
              value={formData.flavor}
              onChange={handleInputChange}
            >
              <option value="">-- Select a flavor --</option>
              {items[formData.productType].map((flavor, index) => (
                <option key={index} value={flavor}>
                  {flavor}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="input">
          <label htmlFor="quantity">Quantity*</label>
          <input
            type="number"
            id="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            placeholder="Enter quantity"
            min="1"
          />
        </div>

        <div className="input">
          <label htmlFor="pickupDeliveryDate">Pickup/Delivery Date:</label>
          <input
            type="date"
            id="pickupDeliveryDate"
            value={formData.pickupDeliveryDate}
            onChange={handleInputChange}
          />
        </div>

        <div className="input">
          <label htmlFor="specialInstructions">Special Instructions:</label>
          <textarea
            id="specialInstructions"
            value={formData.specialInstructions}
            onChange={handleInputChange}
            placeholder="Please mention any desired toppings, other flavors, or specific instructions for your Basbosa and Cinnamon Rolls here."
          ></textarea>
        </div>

        <button type="submit">Place Order</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default OrderNow;
