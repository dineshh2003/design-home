import React from 'react';
import Main from '../component/Main';
import Category from "../component/Category";
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

const Explore = () => {
  return (
    <div>
        <Navbar/>
        <Main greating = {"Hello !!!"} wish={"This is how we say hello in India"} target={"Explore Your Home"}/>
        <Category/>
        <Footer/>
    </div>
  )
}

export default Explore;
