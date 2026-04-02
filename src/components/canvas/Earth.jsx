import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import useMediaQuery from "../../hooks/useMediaQuery";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 2.15 : 2.5}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTouchDevice = useMediaQuery("(hover: none), (pointer: coarse)");

  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      gl={{ antialias: !isMobile }}
      style={{
        pointerEvents: isTouchDevice ? "none" : "auto",
        touchAction: "pan-y",
      }}
      camera={{
        fov: isMobile ? 50 : 45,
        near: 0.1,
        far: 200,
        position: isMobile ? [-4, 3, 7] : [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          enablePan={false}
          enableRotate={!isTouchDevice}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;

useGLTF.preload("./planet/scene.gltf");
