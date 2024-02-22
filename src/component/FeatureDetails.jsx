import React, { useState, useEffect } from 'react';

function FeatureDetails() {
    const [index, setIndex] = useState(0);
    const features = [
        { title: "Introducing new features", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam praesentium cum quos? Quisquam voluptates obcaecati voluptate ab fugiat labore incidunt. Quam id a ab!" },
        { title: "Another new feature", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam exercitationem blanditiis quas." },
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
        <div className='featurebox' style={{ display: 'flex', width: '400px',marginTop: '70px', flexDirection:'column', justifyContent:'center' }}>
            <h2 className='newfeature' style={{fontWeight: '650', fontSize:'30px', color: 'white'}}>{features[index].title}</h2>
            <div className='featuretext' style={{color:'white'}}>{features[index].text}</div>
        </div>
    </>
    
  )
}

export default FeatureDetails