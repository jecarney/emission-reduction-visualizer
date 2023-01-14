import React from "react";
import { Breakdown } from "../../models/breakdown.type";
import { StripeGroup } from "../../models/stripe.interface";
import "./RiverChart.css";

type RiverChartProps = {
  stripeGroup: StripeGroup;
  breakdown: Breakdown;
  total?: number;
  percent?: number;
};

const RiverChart: React.FC<RiverChartProps> = ({
  stripeGroup,
  breakdown,
  percent,
  total,
}) => {
  return (
    <div className="riverchart-wrapper">
      <div className="riverchart__river">
        {breakdown === "percent" && (
          <p>
            total: {total} megatonnes
            {stripeGroup.stripeType === "reduction" &&
              `, ${percent}% of emissions covered`}
          </p>
        )}
        {stripeGroup.stripes.map((stripe, index) => (
          <div
            className={`riverchart__river__stripe riverchart__river__stripe--${stripeGroup.stripeType}`}
            key={index}
            style={{
              height: stripe.width,
              background: stripe.color,
            }}
          >
            {breakdown === "categorized" && (
              <p>
                {stripe.description} {stripe.value} megatonnes
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiverChart;
