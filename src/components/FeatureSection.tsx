'use client';
import { useEffect, useState } from "react";
type FeatureType = [string, string, string][];
function FeatureSection() {
  const [Feature, setFeatures] = useState<FeatureType | null>(null);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await fetch("/api/FeatureData");
        if (!response.ok) {
          throw new Error("Failed to fetch feature data");
        }
        const data: FeatureType = await response.json();
        setFeatures(data);
      } catch (error) {
        console.error("Error fetching feature data:", error);
      }
    };

    fetchFeatures();
  }, []);
  
  return (
    <div className="pt-[70px] pb-[70px] bg-white">
      <div className="container">
        <div className="text-center">
          <h2 className="text-[24px] md:text-[36px] font-bold leading-[1.2]">
            Features
          </h2>
        </div>
        <div className="mt-[36px] flex flex-wrap flex-row justify-center">
          {Feature?.map(([img, price, locat], index) => (
            <div
              className="w-full sm:w-[50%] md:w-[33.333%] lg:w-[16.666%] p-[10px] text-center"
              key={index}
            >
              <div className="p-[20px] rounded-[10px] shadow-[0_0_5px_2px_rgb(0_0_0_/5%)]">
                <div>
                  <img
                    src={img}
                    alt=""
                    className="w-[44px] sm:w-[60px] lg:w-[80px] h-[44px] sm:h-[60px] lg:h-[80px] mx-auto"
                  />
                </div>
                <h3 className="font-bold mt-[20px] mb-[5px] mx-0">{price}</h3>
                <p className="text-[14px] text-[#808080]">{locat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
