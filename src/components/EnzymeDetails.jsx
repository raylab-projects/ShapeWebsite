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
      
      <div>

      </div>
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
          <ul className="grid place-items-center lg:grid-cols-3 gap-x-6 gap-y-8 md:grid-cols-1 sm:grid-cols-1 ">

            <li className="outline outline-offset-2  hover:outline-[#e0e0e0] hover:cursor-grab"><ProteinViewer pdbId={enzyme.pdb} /></li>
            <li className="outline outline-offset-2  hover:outline-[#e0e0e0] hover:cursor-grab"><DisplayFile filePath="/assets/new_output_1ABE.glb"/></li>
            <li className="outline outline-offset-2 hover:outline-[#e0e0e0] hover:cursor-grab"><PDBViewer filePath="/1ABE-inner_surface_pdb.pdb" /></li>
            <li><div style={{height: '70px',width: '400px', display: "flex", alignItems: "center"}}>text here</div></li>
            <li><div style={{height: '70px',width: '400px', display: "flex", alignItems: "center"}}>text here</div></li>
            
            
            <li><div style={{height: '70px',width: '400px', display: "flex", alignItems: "center"}}>text here</div></li>
            {/* <li><div style={{height: '350px',width: '400px', display: "flex", alignItems: "center"}}>text here</div></li> */}
            <li className="outline outline-offset-2  hover: bg-white hover:cursor-grab row-start-3 col-span-3"><div ><img src={enz_boxplot} alt="SVG as an image"/></div></li>

          </ul>

        </div>

      </div>

      <button className="text-[#e0e0e0] font-normal hover:font-bold p-10" onClick={handleBackClick}>
        Back to Enzymes
      </button>
    </div>
  );
};

export default EnzymeDetails;
