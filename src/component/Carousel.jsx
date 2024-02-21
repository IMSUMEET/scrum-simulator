import React from 'react'
import LoginCard from './LoginCard'
import FeatureDetails from './FeatureDetails'


function Carousel() {
  return (
    <>
    <div className=' flex flex-col items-center justify-center' style={{background: 'linear-gradient(to right, ##8895A8ff, #F6F9FBff, #E3E9EFff, #07466Dff, #F7FAFCff)'}}>
      <div className="Support" style={{marginBottom: '50px', marginTop: '20px'}}>Support</div> {/* Assuming you want some margin between Support and LoginCard */}
      <LoginCard />
      <FeatureDetails />
    </div>
    </>
  );
}

export default Carousel