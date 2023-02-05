import { FC, PropsWithChildren } from 'react';
import './Stripe.css';
import { StripeConfig } from './stripe.model';

export type StripeType = 'emission' | 'reduction';

interface StripeProps {
  stripeType?: StripeType;
  stripe: StripeConfig;
  colour: string;
}

const Stripe: FC<PropsWithChildren<StripeProps>> = ({
  children,
  stripeType,
  stripe,
  colour,
}) => {
  return (
    <div
      className={`riverchart__river__stripe ${
        stripeType ? `riverchart__river__stripe--${stripeType}` : ''
      }`}
      style={{
        height: stripe.value,
        background: colour,
      }}
    >
      {children}
    </div>
  );
};

export default Stripe;
