import React, { FC, Fragment } from 'react';
import { ChartType } from '../../../models/chart-type.type';
import { StripeGroup } from '../../../models/stripe.interface';
import Stripe from '../Stripe/Stripe';

interface SummaryProps {
  chartType: ChartType;
  stripeGroup: StripeGroup;
  total?: number;
  percent?: number;
}

const Summary: FC<SummaryProps> = ({
  chartType,
  total,
  stripeGroup,
  percent,
}) => (
  <>
    {chartType === 'summary' && (
      <p>
        total: {total} megatonnes
        {stripeGroup.stripeType === 'reduction' &&
          percent &&
          `, ${percent}% of emissions covered`}
      </p>
    )}
    {stripeGroup.stripes.map((stripe, index) => (
      <Stripe
        stripe={stripe}
        stripeType={stripeGroup.stripeType}
        key={stripe.id}
      >
        {chartType === 'categorized' && (
          <p>
            {stripe.description} {stripe.value} megatonnes
          </p>
        )}
      </Stripe>
    ))}
  </>
);

export default Summary;
