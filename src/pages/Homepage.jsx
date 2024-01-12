import React from 'react';
import Navbar from '../component/Navbar';
import Search from '../component/Search';
import Category from '../component/Category';
import Footer from '../component/Footer';
import Main from '../component/Main';
import Choice from './Choice';
const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Search/>
        <Main greating = {"Namaste !!!"} wish={"This is how we say great in India"} target={"Explore Our New collection"}/>
        <Category/>
        <Footer/>
        {/* <Choice/> */}
    </div>
  )
}

export default Homepage
