import React from 'react';
import './HeroSection.css';
import '../App.css'

function HeroSection() {
  return (
    <div className='hero-container' id='home'>
      { /*<video src='/Videos/video-2.mp4' autoPlay loop muted /> */}
      <h1>MAGIC AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</button>
      </div>
    </div>
  )
}

export default HeroSection