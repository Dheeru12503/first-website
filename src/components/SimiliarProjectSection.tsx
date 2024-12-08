import React, { useEffect, useState } from "react";

type SimilarProject = [string[], string[], string[]];

export default function SimiliarProjectSection() {
  const [similarProject, setSimilarProject] = useState<SimilarProject | null>(
    null
  );

  useEffect(() => {
    const fetchSimilarProjects = async () => {
      const response = await fetch("/api/SimiliarProjectSectionData");
      const data: SimilarProject = await response.json();
      setSimilarProject(data);
    };
    fetchSimilarProjects();
  }, []);

  if (!similarProject) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-[100px] pb-[50px]">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-[24px] md:text-[36px] font-bold leading-[1.2]">
            Similar Projects
          </h2>
        </div>

        <div className="mt-[36px] flex flex-wrap justify-center gap-[15px]">
          {similarProject[0].map((imgUrl, index) => (
            <div
              className="w-full sm:w-[48%] md:w-[40%] lg:w-[28%] p-[15px]"
              key={index}
            >
              <div className="rounded-[5px] overflow-hidden shadow-[0_0_5px_2px_rgba(0,0,0,0.05)]">
                <a href="#">
                  <img
                    src={imgUrl}
                    alt={`Project ${index + 1}`}
                    loading="lazy"
                    className="w-full h-[300px] object-cover"
                  />
                </a>
                <div className="p-[15px]">
                  <h3 className="text-[18px] font-bold m-0 mb-[15px] text-center">
                    <a href="#">{similarProject[1][index]}</a>
                  </h3>
                  <p className="text-[#808080] leading-[1.5] mb-[20px] text-[12px] text-center">
                    {similarProject[2][index]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
