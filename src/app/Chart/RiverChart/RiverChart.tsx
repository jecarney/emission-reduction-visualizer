import { FC } from 'react';
import './RiverChart.css';
import Stripe from './Stripe/Stripe';
import { StripeGroup } from './Stripe/stripe.model';

interface RiverChartProps {
  emissions: StripeGroup;
  reductions: StripeGroup;
}

const RiverChart: FC<RiverChartProps> = ({ emissions, reductions }) => {
  const merged = emissions.stripes.map((emission) => {
    const reductionMatch = reductions.stripes.find(
      (reduction) => reduction.sector === emission.sector
    );
    return { emission, reduction: reductionMatch };
  });

  return (
    <div className="riverchart-wrapper">
      <div className="riverchart__river">
        {merged.map((stripePair) => {
          const { emission, reduction } = stripePair;
          return (
            <Stripe
              stripe={emission}
              stripeType="emission"
              key={emission.id}
              colour={emission.sector.emissionColour}
            >
              {!reduction && (
                <p>
                  {emission.sector.name} {emission.value} megatonnes
                </p>
              )}
              {reduction && (
                <Stripe
                  stripe={reduction}
                  stripeType="reduction"
                  key={reduction.id}
                  colour={emission.sector.reductionColour}
                >
                  <p>
                    {reduction.sector.name} {reduction.value} megatonnes
                  </p>
                </Stripe>
              )}
            </Stripe>
          );
        })}
      </div>
    </div>
  );
};

export default RiverChart;
