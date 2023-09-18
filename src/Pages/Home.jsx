import React, { useEffect } from "react";
import HeroSection from "../Components/HeroSection";
import { useData } from "../Context/Context";

export default function Home() {
  const { setShowNav } = useData();
  useEffect(() => {
    setShowNav(false);
  }, []);
  return (
    <div>
      <HeroSection />
    </div>
  );
}
