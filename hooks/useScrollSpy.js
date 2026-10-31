// NOTE: No "use client" here — this is a plain hook, not a component.
import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to track which section is currently active based on scroll position.
 * @param {string[]} sectionIds - Array of DOM element IDs to observe.
 * @param {number} offset - Scroll offset threshold in pixels (accounts for fixed navbar height).
 * @returns {string} - Active section ID.
 */
export function useScrollSpy(sectionIds = [], offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0] || "");
  // Store sectionIds in a ref so the effect doesn't re-run on every render
  // (the array is created inline in Navbar so it would be a new reference each render)
  const idsRef = useRef(sectionIds);

  useEffect(() => {
    idsRef.current = sectionIds;
  }, [sectionIds]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const ids = idsRef.current;
      if (!ids.length) return;

      const scrollPosition = window.scrollY + offset;

      // Scan from bottom upward to find the first section whose top is ≤ scroll position
      for (let i = ids.length - 1; i >= 0; i--) {
        const element = document.getElementById(ids[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveId(ids[i]);
          return;
        }
      }

      // Default to first section when scrolled above all sections
      setActiveId(ids[0] || "");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Set the initial active section without waiting for the first scroll event
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]); // offset is a primitive so this is safe

  return activeId;
}
