import React, { useEffect, useState } from "react";
type EnquirePropertyType = string[];

export default function EnquirePropertySection() {

  const [EnquirePropertSection, setEnquirePropertSection] = useState<EnquirePropertyType>([]);

  useEffect(() => {
    const Gallery = async () => {
      try {
        const response = await fetch("/api/EnquirePropertySectionData");
        if (!response.ok) {
          throw new Error("Failed to fetch feature data");
        }
        const data: EnquirePropertyType = await response.json();
        setEnquirePropertSection(data);
      } catch (error) {
        console.error("Error fetching feature data:", error);
      }
    };
    Gallery();
  }, []);


  return (
    <div className="pt-[100px] pb-[50px]">
      <div className="container">
        <div className="text-center">
          <h2 className="text-[24px] md:text-[36px] font-bold leading-[1.2]">
            Enquire More About Property
          </h2>
        </div>

        <div className="mt-[36px] flex flex-wrap justify-center">
          <div className="m-0 p-0 flex flex-wrap justify-center">
            {EnquirePropertSection.map((item, index) => (
              <a
                key={index}
                className="p-[20px] sm:p-[20px_30px] w-auto sm:w-[45%] md:w-[35%] lg:w-[35%] text-[12px] md:text-[14px] list-none bg-[#0052b7] text-white rounded-[5px] m-[10px] text-center font-bold cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
