import React from 'react';
import Typed from 'react-typed';
const Hero = () => {
  return (
    <div className=' text-[#e0e0e0] font-serif'>
        <div style={{outlineColor:"#e0e0e0", outlineStyle:"solid",outlineWidth:"0.5px"}} className='bg-gradient-to-b from-[#07242C] to-[#07242C] w-full h-screen mx-auto text-center flex flex-col justify-center'> 
            {/* <p className = 'text-teal-400  p-2' >GROWING KNOWLEDGE OF PROTEIN FUNCTIONS</p> */}
            <h1 className='flex justify-center md:text-9xl sm:text-6xl text-4xl tracking-widest md:py-6'>CICLOP</h1>
            <div>
                <p className='md:text-2xl sm:text-xl text-l py-4'>find these protein function databases . . . </p>
                <Typed className='md:text-xl sm:text-l text-lg  pl-2  md:pl-4' strings={['enzyme','membrane','transporter','miscellaneous','viral','signal','binding','toxin']} typeSpeed={120} backSpeed={140} loop/>
            </div>
        </div>
    </div>
  )
}

export default Hero