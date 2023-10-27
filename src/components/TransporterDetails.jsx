import React, { useEffect } from "react";
import ProteinViewer from "./ProteinViewer";
import DisplayOBJ from "./DisplayOBJ";
import { startTransition } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import PDBViewer from "./PDBViewer";
import DisplayFile from "./DisplayFile";
import BoxplotViewer from "./BoxplotViewer";
import trans_boxplot from '../assets/trans_boxplot.svg';
const TransporterDetails = ({ transporter, onBack }) => {
  const handleBackClick = () => {
    onBack();
  };
// const  filePath="/new_output_1ABE.glb";
// const filePath="src\components\new_output_1ABE.obj";
//outline outline-offset-2 outline-cyan-800 hover:outline-cyan-400
//<ProteinViewer pdbId={transportere.pdb} />
//enz_boxplot
// const path = "src\components\1ABE-inner_surface_pdb.pdb";
// PDBpath=""
  return (
    <div>
      <h3 className="text-[#e0e0e0] font-semibold">PDB ID: {transporter.pdb}</h3>
      <h4 className="text-[#e0e0e0] font-semibold">Protein: {transporter.protein}</h4>
      <div className='min-h-screen '
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center", {`/assets/final_pdbs/${transporter.pdb}.pdb`}
        //   width: "500px",
        // }}
      >
        <div className="flex mx-auto p-10 ">
          <ul className="grid place-items-center lg:grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-1 sm:grid-cols-1 ">
          <li className="hover:cursor-grab flex align-top"><DisplayFile filePath={`/assets/reached_glb/new_output_${transporter.pdb}.glb`}/></li>
            <li className="">
              <div style={{width:'600px',height:'450px'}} className="flex bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-600 text-[#e0e0e0] hover:cursor-grab row-start-3 col-span-3">
                <div class="tooltip">
                  <div className="py-3 px-3">
                  <h1 className="font-bold text-lg drop-shadow-xl shadow-lime-300">Single Chained</h1>
                  <p className="font-semibold">Quartile 1 = 71
                    Quartile 2 = 118.5
                    Median = 143
                    Quartile 3 = 151
                    Quartile 4 = 158</p>
                    <h2 className="font-bold text-lg">Poly Chained</h2>
                    <p className="font-semibold">
                      Quartile 1 = 292
                      Quartile 2 = 306
                      Median = 313
                      Quartile 3 = 316
                      Quartile 4 = 327
                      </p></div>
                  <img src={trans_boxplot} alt="SVG as an image"/>
                  <span class="tooltiptext"><h1 class="font-bold underline">PDB ID: {transporter.pdb}</h1><p className="text-left px-2">Value: {transporter.crosses}</p><p>Type: {transporter.type} chain</p></span>
                </div>
              </div>
            </li>
            <li className=" hover:cursor-grab"><PDBViewer filePath={`/assets/final_pdbs/${transporter.pdb}.pdb`} /></li>
            <li><button className="hover:font-bold relative top-40 left-60 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleBackClick}>
        Go Back
      </button></li>
          </ul>
    
        </div>

      </div>


    </div>
  );
};

export default TransporterDetails;
