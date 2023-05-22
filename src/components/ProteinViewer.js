import React, { useRef, useMemo } from "react";
import { Stage, Component, Position, Rotation } from "react-ngl";

function ProteinViewer({ pdbId }) {
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

  return (
    <Stage
      
      width="400px"
      height="350px"
      ref={stageRef}
      cameraState={{
        distance: -450,
      }}
      params={"orthographic"}
    >
      <Component
        path={`rcsb://${pdbId}`}
        reprList={reprList}
        ref={componentRef}
        onLoad={handleComponentLoad}
      />
    </Stage>
  );
}

export default ProteinViewer;
