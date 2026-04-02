import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import useMediaQuery from "../../hooks/useMediaQuery";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Canvas
      frameloop='demand'
      dpr={isMobile ? [1, 1.25] : [1, 2]}
      gl={{ antialias: !isMobile }}
      style={{ touchAction: "pan-y", pointerEvents: "none" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Ball imgUrl={icon} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
