import React, { useEffect } from "react";
import PageTitle from "../Components/PageTitle";
import { useData } from "../Context/Context";

export default function Ships() {
  const { setShowNav } = useData();
  useEffect(() => {
    setShowNav(false);
  }, []);
  return (
    <div>
      <PageTitle
        titleClass={"ships"}
        heading={"Ships"}
        subHeading={"Future of Traveling"}
      />
    </div>
  );
}
