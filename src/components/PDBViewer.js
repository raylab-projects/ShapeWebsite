import React, { useRef, useMemo } from "react";
import { Stage, Component, Position, Rotation } from "react-ngl";
import NGL from "react-ngl";
// import {Colormaker} from "ngl/dist/declarations/color/colormaker-registry";
function PDBViewer({ filePath }) {
  const stageRef = useRef(null);
  const componentRef = useRef(null);

  const reprList = useMemo(
    () => [
      {
        type: "cartoon",
        backgroundColor: 'white',
      },
    ],
    []
  );
  // var stage = new Stage( "elementId", { backgroundColor: "white" } );

  const handleComponentLoad = () => {
    if (stageRef.current && componentRef.current) {
      stageRef.current.autoView(componentRef.current.structure.boundingBox);
    }
  };
  console.log(filePath,"filePath");
  return (
    <Stage
      // colorScheme = "bfactor"
      backgroundColor="white"
      width="600px"
      height="450px"
      ref={stageRef}
      cameraState={{
        distance: -150,
      }}
      params={"orthographic"}
      //  backgroundColor= {"white" }
      // backgroundColor="white"
    >
      {filePath &&
      <Component
        
        path={`${filePath}`}
        reprList={reprList}
        ref={componentRef}
        onLoad={handleComponentLoad}
      />}
    </Stage>
  );
}

export default PDBViewer;
