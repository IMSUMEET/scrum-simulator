import React from 'react'
import LoginCard from './LoginCard'
import FeatureDetails from './FeatureDetails'

function Carousel() {
  return (
    <>
    <div className=' flex flex-col items-center w-full justify-center h-screen -translate-x-[45px]' >

        <button className="supportbtn" style={{display:'flex', alignItems:'center',marginBottom: '50px', marginTop: '40px', color:'white'}}>
          <img src="assets\icons\Support_icon.png" style={{height: '20px', marginRight:'5px'}}/>Support
        </button>   
      <LoginCard />
      <FeatureDetails />
    </div>
    </>
  );
}

export default Carousel