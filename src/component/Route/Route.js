import React from 'react';
import Review from '../../Review/Review';
import Fitur from '../Fitur/Fitur';
import Header from '../Head/Header';
import Home from '../Home/Home';

const Route = () => {
  return (
    <>
      <Header />
      <Home />
      <Fitur />
      <Review />
    </>
    
  )
}

export default Route;
