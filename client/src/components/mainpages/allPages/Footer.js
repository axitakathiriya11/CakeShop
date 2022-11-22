import React from 'react'

function Footer() {
  return (
    <div className="footer">

    <div className="inner-footer">

        <div className="footer-items">
            <h3>Quick Links</h3>
            <div className="border1"></div>
            <ul>
                <a href="/">
                    <li>Home</li>
                </a>
                <a href="/products">
                    <li>Cakes</li>
                </a>
                <a href="/about">
                    <li>About</li>
                </a>
                <a href="/login">
                    <li>Login</li>
                </a>
            </ul>
        </div>

        <div className="footer-items">
            <h3>Navigations</h3>
            <div className="border1"></div>
            <ul>
                <a href="#">
                    <li>Press</li>
                </a>
                <a href="#">
                    <li>Blog</li>
                </a>
                <a href="#">
                    <li>Support</li>
                </a>
                <a href="#">
                    <li>Privacy</li>
                </a>
            </ul>
        </div>

        <div className="footer-items">
            <h3>Information</h3>
            <div className="border1"></div>
            <ul>
                <a href="#">
                    <li>Our Company</li>
                </a>
                <a href="#">
                    <li>Certification</li>
                </a>
                <a href="#">
                    <li>Core Values</li>
                </a>
                <a href="#">
                    <li>FAQ</li>
                </a>
            </ul>
        </div>

        <div className="footer-items">
            <h3>Contact us</h3>
            <div className="border1"></div>
            <ul>
                <li>Gujarat, India.</li>
                <li>+91 9638745550</li>
                <li>info@cakeshop.com</li>
            </ul>

        </div>
    </div>

    <div className="footer-bottom">
    Copyright ©2022 All rights reserved | Axita Kathiriya
    </div>
</div>

  )
}

export default Footer
