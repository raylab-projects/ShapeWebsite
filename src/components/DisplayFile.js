import {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls} from "@react-three/drei";
// import { useUpdate } from "react-three-fiber";
function Model({ filePath, ...props }) {
    const gltf = useGLTF(filePath);
    return <primitive object={gltf.scene} {...props} />;
  }
  
  function DisplayFile({ filePath }) {
    return (
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ width: '600px', height: '450px' }}>
        <color attach="background" args={['#07242C']} />
        <PresentationControls speed={1.5} global zoom={0.1} polar={[-0.1, Math.PI / 4]}>
          <Stage environment={''}>
            <Model filePath={filePath} scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    );
  }
export default DisplayFile;

