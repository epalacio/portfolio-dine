import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from '../img/logo.svg'


const Hero = () => {
    return ( 
        <Router>
        <section className='bg-heroMobileImg md:bg-heroTabletImg lg:bg-heroDesktopImg text-white h-screen bg-cover  flex lg:justify-left items-center'>
            <div className='max-w-screen-sm flex flex-col justify-center items-center lg:items-start px-12 text-center lg:text-left mx-auto lg:mx-0'>
                <img src={logo} alt='dine restaurant logo'  className='mb-12 lg:mb-48 md:mt-48 lg:mt-0'/>
                <h1 className='text-headerMobile md:text-headerTablet lg:text-headerDesktop font-light mb-6'>Exquisite dining since 1989</h1>
                <p className='mb-6'>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                <Link to='/booking' className='py-4 px-6 border-2 border-white hover:bg-white hover:text-codGrey'>BOOK A TABLE</Link>
            </div>
           
        </section>
        </Router>
     );
}
 
export default Hero;