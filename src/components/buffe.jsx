import React from 'react'
// import Card from "@material-tailwind/react"
import Data from './enzyme.json'
import { useEffect, useState } from "react";

// import 'bootstrap/dist/css/bootstrap.min.css'
const Enzymespage = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 20;
  const lastIndex = currentPage*recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex,lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [Array(npage+1).keys].slice(1);
  
  const[data,setData] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterVal, setFilterVal] = useState('');
  useEffect(()=>{
    const fetchData=()=>{
      fetch('my-project\src\components\enzyme.json')
        .then(response => response.json())
        .then(json => {
          setData(json)
          setSearchApiData(json)
        })
    }
    fetchData();
  },[])
  const handleFilter=(e)=>{
    if(e.target.value == ''){
      setData(searchApiData)
    }else{
      const filterResult = searchApiData.filter(item => item.protein.toLowerCase().includes(e.target.value.toLowerCase()))
      setData(filterResult)
    }
    setFilterVal(e.target.value)
  }
  return (
    <div >
      <h1 className = 'text-3xl text-center text-teal-400 font-bold p-2' >Enzymes</h1>
      <div className="container mx-auto mt-20 px-60">
            <div className="flex flex-col">
                <div className="overflow-x-auto">


                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg">
                                              <div className="py-3 pl-2">
                        <div className="relative max-w-xs">
                            <label htmlFor="hs-table-search" className="sr-only">
                                Search
                            </label>
                            <input
                                // type="text"
                                // name="hs-table-search"
                                // id="hs-table-search"
                                className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                placeholder="Search..."
                                value={filterVal}
                                onInput={(e)=>handleFilter(e)}
                            />
  
                        </div>
                    </div>
                           <table className='table  '>
        
                            <thead className="bg-gray-50">
                            <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">serial</th>
                            <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">pdb</th>
                            <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">protein</th>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              {records.map((item) => (
                                <tr>
                                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{item.serial}</td>
                                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{item.pdb}</td>
                                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{item.protein}</td>
                                </tr>
                              )
                              )}
                            </tbody>
                          </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <nav>
        <ul className='pagination'>
          <li className="page-item">
            <a href ='#' className='page-link font-bold' onClick={prePage}>Prev</a>
          </li>
          {
            numbers.map((n,i) => (
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                <a href='#' className='page-link  ' onClick={()=>changeCPage(n)}>{n}</a>
              </li>
            ))
          }
          <li className='page-item'>
            <a href ='#' className='page-link font-bold' onClick={nextPage}>Next</a>
          </li>
        </ul>
      </nav>
    </div>
    // </div>
  
    )

    function prePage(){
      if(currentPage !== 1){
        setCurrentPage(currentPage-1)
      }

    }
    function changeCPage(id){
      setCurrentPage(id)

    }
    function nextPage(){
      if(currentPage !== npage){
        setCurrentPage(currentPage+1)
      }
    }
}

export default Enzymespage