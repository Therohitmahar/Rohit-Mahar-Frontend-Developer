import { ChevronDown } from "lucide-react";
import React from "react";

export default function PageTitle({ heading, subHeading, titleClass }) {
  return (
    <>
      <section className={`page-title ${titleClass}`}>
        <h1>{heading}</h1>
        <h3>{subHeading}</h3>
        <ChevronDown size={44} strokeWidth={1} />{" "}
      </section>
    </>
  );
}
