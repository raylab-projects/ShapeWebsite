import React, { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function DisplayOBJ({ filePath }) {
  const { scene } = useThree();
  const gltfLoader = useRef(new GLTFLoader()).current;
  const objRef = useRef();

  useEffect(() => {
    gltfLoader.load(filePath, (gltf) => {
      const obj = gltf.scene;
      const previousScene = scene.clone();
      scene.remove(...scene.children);
      scene.add(obj);
      objRef.current = obj;
      return () => {
        scene.remove(obj);
        scene.add(...previousScene.children);
      };
    });
  }, [filePath, gltfLoader, scene]);

  useFrame(() => {
    if (objRef.current) {
      // Perform updates within the render loop here
    }
  });

  return null;
}

export default DisplayOBJ;
