import React from 'react'

function LoginCard() {
  return (
    <>
    <div className=' relative'>
        <div className=" flex flex-row  bg-white p-4 rounded-lg shadow-md border border-gray-300" style={{ width: '400px', height: '250px' }}>
        {/* Displays features */}
            <div className=" relative flex-wrap">
                <p className=" mt-4 text-left  font-bold text-2xl" style={{color: '#104B70'}}>Feature 1:</p>
                {/* feature description */}
                <p className = " m-3 text-left text-black">Description of the feature</p>
                {/* learn more button */}
                <button className="absolute bottom-4 left-4 rounded-xl text-xs text-cyan-50 absolute-bottom" style={{ width: '100px', height: '25px', backgroundColor: '#104B70'}}>
                    Learn More
                </button>
            </div>
            <div className=" flex-wrap bg-white" style={{width: '200px'}}>
                <img src="scrum_image.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
        </div>
        <div className="absolute  bg-slate-300 rounded-lg ml-48 shadow-2xl" style={{display: 'flex' , height: '80px', width: '250px', marginTop: '-50px', alignItems: 'center', justifyContent: 'center'}}>
            Show some statistics/ highlight !!
        </div>
    </div>
        
    </>
  );
}

export default LoginCard