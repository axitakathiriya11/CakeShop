import React from 'react'
import img from './images/about.webp'
import img1 from './images/about1.webp'


function AboutContent() {

  return (
    <div className="about-detail">
        <div className="about">
            <img src={img} alt="" />
            <div className="about-box-detail">
                <span>This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.</p>
            </div>
        </div>

        <div className="about">
            <div className="about-box-detail">
                <span>This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.</p>
            </div>
            <img src={img1} alt="" />
        </div>
    </div>
  )
}

export default AboutContent
