"use client";
import SectionFirst from "@/components/SectionFirst";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import FloatingActionButton from "@/components/FloatingActionButton";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   fetch("/api/navData")
  //     .then((res) => {
  //       console.log("-- apia respon se ----");

  //       console.log(res.status);
  //       console.log(res.statusText);
  //       res.json().then((data) => {
  //         console.log(data, "data");
  //       });
  //     })
  //     .catch((ce) => {
  //       console.log(ce);
  //     });
  // }, []);

  return (
    <>
      <SectionFirst />
      <ScrollToTopButton />
      <FloatingActionButton />
    </>
  );
}
