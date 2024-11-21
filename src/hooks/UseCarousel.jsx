// /hooks/useCarousel.js
import { useState, useEffect } from 'react';

export const useCarousel = (images) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return {
    currentImageIndex,
    nextImage,
    prevImage,
    goToImage,
    totalImages: images.length,
  };
};
