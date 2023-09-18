import { CroissantIcon, CrossIcon, LucideCross, X } from "lucide-react";
import React from "react";
import { useData } from "../Context/Context";

export default function SingleData({ setShowModal }) {
  const {
    modalData: {
      status,
      originalLaunch,
      type,
      flight,
      capsule_serial,
      details,
      landings,
    },
  } = useData();
  return (
    <div className="single-capsule">
      <div className="capsule-data">
        <X onClick={() => setShowModal(false)} />
        <h2>More info</h2>
        <span>
          capsule serial:<span> {capsule_serial}</span>
        </span>
        <span>
          status: <span>{status}</span>
        </span>
        <span>
          original Launch: <span>{originalLaunch}</span>
        </span>
        <span>
          Type: <span>{type}</span>
        </span>
        <span>
          Total Flights: <span>{flight}</span>
        </span>
        <span>
          Total Landings: <span>{landings}</span>
        </span>
        <span>
          Details: <span>{details}</span>
        </span>
      </div>
    </div>
  );
}
