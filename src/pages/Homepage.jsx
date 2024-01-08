import React from 'react';
import Navbar from '../component/Navbar';
import Search from '../component/Search';
import Category from '../component/Category';
import Footer from '../component/Footer';

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Search/>
        <Category/>
        <Footer/>
    </div>
  )
}

export default Homepage
