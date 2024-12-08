"use client";
import React, { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

type AmenitiesType = string[];

export default function Amenities() {
  const [Amenities, setAmenities] = useState<AmenitiesType>([]);

  useEffect(() => {
    const Gallery = async () => {
      try {
        const response = await fetch("/api/AmenitiesData");
        if (!response.ok) {
          throw new Error("Failed to fetch feature data");
        }
        const data: AmenitiesType = await response.json();
        setAmenities(data);
      } catch (error) {
        console.error("Error fetching feature data:", error);
      }
    };
    Gallery();
  }, []);
 
  return (
    <div className="pt-[70px] pb-[70px] bg-white">
      <div className="container">
        <div className="text-center">
          <h2 className="text-[24px] md:text-[36px] font-bold leading-[1.2]">
            Amenities
          </h2>
        </div>
        <div className="mt-[30px] md:mt-[50px]">
          <ul className="m-0 p-0 flex flex-wrap">
            {Amenities.map((item) => (
              <li
                className="list-none w-[50%] sm:w-[33.33%] md:w-[25%] lg:w-[20%] py-[10px] md:py-[18px] text-[12px] sm:text-[13px] text-[#808080] flex items-center justify-start"
                key={item}
              >
                <IoMdCheckmark className="text-green-500 mr-2 w-4" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
