import { useState, useEffect } from "react";

export const useVisualSlider = (imageCount, interval = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageCount <= 0) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageCount);
    }, interval);

    return () => clearInterval(timer);
  }, [imageCount, interval]);

  return { currentIndex, setCurrentIndex };
};