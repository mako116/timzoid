import React from 'react'
import "../../styles/Mains.css"
import { Link } from 'react-router-dom';
 import heropage from "../../assests/3d-rendering-biorobots-concept 1.svg"
import { Ads } from '../ads/Sponspers';
 import Services from '../Services/Service';
 import Banner2 from '../Banner/Banner2';
import { BsArrowRight } from 'react-icons/bs';
  import PrimeSlider from '../Prime_slider/Prime_slider';
 import { Banner1 } from './../Banner/Banner1';

  
 export  const Homesection = () => {
  return (
    <>
    <div className="bg_full">
        <div className="bg_container">
            <div className="top_bg">
                <span>1,000+ TRUSTED BUSINESSES</span>
             </div>
            <div className='bg_texts'>
            <h2>The most preferred innovative solution provider across Africa and the world at large.</h2>
             <p>We combine innovation with technology by offering impeccable software development services and providing innovative solutions for businesses across various industries.</p>
              
             <Link to="/contact">
                <div className="btns">
                
                <button>Get Started</button>
                <div className='icons'>
                <BsArrowRight/>
                </div>
                
                
            </div>   
            </Link>        
             </div>
            
            
            <div className="bg_img">
             <img src={heropage} alt='hero ' className='imgs'/>
            </div>
            
        </div>
    </div>
    <div>
        <Ads/>
    </div>
    <div>
        <PrimeSlider/>
    </div>
    <div>
        <Services/>
        </div> 

        <div>
            <Banner1/>
        </div>
        <div>
            <Banner2/>
        </div>
    </>
  )
}
