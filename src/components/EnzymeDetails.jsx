import React, { useEffect } from "react";
import ProteinViewer from "./ProteinViewer";
import DisplayOBJ from "./DisplayOBJ";
import { startTransition } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import PDBViewer from "./PDBViewer";
import DisplayFile from "./DisplayFile";
import BoxplotViewer from "./BoxplotViewer";
import enz_boxplot from '../assets/enz_boxplot.svg';
const EnzymeDetails = ({ enzyme, onBack }) => {
  const handleBackClick = () => {
    onBack();
  };
// const  filePath="/new_output_1ABE.glb";
// const filePath="src\components\new_output_1ABE.obj";
//outline outline-offset-2 outline-cyan-800 hover:outline-cyan-400
//<ProteinViewer pdbId={enzyme.pdb} />
//enz_boxplot
// const path = "src\components\1ABE-inner_surface_pdb.pdb";
// PDBpath=""
  return (
    <div>
      <h3 className="text-[#e0e0e0] font-semibold">PDB ID: {enzyme.pdb}</h3>
      <h4 className="text-[#e0e0e0] font-semibold">Protein: {enzyme.protein}</h4>
      <div className='min-h-screen '
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   width: "500px",
        // }}
      >
        <div className="flex mx-auto p-10 ">
          <ul className="grid place-items-center lg:grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-1 sm:grid-cols-1 ">
          <li className="hover:cursor-grab flex align-top"><DisplayFile filePath="/assets/new_output_1ABE.glb"/></li>
            {/* <li><div className="text-white font-mono" style={{height: '70px',width: '400px', display: "flex", alignItems: "center"}}></div></li> */}
            {/* <li className="outline outline-offset-2  hover:outline-[#e0e0e0] hover:cursor-grab"><ProteinViewer pdbId={enzyme.pdb} /></li> */}
            {/* <li><div style={{height: '350px',width: '400px', display: "flex", alignItems: "center"}}>text here</div></li> */}
            <li className="">
              <div style={{width:'600px',height:'450px'}} className="flex bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-600 text-[#e0e0e0] hover:cursor-grab row-start-3 col-span-3">
                <div class="tooltip">
                  <div className="py-3 px-3">
                  <h1 className="font-bold text-lg drop-shadow-xl shadow-lime-300">Single Chained</h1>
                  <p className="font-semibold">Quartile 1 = 48
                    Quartile 2 = 107
                    Median = 133
                    Quartile 3 = 147
                    Quartile 4 = 153</p>
                    <h2 className="font-bold text-lg">Poly Chained</h2>
                    <p className="font-semibold">
                      Quartile 1 = 274
                      Quartile 2 = 314
                      Median = 332
                      Quartile 3 = 347
                      Quartile 4 = 357
                      </p></div>
                  <img src={enz_boxplot} alt="SVG as an image"/>
                  <span class="tooltiptext"><h1 class="font-bold underline">PDB ID: {enzyme.pdb}</h1><p className="text-left px-2">Value: {enzyme.crosses}</p><p>Type: {enzyme.type} chain</p></span>
                </div>
              </div>
            </li>
            <li className=" hover:cursor-grab"><PDBViewer filePath="/1ABE-inner_surface_pdb.pdb" /></li>
            <li><button className="hover:font-bold relative top-40 left-60 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleBackClick}>
        Go Back
      </button></li>
          </ul>
    
        </div>

      </div>


    </div>
  );
};

export default EnzymeDetails;
