// import React from 'react';
import {CirclesWithBar } from 'react-loader-spinner'
const Loder = () => {
  return (
    <div style={{display:"flex" ,justifyContent:"center" ,alignItems:"center",height:"100vh"}}>
    <CirclesWithBar
  height="100"
  width="100"
  color="#4B0082"
  outerCircleColor="#4B0082"
  innerCircleColor="#4B0082"
  barColor="#4B0082"
  ariaLabel="circles-with-bar-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />

    </div>
  );
}

export default Loder;
