import React from 'react'
import Navbar from './../components/Navbar';
import CarouselHome from '../components/CarouselHome';
import SearchHome from '../components/SearchHome';
import CardM from '../components/CardM';
import CardT from '../components/CardT';
import CardUM from '../components/CardUM';
import Footer from './../components/footer';

const Home = () => {
  return (
    <>
      <Navbar/>
      <CarouselHome/>
      <SearchHome/>
      <br/>
      <CardUM/>
      <CardM/>
      <CardT/>
      <br/>
      <Footer/>
    </>
  )
}

export default Home