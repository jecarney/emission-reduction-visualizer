import { FC, useState } from 'react';
import { ChartType } from '../ChartTypeChoice/chart-type.model';
import ChartTypeChoice from '../ChartTypeChoice/ChartTypeChoice/ChartTypeChoice';
import RiverChart from '../RiverChart/RiverChart';
import { StripeGroup } from '../RiverChart/Stripe/stripe.model';
import SECTORS from '../Sector/sectors.const';
import './ChartLayout.css';

interface ChartLayoutProps {
  emissions: StripeGroup;
  reductions: StripeGroup;
  info: string;
}

const ChartLayout: FC<ChartLayoutProps> = ({ emissions, reductions, info }) => {
  const [chartType, setChartType] = useState<ChartType>('categorized');

  const onSelect = (selectedChartType: ChartType): void => {
    setChartType(selectedChartType);
  };

  const summary = (rawStripeGroup: StripeGroup): StripeGroup => {
    const total = rawStripeGroup.stripes.reduce((sum, stripe) => {
      return sum + stripe.value;
    }, 0);

    const summaryStripe = {
      id: 100,
      value: total,
      sector: SECTORS.TOTAL,
    };

    return {
      ...rawStripeGroup,
      stripes: [summaryStripe],
    };
  };

  const emissionsSummary = summary(emissions);

  const reductionSummary = summary(reductions);

  // const [size, setSize] = <DOMRectReadOnly></DOMRectReadOnly>useState();

  // useResizeObserver(target, (entry) => {
  //   // setSize(entry.contentRect);
  //   console.log('entry', entry);
  // });

  return (
    <div className="main">
      <section className="main__info">{info}</section>
      <div className="main__inputs">
        <ChartTypeChoice onSelect={onSelect} chartType={chartType} />
      </div>
      <div className="main__chart-wrapper">
        {chartType === 'summary' && (
          <RiverChart
            emissions={emissionsSummary}
            reductions={reductionSummary}
          />
        )}

        {chartType === 'categorized' && (
          <RiverChart emissions={emissions} reductions={reductions} />
        )}
      </div>
      <div className="main__aside"> main aside</div>
      <div className="main__footer">main footer</div>
    </div>
  );
};

export default ChartLayout;
