import { ChevronDown } from "lucide-react";
import React from "react";

export default function PageTitle({ heading, subHeading, titleClass }) {
  return (
    <>
      <section className={`page-title ${titleClass}`}>
        <h1 data-aos="fade-up" data-aos-duration="3000">
          {heading}
        </h1>
        <h3 data-aos="fade-up" data-aos-duration="2000">
          {subHeading}
        </h3>
        <ChevronDown size={48} strokeWidth={1} />{" "}
      </section>
    </>
  );
}
