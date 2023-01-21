import React from "react";
import { Breakdown } from "../../models/breakdown.type";
import { StripeGroup } from "../../models/stripe.interface";
import "./RiverChart.css";
import Summary from "./Summary/Summary";

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
        <Summary
          stripeGroup={stripeGroup}
          breakdown={breakdown}
          percent={percent}
          total={total}
        ></Summary>
      </div>
    </div>
  );
};

export default RiverChart;
