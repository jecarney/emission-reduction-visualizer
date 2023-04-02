import { FC } from 'react';
import SECTORS from '../../../Sector/sectors.const';
import {
  ChangeFromBase,
  EmissionChange,
  YearOfEmissions
} from '../../Emissions/emission.model';
import { ReductionAction } from '../../ReductionActions/reduction-action.model';
import ChartLayout from '../ChartLayout/ChartLayout';
import './ChartConfig.css';

const ChartConfig: FC = () => {
  const baseYearEmissions: YearOfEmissions = {
    emissionBySector: [
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

  const currentYearEmissions: YearOfEmissions = {
    emissionBySector: [
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

  const info = `Base year: 2005 (hardcoded), emission change based on year 2020 (hardcoded, needs to be possible to input). All values are in megatonnes`;

  const calculateChange = (
    baseEmissions: YearOfEmissions,
    currentEmissions: YearOfEmissions
  ): ChangeFromBase => {
    const emissionChanges: EmissionChange[] =
      currentEmissions.emissionBySector.reduce<EmissionChange[]>(
        (deltasWithMatch, current) => {
          const baseEmission = baseEmissions.emissionBySector.find(
            (base) => base.sector.id === current.sector.id
          );
          if (baseEmission) {
            const difference = current.value - baseEmission.value;
            const emissionChange: EmissionChange = {
              delta: difference,
              baseEmission,
            };
            return [...deltasWithMatch, emissionChange];
          }
          return deltasWithMatch;
        },
        []
      );

    const changeFromBase = {
      changes: emissionChanges,
      currentYear: currentEmissions.year,
      baseYear: baseEmissions.year,
    };
    return changeFromBase;
  };

  const changes = calculateChange(baseYearEmissions, currentYearEmissions);

  // TODO: the initial study said, "Our results show that such dietary change could reduce annual agricultural production emissions of high-income nations’ diets by 61% while sequestering as much as 98.3 (55.6–143.7) GtCO2 equivalent, equal to approximately 14 years of current global agricultural emissions until natural vegetation matures.". There are a few more ways we could allow the user to get to reductions... could allow including sequestration, could allow reducing by percentage. We could also have a slider for the number of years so we can see how the changes affect carbon emissions over time? for now, I just took calculated the 61% annual reduction, this only handles one year.
  const actions: ReductionAction[] = [
    {
      sector: SECTORS.AGRICULTURE,
      link: 'https://www.nature.com/articles/s43016-021-00431-5',
      annualReduction: 26,
      notes:
        'This is a reduction in agricultural emissions, based on the study linked. The study says that a 61% reduction in agricultural emissions could be achieved by changing diets.',
      name: 'Everyone Goes Vegan',
    },
  ];

  return (
    <ChartLayout
      changeFromBase={changes}
      info={info}
      builtInActions={actions}
    />
  );
};

export default ChartConfig;
