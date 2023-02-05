import { FC, useState } from 'react';
import ChartLayout from '../ChartLayout/ChartLayout';
import {
  ReductionsStripeGroup,
  StripeConfig,
  StripeGroup,
} from '../RiverChart/Stripe/stripe.model';
import SECTORS from '../Sector/sectors.const';
import './ChartConfig.css';

const ChartConfig: FC = () => {
  const baseYearEmissions: StripeGroup = {
    stripes: [
      { id: 1, value: 171, sector: SECTORS.OIL_AND_GAS },
      { id: 2, value: 160, sector: SECTORS.TRANSPORT },
      { id: 2, value: 84, sector: SECTORS.BUILDINGS },
      { id: 3, value: 118, sector: SECTORS.ELECTRICITY },
      { id: 4, value: 87, sector: SECTORS.HEAVY_INDUSTRY },
      { id: 5, value: 66, sector: SECTORS.AGRICULTURE },
      { id: 6, value: 55, sector: SECTORS.WASTE_AND_OTHERS },
    ],
    year: 2005,
  };

  const currentYearEmissions: StripeGroup = {
    stripes: [
      { id: 7, value: 179, sector: SECTORS.OIL_AND_GAS },
      { id: 8, value: 160, sector: SECTORS.TRANSPORT },
      { id: 9, value: 88, sector: SECTORS.BUILDINGS },
      { id: 10, value: 56, sector: SECTORS.ELECTRICITY },
      { id: 11, value: 72, sector: SECTORS.HEAVY_INDUSTRY },
      { id: 12, value: 69, sector: SECTORS.AGRICULTURE },
      { id: 13, value: 50, sector: SECTORS.WASTE_AND_OTHERS },
    ],
    year: 2020,
  };

  const info = `Reductions are based on `;

  const reductions = (
    baseEmissions: StripeGroup,
    currentEmissions: StripeGroup
  ): ReductionsStripeGroup => {
    const reductionStripes: StripeConfig[] = currentEmissions.stripes.reduce<
      StripeConfig[]
    >((reductionsWithMatch, current) => {
      const baseEmission = baseEmissions.stripes.find(
        (base) => base.sector.id === current.sector.id
      );
      if (baseEmission) {
        const id = Math.floor(Math.random() * 100);
        const difference = baseEmission.value - current.value;
        const reductionStripe = {
          id,
          sector: current.sector,
          value: difference,
        };
        return [...reductionsWithMatch, reductionStripe];
      }
      return reductionsWithMatch;
    }, []);

    const reduction = {
      stripes: reductionStripes,
      currentYear: currentEmissions.year,
      baseYear: baseEmissions.year,
    };
    return reduction;
  };

  const initialReductions = reductions(baseYearEmissions, currentYearEmissions);

  const [reductionsState, setReductions] = useState(initialReductions);
  const [currentEmissionsState, setEmissions] = useState(currentYearEmissions);

  return (
    <ChartLayout
      reductions={reductionsState}
      info={info}
      emissions={currentEmissionsState}
    />
  );
};

export default ChartConfig;
