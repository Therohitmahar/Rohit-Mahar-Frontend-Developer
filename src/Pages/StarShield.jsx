import React, { useEffect } from "react";
import PageTitle from "../Components/PageTitle";
import { useData } from "../Context/Context";

export default function StarShield() {
  const { setShowNav } = useData();
  useEffect(() => {
    setShowNav(false);
  }, []);
  return (
    <div>
      <PageTitle
        titleClass={"starshield"}
        heading={"starshield"}
        subHeading={"Supporting nation security"}
      />
    </div>
  );
}
