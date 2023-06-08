import React, { useState } from "react";
import EnzymeDetails from "./EnzymeDetails";
import Data from "./enzyme.json";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Form from 'react-bootstrap/Form'
import {RiArrowUpDownFill} from 'react-icons/ri'
// import Container from 'react-bootstrap/Container'
// import axios from "axios";
// const base_url = process.env.REACT_APP_API_URL;
const Enzymespage = () => {
  //   const handleBackClick = () => {
  //   onBack();
  // };
  const [data, setdata] = useState(Data);
  const [order,setorder] = useState('ASC')
  const sorting = (col) => {
    if (order === "ASC"){
      const sorted = Data.sort((a,b) => a[col]?.toLowerCase() > b[col]?.toLowerCase() ? 1 : -1);
      setdata(sorted);
      setorder("DESC");
    }
    if (order === "DESC"){
      const sorted = Data.sort((a,b) => a[col]?.toLowerCase() < b[col]?.toLowerCase() ? 1 : -1);
      setdata(sorted);
      setorder("ASC");
    }
  }
  const sortnum = (col) => {
    if (order === "ASC"){
      const sorted = Data.sort((a,b) => a[col] > b[col] ? 1 : -1);
      setdata(sorted);
      setorder("DESC");
    }
    if (order === "DESC"){
      const sorted = Data.sort((a,b) => a[col] < b[col] ? 1 : -1);
      setdata(sorted);
      setorder("ASC");
    }
  }

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
  // console.log(Data);
  const[search, setSearch] = useState('')
  console.log(search)
  return (
    <div className="overflow-auto font-thin bg-gradient-to-br from-[#07242C] to-[#157d9a] h-screen">
          <div className='bg-[#07242C] flex justify-between items-center h-15 max-w-full mx-auto px-4 text-white'>
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
      <button className="text-[#e0e0e0] flex  text-3xl  p-10 " onClick={handleBackClick}>
        Enzymes
      </button>
    <div className="flex justify-left mx-10 ">
      {selectedProtein ? (
        <EnzymeDetails enzyme={selectedProtein} onBack={handleBackClick} />
      ) : (
        <div className="w-full h-full">
          <Form >
            <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder=' Search'/>
          </Form>
         
        <table className="mt-3 table bg-[#07242C] w-full">
          <thead className="bg-gray-50">
            <tr className="text-clip">
              
              <th
                onClick={()=>sortnum("serial")}
                scope="col"
                className="flex cursor-pointer px-6 py-3 text-xs font-bold text-left text-[#07242C] uppercase "
              >Serial<RiArrowUpDownFill className="ml-5" size={14}/></th>
              <th
                onClick={()=>sortnum("serial")}
                scope="col"
                className=" cursor-pointer px-6 py-3 text-xs font-bold text-left text-[#07242C] uppercase "
              >
                <div className="flex">pdb<RiArrowUpDownFill className="ml-5" size={14}/></div>
              </th>
              <th
                onClick={()=>sorting("protein")}
                scope="col"
                className="flex cursor-pointer px-6 py-3 text-xs font-bold text-left text-[#07242C] uppercase "
              >
                protein  <RiArrowUpDownFill className="ml-5" size={14}/>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {Data
            .filter((item)=>{
              return search.toLowerCase() === '' ? item : item.pdb?.toLowerCase().includes(search)
              ||
               item.protein?.toLowerCase().includes(search)
            })
            .map((item) => (
              <tr
                
                key={item.serial}
                onClick={() => handleProteinClick(item)}
                style={{ cursor: "pointer" }}
              >
                <td className="px-10 py-4 text-sm text-gray-100 whitespace-nowrap">
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
        </div>
      )}
    </div>
    </div>
  );
};

export default Enzymespage;
