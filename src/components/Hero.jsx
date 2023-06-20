import React from 'react';
import Typed from 'react-typed';
// <h1 className=' md:text-4xl sm:text-6xl text-4xl tracking-widest md:py-6'>CICLOP</h1>
const Hero = () => {
  return (
    <div className=' text-[#e0e0e0] font-serif'>
        <div style={{outlineColor:"#e0e0e0", outlineStyle:"solid",outlineWidth:"0.5px"}} className='bg-gradient-to-br from-cyan-800 via-emerald-600 to-lime-400 w-full h-screen mx-auto text-center flex flex-col items-center justify-center'> 
            {/* <p className = 'text-teal-400  p-2' >GROWING KNOWLEDGE OF PROTEIN FUNCTIONS</p> */}
            <div className='flex h-3/4 w-2/3  font-mono' >            
              <div className='h-full w-1/2 bg-black'>
                <h1 className='my-60 bg-gradient-to-tr from-cyan-700 via-emerald-500 to-lime-300 bg-clip-text text-transparent text-6xl font-semibold'>Title Here</h1>
                </div>
              <div className=' h-full w-1/2 align-middle'>
                <div className='my-60'>
                    <p className='text-center md:text-2xl sm:text-xl text-l py-4 '>Find these protein function databases... </p>
                    <Typed className='text-center md:text-2xl sm:text-l text-lg ' strings={['enzyme','membrane','transporter','miscellaneous','viral','signal','binding','toxin']} typeSpeed={120} backSpeed={140} loop/>
                </div>
                </div> 
              
             </div>
        </div>
    </div>
  )
}

export default Hero