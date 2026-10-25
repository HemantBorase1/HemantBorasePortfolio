// NOTE: No "use client" here — this is a plain hook, not a component.
import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to track real-time mouse pointer coordinates.
 * @returns {{ x: number, y: number, isPointerInside: boolean }}
 */
export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  // Use a ref so the mousemove handler always reads the latest value
  // without being recreated (avoids stale closure and dependency array size changes)
  const isPointerInsideRef = useRef(false);
  const [isPointerInside, setIsPointerInside] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      if (!isPointerInsideRef.current) {
        isPointerInsideRef.current = true;
        setIsPointerInside(true);
      }
    };

    const handleMouseLeave = () => {
      isPointerInsideRef.current = false;
      setIsPointerInside(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []); // empty deps — handlers reference stable refs, not state

  return { ...mousePosition, isPointerInside };
}
