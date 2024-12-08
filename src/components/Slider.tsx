"use client";
import { useState, useEffect } from "react";

type GalleryType = string[];

const Slider = () => {
  const [images, setImages] = useState<GalleryType>([]);

  useEffect(() => {
    const Gallery = async () => {
      try {
        const response = await fetch("/api/GallerSectionData");
        if (!response.ok) {
          throw new Error("Failed to fetch feature data");
        }
        const data: GalleryType = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching feature data:", error);
      }
    };
    Gallery();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goToNext = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!transitioning) return;
    const timer = setTimeout(() => {
      setTransitioning(false);
    }, 500); // Match the transition duration
    return () => clearTimeout(timer);
  }, [transitioning]);

  return (
    <div className="relative w-full mx-auto">
      {/* Image with sliding transition */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
      >
        &lt;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
      >
        &gt;
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
