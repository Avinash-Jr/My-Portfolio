import { useState } from "react";

import useMediaQuery from "./useMediaQuery";

const detectWebGLSupport = () => {
  if (
    typeof window === "undefined" ||
    typeof document === "undefined" ||
    typeof window.WebGLRenderingContext === "undefined"
  ) {
    return false;
  }

  try {
    const canvas = document.createElement("canvas");
    const context =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    return Boolean(context);
  } catch {
    return false;
  }
};

const use3DEnabled = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTouchDevice = useMediaQuery("(hover: none), (pointer: coarse)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [hasWebGL] = useState(() => detectWebGLSupport());

  return hasWebGL && !isMobile && !isTouchDevice && !prefersReducedMotion;
};

export default use3DEnabled;
