"use client";

import { useState, useEffect } from "react";

/**
 * Animated typewriter text effect that cycles through an array of titles.
 */
export default function TypingText({
  words = ["Full Stack Developer", "Next.js Specialist", "UI/UX Craftsman", "Freelance Consultant"],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1800,
  className = "",
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = words[currentWordIndex % words.length];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing characters
          setCurrentText(fullWord.substring(0, currentText.length + 1));
          if (currentText.length + 1 === fullWord.length) {
            // Finished typing word, pause before deleting
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          // Deleting characters
          setCurrentText(fullWord.substring(0, currentText.length - 1));
          if (currentText.length - 1 === 0) {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{currentText}</span>
      <span className="ml-1 inline-block w-[3px] h-[1.1em] bg-indigo-500 animate-pulse" aria-hidden="true" />
    </span>
  );
}
