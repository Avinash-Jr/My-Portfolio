import { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import useMediaQuery from "../../hooks/useMediaQuery";

const Stars = ({ count, rotationSpeed, ...props }) => {
  const ref = useRef();
  const sphere = useMemo(
    () => random.inSphere(new Float32Array(count), { radius: 1.2 }),
    [count]
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta * rotationSpeed;
    ref.current.rotation.y -= delta * (rotationSpeed * 0.67);
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)"
  );

  return (
    <div className='absolute inset-0 h-full w-full pointer-events-none'>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={isMobile ? [1, 1.25] : [1, 2]}
        gl={{ antialias: !isMobile }}
      >
        <Suspense fallback={null}>
          <Stars
            count={isMobile ? 2500 : 5000}
            rotationSpeed={prefersReducedMotion ? 0.015 : 0.1}
          />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
