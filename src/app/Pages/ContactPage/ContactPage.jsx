"use client";
import React, { useState } from 'react';
import "./ContactPage.css";
import { JoinedSocial } from '../HomePage/HomePage';
import { Container } from 'react-bootstrap';
import Image from 'next/image';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", 
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const accessKey = "dfa1fd48-004f-4cb6-8b2b-c9d9948a83b3"; 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New contact request from website",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Success");
        
        // 🔥 WhatsApp integration ko handleSubmit ke andar daal diya hai
        const clientPhone = "9914994135"; // India ke liye '91' lagana best practice hai (e.g., 919914994135)
        const text = `New Lead! %0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
        
        // Naye tab mein WhatsApp redirect trigger hoga
        window.open(`https://wa.me/${clientPhone}?text=${text}`, '_blank');
        
        // Form fields clear karne ke liye
        setFormData({ name: "", email: "", phone: "", message: "" }); 
      } else {
        setStatus("Error");
      }
    } catch (error) {
      setStatus("Error");
    }
  };

  return (
    <>
      {/* <JoinedSocial /> */}

      <section className="ContactFormSec">
        <div className="ContactData">
          <div className="ContLeft">
            <Image src="/Images/contactleft.avif" alt="contactleft.avif" width={380} height={475} priority />
          </div>

          <div className="ContFormDiv">

            <div className="contact-heading">
              <h2>Contact Us</h2>
              <p>Send a message and we will reply soon.</p>
            </div>
              
            <form onSubmit={handleSubmit}>

              <div className="formcontrol">
                <label htmlFor="name">Name</label>
                <input 
                  id="name" 
                  name="name" 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="formcontrol">
                <label htmlFor="email">Email</label>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="formcontrol">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  placeholder="Your Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="formcontrol">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="FormBtn">
                <button type="submit" disabled={status === "Sending..."}>
                  {status === "Sending..." ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>

            {/* Status Message Alerts */}
            {status === "Success" && (
              <div className="alert alert-success mt-3" role="alert">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {status === "Error" && (
              <div className="alert alert-danger mt-3" role="alert">
                Something went wrong. Please try again later.
              </div>
            )}
          </div>

          <div className="ContRight">
            <Image src="/Images/contactright.avif" alt="contactright.avif" width={380} height={475} priority />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;