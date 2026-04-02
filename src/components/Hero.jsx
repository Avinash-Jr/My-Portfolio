import { Suspense, lazy, memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import { styles } from "../styles";
import use3DEnabled from "../hooks/use3DEnabled";

const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const scrollIndicatorAnimation = {
  y: [0, 24, 0],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
  },
};

const heroHighlights = ["React", "Node.js", "TypeScript"];

const HeroVisualFallback = () => (
  <div className="absolute inset-x-0 bottom-32 px-6 sm:px-16">
    <div className="mx-auto flex max-w-7xl justify-center md:justify-end">
      <div className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-white/10 bg-black/30 p-6 backdrop-blur-sm">
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-3xl" />

        <div className="relative">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            Mobile Ready
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            Responsive products that stay fast on smaller screens.
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-secondary">
            This mobile layout uses a lighter visual mode so the portfolio stays
            usable even on browsers with limited WebGL support.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const enable3D = use3DEnabled({ allowMobile: true, allowTouch: true });

  return (
    <header className="relative mx-auto w-full min-h-screen min-h-[100svh] overflow-hidden">
      <div
        className={`absolute inset-0 top-24 mx-auto flex max-w-7xl flex-row items-start gap-4 ${styles.paddingX} sm:top-[120px]`}
      >
        <div
          className="flex flex-col justify-center items-center mt-5"
          aria-hidden="true"
        >
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="max-w-2xl">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m{" "}
            <span className="text-[#915EFF] font-semibold">Avinash</span>
          </h1>

          <p className={`${styles.heroSubText} mt-3 text-white-100 max-w-xl`}>
            I build modern, scalable user interfaces and high-performance web
            applications.
          </p>
        </div>
      </div>

      {enable3D ? (
        <main className="absolute inset-0">
          <Suspense fallback={null}>
            <ComputersCanvas />
          </Suspense>
        </main>
      ) : (
        <HeroVisualFallback />
      )}

      <div className="absolute bottom-8 flex w-full flex-col items-center justify-center gap-6 px-6 xs:bottom-12 sm:bottom-14">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#915EFF] rounded-3xl"
        >
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            {!prefersReducedMotion && (
              <motion.div
                animate={scrollIndicatorAnimation}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            )}
          </div>
        </a>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href="https://www.linkedin.com/in/-Avinashkumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white transition-colors hover:text-cyan-400 sm:text-4xl"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/Avinash-Jr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white transition-colors hover:text-cyan-400 sm:text-4xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/avi09__official/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white transition-colors hover:text-cyan-400 sm:text-4xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <span className="hidden h-6 w-px bg-white/30 sm:block" />

          <a
            href="/Avinash_Kumar_SDE_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,1)] sm:px-5 sm:py-2.5 sm:text-sm"
          >
            View Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default memo(Hero);
