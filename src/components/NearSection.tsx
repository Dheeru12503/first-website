import React, { useEffect, useState } from "react";

type NearbyItem = [string, string];
type ApiResponse = {
  NearBy: NearbyItem[];
  LocationUrl: string;
};

export default function NearSection() {
    const [nearBy, setNearBy] = useState<NearbyItem[]>([]);
    const [locationUrl, setLocationUrl] = useState<string>("");

    useEffect(() => {
      const fetchNearByData = async () => {
        try {
          const response = await fetch("/api/NearSectionData");
          if (!response.ok) {
            throw new Error("Failed to fetch nearby data");
          }
          const data: ApiResponse = await response.json();
          setNearBy(data.NearBy);
          setLocationUrl(data.LocationUrl);
        } catch (error) {
          console.error("Error fetching nearby data:", error);
        }
      };

      fetchNearByData();
    }, []);



  return (
    <div className="pt-[100px] pb-[100px] bg-[#F7F7F7]">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-[24px] md:text-[36px] font-bold leading-[1.2]">
            What's Nearby
          </h2>
        </div>
        <div className="mt-[50px] flex flex-wrap items-center">
          <div className="w-full lg:w-[50%] mb-[20px] lg:mb-0">
            {nearBy.map(([time, location], index) => (
              <div key={index} className="mb-[15px]">
                <div className="flex flex-nowrap items-center">
                  <div className="w-[20%] sm:w-[15%] md:w-[15%] lg:w-[25%] p-[10px] sm:p-[15px] md:p-[20px] text-center bg-[#db6a37] rounded-[5px]">
                    <p className="text-[24px] sm:text-[28px] md:text-[36px] font-medium text-white">
                      {time}
                      <span className="block text-[10px] sm:text-[14px] md:text-[16px] font-light">
                        minutes
                      </span>
                    </p>
                  </div>
                  <div className="w-auto pl-[10px] sm:pl-[15px] md:pl-[20px]">
                    <p className="text-[14px] sm:text-[22px] md:text-[24px] font-bold text-[#1a1a1a]">
                      {location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-[50%]">
            <div className="relative w-full h-0 pb-[75%] sm:pb-[50%] lg:pb-[40%] overflow-hidden rounded-md shadow-lg">
              <div className="map-container">
                <iframe
                  src={locationUrl}
                  width="100%"
                  height="500"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
