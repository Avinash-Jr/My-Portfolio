import { useEffect, useState } from "react";

const canUseMatchMedia = () =>
  typeof window !== "undefined" && typeof window.matchMedia === "function";

const subscribeToMediaQuery = (mediaQuery, listener) => {
  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", listener);

    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }

  mediaQuery.addListener(listener);

  return () => {
    mediaQuery.removeListener(listener);
  };
};

const useMediaQuery = (query, defaultValue = false) => {
  const [matches, setMatches] = useState(() => {
    if (!canUseMatchMedia()) {
      return defaultValue;
    }

    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (!canUseMatchMedia()) {
      return undefined;
    }

    const mediaQuery = window.matchMedia(query);
    const handleChange = (event) => setMatches(event.matches);

    setMatches(mediaQuery.matches);

    return subscribeToMediaQuery(mediaQuery, handleChange);
  }, [query]);

  return matches;
};

export default useMediaQuery;
