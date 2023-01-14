import { FC } from "react";
import { Breakdown } from "../../models/breakdown.type";
import { StripeGroup } from "../../models/stripe.interface";
import RiverChart from "../RiverChart/RiverChart";
import "./ChartLayout.css";

interface ChartLayoutProps {
  emissions: { stripeGroup: StripeGroup; total: number };
  reductions: { stripeGroup: StripeGroup; total: number; percent: number };
  info: string;
  breakdown: Breakdown;
}

const ChartLayout: FC<ChartLayoutProps> = ({
  emissions,
  reductions,
  info,
  breakdown,
}) => {
  return (
    <div className="main">
      <section className="main__info">{info}</section>
      <div className="main__inputs"></div>
      <div className="main__chart-wrapper">
        <RiverChart
          stripeGroup={emissions.stripeGroup}
          breakdown={breakdown}
          total={emissions.total}
        />
        <RiverChart
          stripeGroup={reductions.stripeGroup}
          breakdown={breakdown}
          total={reductions.total}
          percent={reductions.percent}
        />
      </div>
      <div className="main__aside"></div>
      <div className="main__footer"></div>
    </div>
  );
};

export default ChartLayout;
