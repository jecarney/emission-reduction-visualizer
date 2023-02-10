import { FC } from 'react';
import useElementSize from '../../../helpers/useElementSize';
import './RiverChart.css';
import Stripe from './Stripe/Stripe';
import { DeltasStripeGroup, StripeGroup } from './Stripe/stripe.model';

interface RiverChartProps {
  emissions: StripeGroup;
  deltas: DeltasStripeGroup;
  rangeOfValues: number;
}

const RiverChart: FC<RiverChartProps> = ({
  emissions,
  deltas,
  rangeOfValues,
}) => {
  const [boxRef, { height }] = useElementSize();

  const scaleToWrapper = (value: number): number => {
    const percent = value / rangeOfValues;
    const result = Math.abs(Math.round(percent * height));
    return result;
  };

  const stripePairs = emissions.stripes
    .map((emission) => {
      const deltaMatch = deltas.stripes.find(
        (delta) => delta.sector === emission.sector
      );

      const delta = { ...deltaMatch };
      return { emission, delta };
    })
    .sort((a, b) => a.emission.value - b.emission.value);

  return (
    <div className="riverchart-wrapper" ref={boxRef}>
      <div className="riverchart__river">
        {height > 0 &&
          stripePairs.map((stripePair) => {
            const { emission, delta } = stripePair;
            const stripeType = delta.value! > 0 ? 'increase' : 'decrease';
            return (
              <Stripe
                stripeType="emission"
                key={emission.id}
                height={scaleToWrapper(stripePair.emission.value)}
              >
                <p className="riverchart__river__stripe-pair-info">
                  {emission.sector.name} emissions: {emission.value} mt{' '}
                  {stripeType}: {delta.value} mt
                </p>
                {delta && delta.value! !== 0 && (
                  <Stripe
                    stripeType={stripeType}
                    key={delta.id}
                    height={scaleToWrapper(stripePair.delta.value!)}
                  />
                )}
              </Stripe>
            );
          })}
      </div>
    </div>
  );
};

export default RiverChart;
