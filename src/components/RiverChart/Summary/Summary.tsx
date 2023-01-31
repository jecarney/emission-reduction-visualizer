import { FC } from 'react';
import { StripeGroup } from '../../../models/stripe.interface';
import Stripe from '../Stripe/Stripe';

interface SummaryProps {
  stripeGroup: StripeGroup;
  total?: number;
  percent?: number;
}

const Summary: FC<SummaryProps> = ({ total, stripeGroup, percent }) => (
  <>
    <p>
      total: {total} megatonnes
      {stripeGroup.stripeType === 'reduction' &&
        percent &&
        `, ${percent}% of emissions covered`}
    </p>
    {stripeGroup.stripes.map((stripe) => (
      <Stripe
        stripe={stripe}
        stripeType={stripeGroup.stripeType}
        key={stripe.id}
      />
    ))}
  </>
);

export default Summary;
