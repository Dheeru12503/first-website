import React, { useEffect, useState } from "react";

type paymentPlansItem = [string, string];
type ApiResponse = {
  paymentPlans: paymentPlansItem[];
  LocationUrl: string;
};
export default function paymentPlans() {
  const [paymentPlans, setpaymentPlans] = useState<paymentPlansItem[]>([]);
  const [locationUrl, setLocationUrl] = useState<string>("");

  useEffect(() => {
    const fetchpaymentPlansData = async () => {
      try {
        const response = await fetch("/api/PaymentSectionData");
        if (!response.ok) {
          throw new Error("Failed to fetch paymentPlans data");
        }
        const data: ApiResponse = await response.json();
        setpaymentPlans(data.paymentPlans);
        setLocationUrl(data.LocationUrl);
      } catch (error) {
        console.error("Error fetching paymentPlans data:", error);
      }
    };

    fetchpaymentPlansData();
  }, []);

  return (
    <div
      className="pt-[90px] pb-[90px] bg-cover bg-fixed relative"
      style={{
        backgroundImage: `url(${locationUrl})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 blur-[1px]"></div>

      <div className="container relative z-10">
        <div className="text-center">
          <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-bold leading-[1.2] text-white">
            Payment Plans
          </h2>
        </div>

        <div className="mt-[30px] sm:mt-[50px]">
          <ul className="m-0 p-0 flex flex-wrap justify-center">
            {paymentPlans.map((item, index) => (
              <li
                key={index}
                className="p-[20px] sm:p-[20px_30px] w-full sm:w-[30%] lg:w-[30%] text-[12px] md:text-[14px] list-none bg-[#0052b7] text-white rounded-[5px] m-[10px] text-center font-bold"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
