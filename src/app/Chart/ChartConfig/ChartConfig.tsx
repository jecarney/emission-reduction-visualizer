import { FC, useState } from 'react';
import {
  ChangeFromBase,
  EmissionBySector,
  YearOfEmissions,
} from '../../Emissions/emission.model';
import calculateChange from '../../Emissions/emissions.helpers';
import {
  baseYearEmissionsData,
  mostCurrentEmissionsData,
} from '../../Emissions/emissionsData.const';
import builtinReductionActions from '../../ReductionActions/builtinReductionActionsData.const';
import { ReductionAction } from '../../ReductionActions/reduction-action.model';
import ChartLayout from '../ChartLayout/ChartLayout';
import './ChartConfig.css';

const ChartConfig: FC = () => {
  const [realEmissionsChartData, setRealEmissionsChartData] =
    useState<ChangeFromBase>(
      calculateChange(baseYearEmissionsData, mostCurrentEmissionsData)
    );

  const [possibleEmissionsChartData, setPossibleEmissionsChartData] =
    useState<ChangeFromBase | null>(null);

  const [activeChartType, setActiveChartType] = useState<
    'currentReality' | 'possible'
  >('currentReality');

  const [selectedActions, setSelectedActions] = useState<ReductionAction[]>([]);

  const info = `Base year: 2005 (hardcoded), emission change based on year 2020 (hardcoded, needs to be possible to input). All values are in megatonnes. Include a statement saying that if users select actions with reductions based on a  year as close to the currentYear emissions (in the hardcoded example, based on 2020) and the country as possible, the results should be more accurate. Also need to explain that the purpose of the chart is to allow users to visualize actions described in various articles and studies for their own visualization purposes, can't vouch for accuracy of any built-in actions.`;

  const updatePossibilities = (reductionActions: ReductionAction[]): void => {
    const changeYearNames = [
      'Some Sunny Day',
      'A Bright future',
      'Happily Ever After',
      'A New Dawn',
      'A Better Tomorrow',
      'Endless Possibilities',
      'The Golden Age',
    ];
    const changeYearName =
      changeYearNames[Math.floor(Math.random() * changeYearNames.length)];

    const possibleEmissionsBySector: EmissionBySector[] = [
      ...mostCurrentEmissionsData.emissionBySector,
    ].map((emission) => {
      const action = reductionActions.find(
        (selectedAction) => selectedAction.sector.id === emission.sector.id
      );
      return {
        ...emission,
        value: action
          ? emission.value - action.annualReduction
          : emission.value,
      };
    });

    const possibleYearOfEmissions: YearOfEmissions = {
      emissionBySector: possibleEmissionsBySector,
      name: changeYearName,
    };

    const possibleChartData = calculateChange(
      baseYearEmissionsData,
      possibleYearOfEmissions
    );
    setPossibleEmissionsChartData(possibleChartData);
    setActiveChartType('possible');
  };

  const updateActions = (selected: ReductionAction[]): void => {
    setSelectedActions(selected);
    updatePossibilities(selected);
  };

  return (
    <ChartLayout
      changeFromBase={
        activeChartType === 'possible' && possibleEmissionsChartData
          ? possibleEmissionsChartData
          : realEmissionsChartData
      }
      info={info}
      builtInActions={builtinReductionActions}
      selectedActions={selectedActions}
      onSelectedActionsChange={updateActions}
    />
  );
};

export default ChartConfig;
