import React, { Suspense, lazy } from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import use3DEnabled from "../hooks/use3DEnabled";

const BallCanvas = lazy(() => import("./canvas/Ball"));

const TechnologyCard = ({ technology }) => (
  <div className='flex h-28 w-28 flex-col items-center justify-center rounded-2xl border border-white/10 bg-tertiary/80 p-4 backdrop-blur-sm'>
    <img
      src={technology.icon}
      alt={technology.name}
      className='h-12 w-12 object-contain'
    />
    <p className='mt-3 text-center text-xs font-medium text-white-100'>
      {technology.name}
    </p>
  </div>
);

const Tech = () => {
  const enable3D = use3DEnabled();

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {enable3D ? (
            <Suspense fallback={<TechnologyCard technology={technology} />}>
              <BallCanvas icon={technology.icon} />
            </Suspense>
          ) : (
            <TechnologyCard technology={technology} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
