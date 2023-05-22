import React, { useState } from "react";
import EnzymeDetails from "./EnzymeDetails";
import Data from "./enzyme.json";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Enzymespage = () => {
  //   const handleBackClick = () => {
  //   onBack();
  // };
  const [nav, setNav] =useState(false)
  const handleNav = () => (
      setNav(!nav)
  )
  const [selectedProtein, setSelectedProtein] = useState(null);

  const handleProteinClick = (protein) => {
    console.log("Selected Protein", protein);
    setSelectedProtein(protein);
  };

  const handleBackClick = () => {
    setSelectedProtein(null);
  };

  return (
    <div className="font-thin bg-[#e0e0e0]">
          <div className='bg-[#455A64] flex justify-between items-center h-15 max-w-full mx-auto px-4 text-white'>
          <a href='http://localhost:3000/' className='hover:cursor-pointer'><h1 className='w-full text-2xl font-light mx-10 tracking-widest'>CICLOP</h1></a>
            <ul className=' font-thin hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Functions</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
                
            </div>
            <div className={!nav ? 'md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#e0e0e0] ease-in-out duration-500' : 'fixed left-[-100%]' }>
            <a href='http://localhost:3000/'><h1 className='w-full text-3xl font-thin text-[#455A64] m-4'>CICLOP.</h1></a>

                <ul className='text-[#455A64] font-thin uppercase p-4'> 
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4 border-b border-gray-600'>Functions</li>
                </ul>
            </div>
    </div>
      <button className="text-[#455A64] flex justify-left text-3xl  p-10 " onClick={handleBackClick}>
        Enzymes
      </button>
    <div className="flex justify-center mx-10 ">
      {selectedProtein ? (
        <EnzymeDetails enzyme={selectedProtein} onBack={handleBackClick} />
      ) : (
        <table className="table bg-gray-600 w-full">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
              >
                serial
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
              >
                pdb
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
              >
                protein
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {Data.map((item) => (
              <tr
                key={item.serial}
                onClick={() => handleProteinClick(item)}
                style={{ cursor: "pointer" }}
              >
                <td className="px-6 py-4 text-sm text-gray-100 whitespace-nowrap">
                  {item.serial}
                </td>
                <td className="px-6 py-4 text-sm text-gray-100 whitespace-nowrap">
                  {item.pdb}
                </td>
                <td className="px-6 py-4 text-sm text-gray-100 whitespace-nowrap">
                  {item.protein}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
};

export default Enzymespage;
