"use client";
import React, { useEffect, useState } from "react";
import { SignupForm } from "./SignUpForm";

interface HeroSectionType {
  imgUrl: string;
  AddressTitle: string;
  AddressInfo1: string;
  AddressInfo2: string;
}
export default function HeroSection() {
  const [HeroSectionData, setHeroSectionData] = useState<HeroSectionType>({
    imgUrl: "",
    AddressTitle: "",
    AddressInfo1: "",
    AddressInfo2: "",
  });

  useEffect(() => {
    const fetchHeroSectionData = async () => {
      try {
        const response = await fetch("/api/HeroSectionData");
        if (!response.ok) {
          throw new Error("Failed to fetch hero section data");
        }
        const data: HeroSectionType = await response.json();
        setHeroSectionData(data);
      } catch (error) {
        console.error("Error fetching hero section data:", error);
      }
    };

    fetchHeroSectionData();
  }, []);

  return (
    <div
      className="pt-44 pb-24 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: `url(${HeroSectionData.imgUrl})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40 blur-[1px]"></div>
      <div className="container mx-auto px-4">
        <div className="relative flex flex-wrap lg:flex-nowrap items-center">
          <div className="w-full lg:w-[65%] text-white mb-8 lg:mb-0">
            <h1 className="m-0 text-[26px] md:text-[40px] lg:text-[50px] font-bold">
              {HeroSectionData.AddressTitle}
            </h1>
            <p className="text-[11px] md:text-[20px] lg:text-[24px] font-medium">
              {HeroSectionData.AddressInfo1}
            </p>
            <p className="text-[12px] md:text-[16px] lg:text-[18px] font-medium">
              {HeroSectionData.AddressInfo2}
            </p>
          </div>

          <div className="w-full lg:w-[35%]">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
}
