import React from 'react'
import Header from '../../headers/Header'
import AboutContent from './AboutContent'
import ContactContent from './ContactContent'
import Footer from './Footer'

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <h2>This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.</h2>
        <hr/>
      </div>
      <AboutContent />
      <div className="home">
        <h2>If you got any questions please do not hesitate to send us a message</h2>
        <hr/>
      </div>
      <ContactContent />
      <Footer/>
    </>
  )
}

export default Home
