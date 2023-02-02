import { FC, PropsWithChildren } from 'react';
import { StripeConfig, StripeType } from '../../../models/stripe.interface';
import './Stripe.css';

interface StripeProps {
  stripeType?: StripeType;
  stripe: StripeConfig;
}

const Stripe: FC<PropsWithChildren<StripeProps>> = ({
  children,
  stripeType,
  stripe,
}) => {
  return (
    <div
      className={`riverchart__river__stripe ${
        stripeType ? `riverchart__river__stripe--${stripeType}` : ''
      }`}
      style={{
        height: stripe.width,
        background: stripe.color,
      }}
    >
      {children}
    </div>
  );
};

export default Stripe;
