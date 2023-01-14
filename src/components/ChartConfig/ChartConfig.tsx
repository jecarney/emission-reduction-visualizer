import React, { FC, Fragment } from "react";
import ChartLayout from "../ChartLayout/ChartLayout";
import { StripeGroup, StripeType } from "../../models/stripe.interface";
import "./ChartConfig.css";

interface ChartConfigProps {}

const ChartConfig: FC<ChartConfigProps> = () => {
  const reductions: StripeGroup = {
    stripeType: "reduction",
    stripes: [
      { color: "#2e3b51", width: 10 },
      { color: "#495d71", width: 20 },
      { color: "grey", width: 30 },
    ],
  };

  const emissions: StripeGroup = {
    stripeType: "emission",
    stripes: [
      { color: "#2e3b51", width: 40 },
      { color: "#495d71", width: 60 },
      { color: "grey", width: 200 },
    ],
  };

  const info =
    "Since 2015 and the signing of the Paris Agreement, ChartConfig adopted 2005 as the base year for its GHG emission reduction target. In 2021, ChartConfig committed to reduce its GHG emissions by 40‑45 percent below 2005 levels by 2030. (https://www.canada.ca/en/environment-climate-change/services/environmental-indicators/greenhouse-gas-emissions.html). 2005 - 741 mt || 2020 - 672 mt || goal (calculated by me, need to check: => * .45 = **333.45** => canada emissions reduction target - 408 mt)";
  return (
    <Fragment>
      <ChartLayout reductions={reductions} info={info} emissions={emissions} />
    </Fragment>
  );
};

export default ChartConfig;
