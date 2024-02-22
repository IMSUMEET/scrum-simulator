import React from 'react'
import LoginCard from './LoginCard'
import FeatureDetails from './FeatureDetails'

function Carousel() {
  return (
    <>
    <div className=' flex flex-col items-center  h-screen' style={{background: `linear-gradient(to right, 
        var(--indigo-dye),
        var(--alice-blue)`
        }}>

        <button className="supportbtn" style={{display:'flex', alignItems:'center',marginBottom: '50px', marginTop: '40px', color:'white'}}>
          <img src="src\icons\Support_icon.png" style={{height: '20px', marginRight:'5px'}}/>Support
        </button>   

      <LoginCard />
      
      <FeatureDetails />
    
    </div>
    </>
  );
}

export default Carousel