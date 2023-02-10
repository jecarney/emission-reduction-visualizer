import { FC, PropsWithChildren } from 'react';
import './Stripe.css';

export type StripeType = 'emission' | 'decrease' | 'increase';

interface StripeProps {
  stripeType?: StripeType;
  height: number;
}

const Stripe: FC<PropsWithChildren<StripeProps>> = ({
  children,
  stripeType,
  height,
}) => {
  const emissionStyle = {
    height,
  };

  const deltaStyle = { height };

  return (
    <div
      className={`riverchart__river__stripe ${
        stripeType ? `riverchart__river__stripe--${stripeType}` : ''
      }`}
      style={stripeType === 'emission' ? emissionStyle : deltaStyle}
    >
      {children}
    </div>
  );
};

export default Stripe;
