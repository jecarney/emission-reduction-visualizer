import React, { FC, useState } from "react";
import { StripeGroup } from "../../models/stripe.interface";
import "./RiverChart.css";

type RiverChartProps = { stripeGroup: StripeGroup };

const RiverChart: React.FC<RiverChartProps> = ({ stripeGroup }) => {
  return (
    <div className="riverchart-wrapper">
      <div className="riverchart__river">
        {stripeGroup.stripes.map((stripe, index) => (
          <div
            className={`riverchart__river__stripe riverchart__river__stripe--${stripeGroup.stripeType}`}
            key={index}
            style={{
              height: stripe.width,
              background: stripe.color,
            }}
          >
            <p>hi am i sideways</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiverChart;
