import React, { FC } from "react";
import { StripeType, Stripe } from "../../../models/stripe.interface";
import "./Stripe.css";

interface StripeProps {
  children: React.ReactNode | React.ReactNode[];
  stripeType: StripeType;
  stripe: Stripe;
}

const Stripe: FC<StripeProps> = ({ children, stripeType, stripe }) => (
  <div
    className={`riverchart__river__stripe riverchart__river__stripe--${stripeType}`}
    style={{
      height: stripe.width,
      background: stripe.color,
    }}
  >
    {children}
  </div>
);

export default Stripe;
