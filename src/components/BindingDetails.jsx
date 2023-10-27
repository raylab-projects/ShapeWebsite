import React, { useEffect } from "react";
import ProteinViewer from "./ProteinViewer";
import DisplayOBJ from "./DisplayOBJ";
import { startTransition } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import PDBViewer from "./PDBViewer";
import DisplayFile from "./DisplayFile";
import BoxplotViewer from "./BoxplotViewer";
import bind_boxplot from '../assets/bind_boxplot.svg';
const BindingDetails = ({ binding, onBack }) => {
  const handleBackClick = () => {
    onBack();
  };
// const  filePath="/new_output_1ABE.glb";
// const filePath="src\components\new_output_1ABE.obj";
//outline outline-offset-2 outline-cyan-800 hover:outline-cyan-400
//<ProteinViewer pdbId={Binding.pdb} />
//bind_boxplot
// const path = "src\components\1ABE-inner_surface_pdb.pdb";
// PDBpath=""
  return (
    <div>
      <h3 className="text-[#e0e0e0] font-semibold">PDB ID: {binding.pdb}</h3>
      <h4 className="text-[#e0e0e0] font-semibold">Protein: {binding.protein}</h4>
      <div className='min-h-screen '
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center", {`/assets/final_pdbs/${binding.pdb}.pdb`}
        //   width: "500px",
        // }}
      >
        <div className="flex mx-auto p-10 ">
          <ul className="grid place-items-center lg:grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-1 sm:grid-cols-1 ">
          <li className="hover:cursor-grab flex align-top"><DisplayFile filePath={`/assets/reached_glb/new_output_${binding.pdb}.glb`}/></li>
            <li className="">
              <div style={{width:'600px',height:'450px'}} className="flex bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-600 text-[#e0e0e0] hover:cursor-grab row-start-3 col-span-3">
                <div class="tooltip">
                  <div className="py-3 px-3">
                  <h1 className="font-bold text-lg drop-shadow-xl shadow-lime-300">Single Chained</h1>
                  <p className="font-semibold">
                    Quartile 1 = 45
                    Quartile 2 = 61
                    Median = 69
                    Quartile 3 = 72
                    Quartile 4 = 75</p>
                    <h2 className="font-bold text-lg">Poly Chained</h2>
                    <p className="font-semibold">Quartile 1 = 82
                      Quartile 2 = 121
                      Median = 135
                      Quartile 3 = 147
                      Quartile 4 = 150
                      </p></div>
                  <img src={bind_boxplot} alt="SVG as an image"/>
                  <span class="tooltiptext"><h1 class="font-bold underline">PDB ID: {binding.pdb}</h1><p className="text-left px-2">Value: {binding.crosses}</p><p>Type: {binding.type} chain</p></span>
                </div>
              </div>
            </li>
            <li className=" hover:cursor-grab"><PDBViewer filePath={`/assets/final_pdbs/${binding.pdb}.pdb`} /></li>
            <li><button className="hover:font-bold relative top-40 left-60 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleBackClick}>
        Go Back
      </button></li>
          </ul>
    
        </div>

      </div>


    </div>
  );
};

export default BindingDetails;
