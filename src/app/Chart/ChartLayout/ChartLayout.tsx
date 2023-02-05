import { FC, useState } from 'react';
import SECTORS from '../../../Sector/sectors.const';
import { ChartType } from '../ChartTypeChoice/chart-type.model';
import ChartTypeChoice from '../ChartTypeChoice/ChartTypeChoice/ChartTypeChoice';
import RiverChart from '../RiverChart/RiverChart';
import {
  ReductionsStripeGroup,
  StripeGroup,
} from '../RiverChart/Stripe/stripe.model';
import './ChartLayout.css';

interface ChartLayoutProps {
  emissions: StripeGroup;
  reductions: ReductionsStripeGroup;
  info: string;
}

const ChartLayout: FC<ChartLayoutProps> = ({ emissions, reductions, info }) => {
  const [chartType, setChartType] = useState<ChartType>('categorized');

  const onSelect = (selectedChartType: ChartType): void => {
    setChartType(selectedChartType);
  };

  const summary = (
    rawStripeGroup: StripeGroup | ReductionsStripeGroup
  ): StripeGroup | ReductionsStripeGroup => {
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

  const formatForDisplay = <T extends StripeGroup | ReductionsStripeGroup>(
    stripes: T
  ): T => (chartType === 'summary' ? (summary(stripes) as T) : stripes);

  const displayEmissions = formatForDisplay<StripeGroup>(emissions);

  const displayReductions = formatForDisplay<ReductionsStripeGroup>(reductions);

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
        <RiverChart
          emissions={displayEmissions}
          reductions={displayReductions}
        />
      </div>
      <div className="main__aside"> main aside</div>
      <div className="main__footer">main footer</div>
    </div>
  );
};

export default ChartLayout;
