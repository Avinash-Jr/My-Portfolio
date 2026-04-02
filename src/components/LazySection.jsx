import { Suspense, useEffect, useRef, useState } from "react";

import { styles } from "../styles";

const LazySection = ({
  component: Component,
  idName = "",
  minHeight = "min-h-[320px]",
  rootMargin = "500px 0px",
}) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (shouldLoad) {
      return undefined;
    }

    if (typeof window === "undefined") {
      setShouldLoad(true);
      return undefined;
    }

    if (idName && window.location.hash === `#${idName}`) {
      setShouldLoad(true);
      return undefined;
    }

    if (typeof window.IntersectionObserver !== "function") {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      observer.disconnect();
    };
  }, [idName, rootMargin, shouldLoad]);

  const fallback = (
    <div
      ref={sectionRef}
      className={`${styles.padding} ${minHeight} relative z-0 mx-auto max-w-7xl`}
      aria-hidden="true"
    >
      {idName ? (
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
      ) : null}

      <div className='animate-pulse rounded-[24px] border border-white/5 bg-white/[0.02] p-6 sm:p-8'>
        <div className='h-4 w-32 rounded-full bg-white/10' />
        <div className='mt-4 h-10 w-56 rounded-full bg-white/10' />
        <div className='mt-8 space-y-4'>
          <div className='h-4 w-full rounded-full bg-white/10' />
          <div className='h-4 w-5/6 rounded-full bg-white/10' />
          <div className='h-4 w-2/3 rounded-full bg-white/10' />
        </div>
      </div>
    </div>
  );

  if (!shouldLoad) {
    return fallback;
  }

  return <Suspense fallback={fallback}>{Component ? <Component /> : null}</Suspense>;
};

export default LazySection;
