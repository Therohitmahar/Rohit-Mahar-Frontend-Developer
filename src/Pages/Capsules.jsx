import React, { useEffect, useState } from "react";
import SingleCapsule from "../Components/SingleCapsule";

export default function Capsules() {
  const [capsuleData, setCapsuleData] = useState([]);
  async function fetchData() {
    const data = await fetch("https://api.spacexdata.com/v3/capsules");
    const jsonData = await data.json();
    setCapsuleData(jsonData);
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(capsuleData);
  const data = {
    capsule_serial: "C101",
    capsule_id: "dragon1",
    status: "retired",
    original_launch: "2010-12-08T15:43:00.000Z",
    original_launch_unix: 1291822980,
    missions: [
      {
        name: "COTS 1",
        flight: 7,
      },
    ],
    landings: 1,
    type: "Dragon 1.0",
    details: "Reentered after three weeks in orbit",
    reuse_count: 0,
  };
  return (
    <div className="capsules">
      {capsuleData &&
        capsuleData
          .slice(0, 1)
          .map((item) => (
            <SingleCapsule
              status={item.status}
              flight={item.missions.flight}
              landings={item.landings}
            />
          ))}
    </div>
  );
}
