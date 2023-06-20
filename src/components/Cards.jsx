import React from 'react'
import enzyme from '../assets/enzyme.jpg'
import membrane from '../assets/membrane.jpg'
import transporter from '../assets/transporter.jpg'
import misc from '../assets/misc.jpg'
import viral from '../assets/viral.jpg'
import signal from '../assets/signal.jpg'
import binding from '../assets/binding.jpg'
import toxin from '../assets/toxin.jpg'

const Cards = () => {
  return (
    <div className='bg-gradient-to-br  from-cyan-900 via-emerald-700 to-lime-400 font-mono w-full py-[3rem] px-4 '>
        <h1 className='flex justify-center font-extralight py-[2rem] font-mono text-[#e0e0e0] tracking-tighter text-4xl'>F U N C T I O N S</h1>
        
        <div className="max-w-[1240px] mx-auto grid place-items-center  md:grid-cols-3 md:grid-rows-3 gap-8 sm:grid-cols-1 sm:grid-rows-8 ">

            <a href="my-project/Enzymespage" className="overflow-hidden bg-cover rounded-lg cursor-pointer group w-full h-full flex-col my-4"
                  style= {{backgroundImage: "url(assets/enzyme.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat center", height:"200px", width:"200px"}}>
                  <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 class="mt-4 text-xl font-thin  text-white capitalize"> Enzyme </h2>
                  </div>
             </a>
              <a href="google.com" className="overflow-hidden bg-cover rounded-lg cursor-pointer group w-full h-full flex-col my-4"
                  style= {{backgroundImage: "url(assets/membrane.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat center", height:"200px", width:"200px"}}>
                  <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 class="mt-4 text-xl font-thin  text-white capitalize"> Membrane </h2>
                  </div>
             </a>
             <a href="google.com" className="overflow-hidden bg-cover rounded-lg cursor-pointer group w-full h-full flex-col my-4"
                  style= {{backgroundImage: "url(assets/transporter.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat center", height:"200px", width:"200px"}}>
                  <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 class="mt-4 text-xl font-thin  text-white capitalize"> Transporter </h2>
                  </div>
             </a>
             <a href="google.com" className="overflow-hidden bg-cover rounded-lg cursor-pointer group w-full h-full flex-col my-4"
                  style= {{backgroundImage: "url(assets/misc.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat center", height:"200px", width:"200px"}}>
                  <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 class="mt-4 text-xl font-thin  text-white capitalize"> Miscellaneous </h2>
                  </div>
             </a>
       <a href="google.com" className="overflow-hidden bg-cover rounded-lg cursor-pointer group w-full h-full flex-col my-4"
                  style= {{backgroundImage: "url(assets/viral.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat center", height:"200px", width:"200px"}}>
                  <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 class="mt-4 text-xl font-thin  text-white capitalize"> Viral </h2>
                  </div>
             </a>
              <a href="google.com" className="overflow-hidden bg-cover rounded-lg cursor-pointer group w-full h-full flex-col my-4"
                  style= {{backgroundImage: "url(assets/signal.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat center", height:"200px", width:"200px"}}>
                  <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 class="mt-4 text-xl font-thin  text-white capitalize"> Signal </h2>
                  </div>
             </a>
             <a href="google.com" className="overflow-hidden bg-cover rounded-lg cursor-pointer group w-full h-full flex-col my-4"
                  style= {{backgroundImage: "url(assets/binding.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat center", height:"200px", width:"200px"}}>
                  <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 class="mt-4 text-xl font-thin  text-white capitalize"> Binding </h2>
                  </div>
             </a>
             <a href="google.com" className="overflow-hidden bg-cover rounded-lg cursor-pointer group w-full h-full flex-col my-4"
                  style= {{backgroundImage: "url(assets/toxin.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat center", height:"200px", width:"200px"}}>
                  <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 class="mt-4 text-xl font-thin  text-white capitalize"> Toxin </h2>
                  </div>
             </a>
       <a href="google.com" className="overflow-hidden bg-cover rounded-lg cursor-pointer group w-full h-full flex-col my-4"
                  style= {{background:"transparent", backgroundSize: "cover", backgroundRepeat: "no-repeat center", height:"200px", width:"200px", outlineColor:"#e0e0e0", outlineStyle:"solid",borderWidth:"1.5px"}}>
                  <div
                    className="flex flex-col bg-transparent justify-center w-full h-full px-8 py-4 ">
                    <h2 class="mt-4 text-2xl font-thin  text-white capitalize"> About </h2>
                  </div>
             </a>
        </div>
    </div>
  )
}

export default Cards