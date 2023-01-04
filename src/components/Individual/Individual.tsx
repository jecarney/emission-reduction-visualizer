import React, { FC } from "react";
import "./Individual.css";

type StripeConfig = {
  color: string;
  width: number;
};

type IndividualProps = {
  stripes: StripeConfig[];
};

const Individual: React.FC<IndividualProps> = ({ stripes }) => {
  return (
    <div className="graphic-wrapper">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          transform: "rotate(45deg)",
          width: "100%",
          height: "100%",
          border: "2px dotted white",
        }}
      >
        {stripes.map((stripe, index) => (
          <div
            key={index}
            style={{
              height: stripe.width,
              background: stripe.color,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Individual;
