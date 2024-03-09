import React, {useState, useEffect} from 'react'
import LoginCard from './LoginCard'
import FeatureDetails from './FeatureDetails'


function Carousel() {
  const positions = [
    { top: '-40px', right: '20px' }, // Original position
    { top: '-40px', right: '550px' }, // New position
    { top: '400px', right: '550px' }, // Third position
    { top: '400px', right: '20px' } // Fourth position
  ];

  const [positionIndex, setPositionIndex] = useState(0); // Index to track current position
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Update position index to rotate through positions array
      setPositionIndex(prevIndex => (prevIndex + 1) % positions.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup function to clear the interval
  }, []); // Empty dependency array to run the effect only once on component mount


  return (
    <>
    {/* Glass morphism div element */}
      <div className="glass-morphism" style={{ opacity: 0.2 , position: 'absolute', ...positions[positionIndex], width: '300px', height: '300px', borderRadius: '50%', backdropFilter: 'blur(60px)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(-26.84deg, #F7FAFC, #EDF2F7)' }}>
      </div>
      <div className=' flex flex-col items-center w-full justify-center h-screen -translate-x-[45px]' >  
          <button className="supportbtn" style={{display:'flex', alignItems:'center',marginBottom: '50px', marginTop: '40px', color:'white'}}>
            <img src="assets\icons\Support_icon.png" style={{height: '20px', marginRight:'5px'}}/>Support
          </button>   
        <LoginCard />
        <FeatureDetails />
      </div>  

//     <div className=' flex flex-col items-center w-full justify-center h-screen -translate-x-[45px]' >

//         <button className="supportbtn" style={{display:'flex', alignItems:'center',marginBottom: '50px', marginTop: '40px', color:'white'}}>
//           <img src="assets\icons\Support_icon.png" style={{height: '20px', marginRight:'5px'}}/>Support
//         </button>   
//       <LoginCard />
//       <FeatureDetails />
//     </div>
    </>
  );
}

export default Carousel