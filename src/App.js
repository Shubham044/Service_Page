import React from 'react';
import { Routes , Route } from 'react-router';
import Contact from './webpages/Contact';
import About from './webpages/About';
import Service from './webpages/Service';
import Home from './webpages/Home';
import Navbar from './webpages/Navbar';
import './index.css'
import Footer from './webpages/Footer';

const App =  () =>{
  return(
    <>
    <Navbar/>

    <Routes>
       <Route path='*' element={<Home/>} />
       <Route path='/' element={<Home/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/service' element={<Service/>} />
       <Route path='/contact' element={<Contact/>} />
     </Routes>

     <Footer/>
       
    </>
  )
}

export default App;