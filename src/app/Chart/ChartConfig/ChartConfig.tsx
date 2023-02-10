import { FC, useState } from 'react';
import SECTORS from '../../../Sector/sectors.const';
import ChartLayout from '../ChartLayout/ChartLayout';
import {
  DeltasStripeGroup,
  StripeConfig,
  StripeGroup,
} from '../RiverChart/Stripe/stripe.model';
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

  const info = `Deltas are based on `;

  const deltas = (
    baseEmissions: StripeGroup,
    currentEmissions: StripeGroup
  ): DeltasStripeGroup => {
    const deltaStripes: StripeConfig[] = currentEmissions.stripes.reduce<
      StripeConfig[]
    >((deltasWithMatch, current) => {
      const baseEmission = baseEmissions.stripes.find(
        (base) => base.sector.id === current.sector.id
      );
      if (baseEmission) {
        const id = Math.floor(Math.random() * 100);
        const difference = current.value - baseEmission.value;
        const deltaStripe = {
          id,
          sector: current.sector,
          value: difference,
        };
        return [...deltasWithMatch, deltaStripe];
      }
      return deltasWithMatch;
    }, []);

    const delta = {
      stripes: deltaStripes,
      currentYear: currentEmissions.year,
      baseYear: baseEmissions.year,
    };
    return delta;
  };

  const initialDeltas = deltas(baseYearEmissions, currentYearEmissions);

  const [deltasState, setDeltas] = useState(initialDeltas);
  const [currentEmissionsState, setEmissions] = useState(baseYearEmissions);

  return (
    <ChartLayout
      deltas={deltasState}
      info={info}
      emissions={currentEmissionsState}
    />
  );
};

export default ChartConfig;
