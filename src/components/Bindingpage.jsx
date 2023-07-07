import React, { useEffect, useState } from "react";
import BindingDetails from "./BindingDetails";
import Data from "./binding.json";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Form from 'react-bootstrap/Form'
import {RiArrowUpDownFill} from 'react-icons/ri'
// import Container from 'react-bootstrap/Container'
import axios from "axios";
import { current } from "@reduxjs/toolkit";
// const base_url = process.env.REACT_APP_API_URL;
const Bindingpage = () => {
  //   const handleBackClick = () => {
  //   onBack();
  // };
  const[currentPage,setCurrentPage] = useState(1);
  const recordsPerPage = 18;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex,lastIndex);
  const npage = Math.ceil(Data.length/recordsPerPage);

  const numbers = [...Array(npage+1).keys()].slice(1)

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
    <div className="overflow-auto font-thin bg-gradient-to-br from-cyan-800 via-emerald-600 to-lime-400 h-screen">
    <div className='bg-black font-mono flex justify-between items-center h-20 max-w-full mx-auto px-4 text-white'>
        <a href='http://localhost:3000/' className='hover:cursor-pointer'><h1 className='w-full text-2xl mx-10 tracking-widest'>Title Here</h1></a>
        <ul className=' font-thin hidden md:flex'>
            <li className='p-4'><a href='http://localhost:3000/' className='hover:cursor-pointer'>Home</a></li>
            <li className='p-4'>About</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/> }
            
        </div>  
        <div className={!nav ? 'fixed left-[-100%]' : 'md:hidden sm:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-cyan-700  ease-in-out duration-500'  }>
            <a href='http://localhost:3000/'><h1 className='w-full text-3xl font-mono text-[#e0e0e0] m-4'>Title Here.</h1></a>

            <ul className='text-[#e0e0e0] font-mono uppercase p-4'> 
                <li className='p-4 border-b border-gray-600'><a href='http://localhost:3000/' className='hover:cursor-pointer'>Home</a></li>
                <li className='p-4 border-b border-gray-600'>About</li>
            </ul>
        </div>
    </div>
      <button className="text-[#e0e0e0] flex  text-3xl  p-10 font-mono" onClick={handleBackClick}>
        Binding
      </button>
    <div className="flex justify-left mx-10 ">
      {selectedProtein ? (
        <BindingDetails binding={selectedProtein} onBack={handleBackClick} />
      ) : (
        <div className="w-full h-full">
          <Form >
            <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder=' Search'/>
          </Form>
         
        <table className="mt-3 bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-600 w-full table-fixed text-ellipsis overflow-hidden">
          <thead className="bg-gray-50">
            <tr className="text-clip tracking-widest">
              
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
            {records
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
        <nav className="flex justify-center">
          <ul className="pagination text-white font-bold inline-flex -space-x-px py-3">
            <li className="page-item">
              <a href='#' className="page-link px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={prePage}>Prev</a>
            </li>
            {
              numbers.map((n,i) => (
                <li key={i} className={`page-item ${currentPage === n ? 'active' : ''}`}>
                  <a href='#' className="page-link px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={()=>changeCPage(n)} >{n}</a>
                  </li>

              ))
            }
            <li className="page-item">
              <a href='#' className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={nextPage}>Next</a>
            </li>
          </ul>
        </nav>
        </div>
      )}
    </div>
    </div>
  );

  function prePage() {
    if(currentPage!==1){
      setCurrentPage(currentPage - 1)
    }
  }
  function nextPage() { 
    if(currentPage !== npage){
      setCurrentPage(currentPage + 1)
    }
  }
  function changeCPage(number) {
    setCurrentPage(number)
  } 
};

export default Bindingpage;
