import React from "react";

export default function SingleCapsule({
  status,
  originalLaunch,
  type,
  flight,
  details,
  landings,
}) {
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
    <div className="single-capsule">
      <img
        src="https://drive.google.com/u/0/uc?id=1qBIMTJ6r8wdeq7lFreLIAYNbUxX6wmAv&export=download"
        alt="CapsuleBg"
      />
      <div className="capsule-data">
        <span>status: {status}</span>
        <span>Total Flights: {flight}</span>
        <span>Total Landings: {landings}</span>
        <button className="secondary-btn">Know More</button>
      </div>
    </div>
  );
}
