import React from 'react'
import Slider from './Slider';

export default function GallerySection() {
  return (
    <div className="pt-[70px] pb-[70px] bg-[#F7F7F7]">
      <div className="container">
        <div className="text-center">
          <h2 className="text-[24px] md:text-[36px] font-bold leading-[1.2]">
            Image Gallery
          </h2>
        </div>
        <div className=" mt-[50px]">
          <Slider />
        </div>
      </div>
    </div>
  );
}
