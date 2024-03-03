import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function LoginCard() {
    const [index, setIndex] = useState(0);
    const features = [
        { title: "Feature 1:", description: "Description of the feature 1", imageSrc: `src\\images\\scrum_image.png`, highlight: "Highlight 1" },
        { title: "Feature 2:", description: "Description of the feature 2", imageSrc: `src\\images\\sprint2.png`, highlight: "Highlight 2" },
        // Add more features as needed
    ];

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % features.length);
        }, 3000);
    
        return () => clearInterval(interval);
    }, [features.length]);

  return (
    <>
    <div className='relative'>
        <div className=" flex flex-row  bg-white p-4 rounded-lg shadow-md border border-gray-300" style={{ width: '400px', height: '250px' }}>
        {/* Displays features */}
            <div className=" relative flex-wrap">
            <motion.p className=" mt-4 text-left font-bold text-2xl" style={{color: '#104B70'}}
                initial={{ opacity: 0 }} // Initial animation state
                animate={{ opacity: 1 }} // Animation when component mounts
                transition={{ type: 'spring', duration: 1 }} // Animation transition settings
            >
                {features[index].title}
            </motion.p>
                {/* <p className=" mt-4 text-left font-bold text-2xl" style={{color: '#104B70'}}></p> */}
                {/* feature description */}
                <p className = " m-3 text-left text-black">{features[index].description}</p>
                {/* learn more button */}
                <button className="absolute bottom-4 left-4 rounded-2xl text-xs text-cyan-50 absolute-bottom" style={{ width: '100px', height: '30px', backgroundColor: '#104B70'}}>
                    Learn More
                </button>
            </div>
            <div className=" flex-wrap bg-white" style={{width: '200px'}}>
                <img src={features[index].imageSrc} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
        </div>
        <div className="absolute bg-white rounded-lg ml-48 " style={{display: 'flex' , height: '80px', width: '250px', marginTop: '-50px', alignItems: 'center', justifyContent: 'center', color:'#104B70',  boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)'}}>
            <p style={{ transition: 'opacity 0.5s ease-in-out'}}>{features[index].highlight}</p>
        </div>
    </div>
        
    </>
  );
}

export default LoginCard


