import React, { FC, Fragment } from "react";
import styles from "./Summary.module.css";
import { Breakdown } from "../../../models/breakdown.type";
import { StripeGroup } from "../../../models/stripe.interface";
import Stripe from "../Stripe/Stripe";

interface SummaryProps {
  breakdown: Breakdown;
  stripeGroup: StripeGroup;
  total?: number;
  percent?: number;
}

const Summary: FC<SummaryProps> = ({
  breakdown,
  total,
  stripeGroup,
  percent,
}) => (
  <Fragment>
    {breakdown === "percent" && (
      <p>
        total: {total} megatonnes
        {stripeGroup.stripeType === "reduction" &&
          `, ${percent}% of emissions covered`}
      </p>
    )}
    {stripeGroup.stripes.map((stripe, index) => (
      <Stripe stripe={stripe} stripeType={stripeGroup.stripeType} key={index}>
        {breakdown === "categorized" && (
          <p>
            {stripe.description} {stripe.value} megatonnes
          </p>
        )}
      </Stripe>
    ))}
  </Fragment>
);

export default Summary;
