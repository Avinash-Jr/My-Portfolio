import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";

import Hero from "./components/Hero";
import LazySection from "./components/LazySection";
import Navbar from "./components/Navbar";
import use3DEnabled from "./hooks/use3DEnabled";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));

const App = () => {
  const enable3D = use3DEnabled();

  return (
    <BrowserRouter>
      <div className="relative min-h-screen min-h-[100svh] overflow-x-hidden bg-primary">
        {enable3D && (
          <div className="fixed inset-0 z-0 pointer-events-none">
            <Suspense fallback={null}>
              <StarsCanvas />
            </Suspense>
          </div>
        )}

        <div className="relative z-10">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>

          <LazySection component={About} idName='about' minHeight='min-h-[520px]' />
          <LazySection
            component={Experience}
            idName='work'
            minHeight='min-h-[680px]'
          />
          <LazySection component={Tech} minHeight='min-h-[260px]' />
          <LazySection component={Works} minHeight='min-h-[760px]' />
          <LazySection component={Feedbacks} minHeight='min-h-[520px]' />
          <LazySection
            component={Contact}
            idName='contact'
            minHeight='min-h-[760px]'
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
