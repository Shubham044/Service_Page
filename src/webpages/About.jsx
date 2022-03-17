import React from 'react';
import image from '../images/image2.svg';
import Common from './Common';

const About = () => {
  return (
    <Common tagline='Welcome To About Page' img={image} btn='Contact Us' link='/Contact' />
  )
}

export default About