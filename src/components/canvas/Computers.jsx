import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import useMediaQuery from "../../hooks/useMediaQuery";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTouchDevice = useMediaQuery("(hover: none), (pointer: coarse)");
  const cameraSettings = isMobile
    ? {
        position: [14, 3, 6],
        fov: 30,
      }
    : {
        position: [20, 3, 5],
        fov: 25,
      };

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      camera={cameraSettings}
      gl={{ antialias: !isMobile }}
      style={{
        pointerEvents: isTouchDevice ? "none" : "auto",
        touchAction: "pan-y",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={!isTouchDevice}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;

useGLTF.preload("./desktop_pc/scene.gltf");
