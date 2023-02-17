import { FC, useState } from 'react';
import SECTORS from '../../../Sector/sectors.const';
import { ChartType } from '../ChartTypeChoice/chart-type.model';
import ChartTypeChoice from '../ChartTypeChoice/ChartTypeChoice/ChartTypeChoice';
import {
  DeltasStripeGroup,
  StripeGroup,
} from '../RiverChart/Stripe/stripe.model';
import EmissionsDeltaSankey from '../Sankey/EmissionsDeltaSankey/EmissionsDeltaSankey';
import './ChartLayout.css';

interface ChartLayoutProps {
  emissions: StripeGroup;
  deltas: DeltasStripeGroup;
  info: string;
}

const ChartLayout: FC<ChartLayoutProps> = ({ emissions, deltas, info }) => {
  const [chartType, setChartType] = useState<ChartType>('categorized');

  const onSelect = (selectedChartType: ChartType): void => {
    setChartType(selectedChartType);
  };

  const total = (rawStripeGroup: StripeGroup | DeltasStripeGroup): number => {
    return rawStripeGroup.stripes.reduce((sum, stripe) => {
      return sum + stripe.value;
    }, 0);
  };

  const summary = (
    rawStripeGroup: StripeGroup | DeltasStripeGroup
  ): StripeGroup | DeltasStripeGroup => {
    const summaryStripe = {
      id: 100,
      value: total(rawStripeGroup),
      sector: SECTORS.TOTAL,
    };

    return {
      ...rawStripeGroup,
      stripes: [summaryStripe],
    };
  };

  const formatForDisplay = <T extends StripeGroup | DeltasStripeGroup>(
    stripes: T
  ): T => (chartType === 'summary' ? (summary(stripes) as T) : stripes);

  const displayEmissions = formatForDisplay<StripeGroup>(emissions);

  const displayDeltas = formatForDisplay<DeltasStripeGroup>(deltas);

  const rangeOfValues = total(emissions);

  return (
    <div className="main">
      <section className="main__info">{info}</section>
      <div className="main__inputs">
        <ChartTypeChoice onSelect={onSelect} chartType={chartType} />
      </div>
      <div className="main__chart-wrapper">
        <EmissionsDeltaSankey />
        {/* <RiverChart
          emissions={displayEmissions}
          deltas={displayDeltas}
          rangeOfValues={rangeOfValues}
        /> */}
      </div>
      <div className="main__aside"> main aside</div>
      <div className="main__footer">main footer</div>
    </div>
  );
};

export default ChartLayout;
