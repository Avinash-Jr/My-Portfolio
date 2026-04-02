import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen min-h-[100svh] overflow-x-hidden bg-primary">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <StarsCanvas />
        </div>

        <div className="relative z-10">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>

          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact />
        </div>

      </div>
    </BrowserRouter>
  );
};

export default App;
