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
      {percent && `, ${percent}% of emissions covered`}
    </p>
    {stripeGroup.stripes.map((stripe) => (
      <Stripe stripe={stripe} key={stripe.id} />
    ))}
  </>
);

export default Summary;
