import React from 'react';
// import PDBView from 'react-pdb-view';

function PDBViewer({ path }) {
  return (
    <div className='text-3xl'>
      PDBFile here
    </div>
    // <PDBView
    //   url={path}
    //   atomIncrement={0}
    //   width="60vw"
    //   height="60vh"
    //   atomSize={200}
    //   cameraDistance={100}
    //   autoRotate={false}
    // />
  );
}

export default PDBViewer;
