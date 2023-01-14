import { FC } from "react";
import { StripeGroup } from "../../models/stripe.interface";
import RiverChart from "../RiverChart/RiverChart";
import "./ChartLayout.css";

interface ChartLayoutProps {
  emissions: StripeGroup;
  reductions: StripeGroup;
  info: string;
}

const ChartLayout: FC<ChartLayoutProps> = ({ emissions, reductions, info }) => {
  return (
    <div className="main">
      <section className="main__info">{info}</section>
      <div className="main__inputs"></div>
      <div className="main__chart-wrapper">
        <RiverChart stripeGroup={emissions} />
        <RiverChart stripeGroup={reductions} />
      </div>
      <div className="main__aside"></div>
      <div className="main__footer"></div>
    </div>
  );
};

export default ChartLayout;
