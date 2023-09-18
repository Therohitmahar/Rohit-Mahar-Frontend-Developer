import React, { useEffect } from "react";
import PageTitle from "../Components/PageTitle";
import { useData } from "../Context/Context";

export default function HumanFlights() {
  const { setShowNav } = useData();
  useEffect(() => {
    setShowNav(false);
  }, []);
  return (
    <div>
      <PageTitle
        heading={"HUMAN SPACEFLIGHT"}
        subHeading={"Making life multiplanetary"}
        titleClass={"human"}
      />
    </div>
  );
}
