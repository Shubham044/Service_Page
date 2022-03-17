import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';
import image from '../images/image.svg';

const Home = () => {
  return (
    <>
      <Common tagline="Grow Your Business With" name="US" img={image} btn="Get Started" link='/Service' />
    </>
  )
}

export default Home