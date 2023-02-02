import { FC } from 'react';
import { StripeGroup } from '../../../models/stripe.interface';
import Stripe from '../Stripe/Stripe';

interface CategorizedProps {
  emissions: StripeGroup;
  reductions: StripeGroup;
}

const Categorized: FC<CategorizedProps> = ({ emissions, reductions }) => {
  const merged = emissions.stripes.map((emission) => {
    const reductionMatch = reductions.stripes.find(
      (reduction) => reduction.id === emission.id
    );
    return { emission, reduction: reductionMatch };
  });

  return (
    <>
      {merged.map((stripePair) => {
        const { emission, reduction } = stripePair;
        return (
          <Stripe stripe={emission} stripeType="background" key={emission.id}>
            {!reduction && (
              <p>
                {emission.description} {emission.value} megatonnes
              </p>
            )}
            {reduction && (
              <Stripe
                stripe={reduction}
                stripeType="foreground"
                key={reduction.id}
              >
                <p>
                  {reduction.description} {reduction.value} megatonnes
                </p>
              </Stripe>
            )}
          </Stripe>
        );
      })}
    </>
  );
};

export default Categorized;
