import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css'

function HeroSection() {
  return (
    <div className='hero-container' id='home'>
      { /*<video src='/Videos/video-2.mp4' autoPlay loop muted /> */}
      <h1>MAGIC AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='heto-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
      </div>
    </div>
  )
}

export default HeroSection