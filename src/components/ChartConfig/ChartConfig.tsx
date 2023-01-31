import React, { FC, Fragment, useState } from 'react';
import ChartLayout from '../ChartLayout/ChartLayout';
import { StripeGroup, StripeType } from '../../models/stripe.interface';
import './ChartConfig.css';

interface ChartConfigProps {}

const ChartConfig: FC<ChartConfigProps> = () => {
  const initialReductions: StripeGroup = {
    stripeType: 'reduction',
    stripes: [
      {
        id: 1,
        color: '#2e3b51',
        width: 10,
        value: 10,
        description: 'oil and gas efficiencies',
      },
      {
        id: 2,
        color: '#495d71',
        width: 20,
        value: 20,
        description: 'increased public transit',
      },
      {
        id: 3,
        color: 'grey',
        width: 30,
        value: 30,
        description: 'regenerative soil practices',
      },
    ],
  };

  const initialEmissions: StripeGroup = {
    stripeType: 'emission',
    stripes: [
      {
        id: 4,
        color: '#2e3b51',
        width: 40,
        value: 40,
        description: 'oil and gas',
      },
      {
        id: 5,
        color: '#495d71',
        width: 60,
        value: 60,
        description: 'transportation',
      },
      {
        id: 6,
        color: 'grey',
        width: 200,
        value: 200,
        description: 'agriculture',
      },
    ],
  };

  const [reductionsState, setReductions] = useState(initialReductions);
  const [emissionsState, setEmissions] = useState(initialEmissions);

  const info =
    'Since 2015 and the signing of the Paris Agreement, ChartConfig adopted 2005 as the base year for its GHG emission reduction target. In 2021, ChartConfig committed to reduce its GHG emissions by 40‑45 percent below 2005 levels by 2030. (https://www.canada.ca/en/environment-climate-change/services/environmental-indicators/greenhouse-gas-emissions.html). 2005 - 741 mt || 2020 - 672 mt || goal (calculated by me, need to check: => * .45 = **333.45** => canada emissions reduction target - 408 mt)';

  const total = (stripeGroup: StripeGroup): number => {
    return stripeGroup.stripes.reduce((totalResult, stripe) => {
      const sum = totalResult + stripe.value;
      return sum;
    }, 0);
  };

  return (
    <ChartLayout
      reductions={{
        stripeGroup: reductionsState,
        total: total(reductionsState),
        percent: (total(reductionsState) / total(emissionsState)) * 100,
      }}
      info={info}
      emissions={{ stripeGroup: emissionsState, total: total(emissionsState) }}
      chartType="summary"
    />
  );
};

export default ChartConfig;
