import React, { useRef, useMemo } from "react";
import { Stage, Component, Position, Rotation } from "react-ngl";

function PDBViewer({ filePath }) {
  const stageRef = useRef(null);
  const componentRef = useRef(null);

  const reprList = useMemo(
    () => [
      {
        type: "cartoon",
      },
    ],
    []
  );

  const handleComponentLoad = () => {
    if (stageRef.current && componentRef.current) {
      stageRef.current.autoView(componentRef.current.structure.boundingBox);
    }
  };
  console.log(filePath,"filePath");
  return (
    <Stage
      
      width="400px"
      height="350px"
      ref={stageRef}
      cameraState={{
        distance: -150,
      }}
      params={"orthographic"}
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
