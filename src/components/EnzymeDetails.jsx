import React, { useEffect } from "react";
import ProteinViewer from "./ProteinViewer";
const EnzymeDetails = ({ enzyme, onBack }) => {
  const handleBackClick = () => {
    onBack();
  };
//outline outline-offset-2 outline-cyan-800 hover:outline-cyan-400
//<ProteinViewer pdbId={enzyme.pdb} />

  return (
    <div>
      
      <div>

      </div>
      <h3 className="text-[#455A64] font-semibold">PDB ID: {enzyme.pdb}</h3>
      <h4 className="text-[#455A64] font-semibold">Protein: {enzyme.protein}</h4>
      <div className='min-h-screen '
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   width: "500px",
        // }}
      >
        <div className="flex mx-auto p-10 ">
          <ul className="grid place-items-center lg:grid-cols-3 gap-x-8 gap-y-8 md:grid-cols-1 sm:grid-cols-1 ">

            <li className="outline outline-offset-2 outline-[#e0e0e0] hover:outline-[#455A64] hover:cursor-grab"><ProteinViewer pdbId={enzyme.pdb} /></li>
            <li className="outline outline-offset-2 outline-[#e0e0e0] hover:outline-[#455A64] hover:cursor-grab"><ProteinViewer pdbId={enzyme.pdb} /></li>
            <li className="outline outline-offset-2 outline-[#e0e0e0] hover:outline-[#455A64] hover:cursor-grab"><ProteinViewer pdbId={enzyme.pdb} /></li>
            <li className="outline outline-offset-2 outline-[#e0e0e0] hover:outline-[#455A64] hover:cursor-grab"><ProteinViewer pdbId={enzyme.pdb} /></li>


          </ul>

        </div>

      </div>

      <button className="text-[#455A64] font-normal hover:font-bold p-10" onClick={handleBackClick}>
        Back to Enzymes
      </button>
    </div>
  );
};

export default EnzymeDetails;
