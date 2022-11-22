import React from "react";
import img from "./images/about.webp";
import img1 from "./images/about1.webp";

function ContactContent() {
  return (
  
        <div className="create_product">
            <div className="about-box-detail">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.6817304395818!2d-118.24606488496354!3d34.052034380605974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6492802e7df%3A0xdb74a941157e2d85!2s123%20S%20Main%20St%2C%20Los%20Angeles%2C%20CA%2090012%2C%20USA!5e0!3m2!1sen!2sin!4v1665753277730!5m2!1sen!2sin" width="100%" height="380px" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
            </div>

            <form>
                <div className="row">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" required />
                </div>

                <div className="row">
                    <label htmlFor="title">Email</label>
                    <input type="text" name="email" id="email" required/>
                </div>

                <div className="row">
                    <label htmlFor="phno">Phone number</label>
                    <input type="number" name="phno" id="phno" required />
                </div>

                <div className="row">
                    <label htmlFor="message">Message</label>
                    <textarea type="text" name="message" id="message" rows="5" required/>
                </div>

                <button type="submit">Submit</button>
            </form>
            
        </div>
        
    
  );
}

export default ContactContent;
