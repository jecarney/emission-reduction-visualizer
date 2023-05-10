import { FC, useState } from 'react';
import {
  ChangeFromBase,
  EmissionBySector,
  EmissionsDataType,
  YearOfEmissions,
} from '../../Emissions/emission.model';
import calculateChange from '../../Emissions/emissions.helpers';
import {
  baseYearEmissionsData,
  mostCurrentEmissionsData,
} from '../../Emissions/emissionsData.const';
import { ReductionAction } from '../../ReductionActions/reduction-action.model';
import reductionActions from '../../ReductionActions/reductionActionsData.const';
import ChartLayout from '../ChartLayout/ChartLayout';
import './ChartConfig.css';

const ChartConfig: FC = () => {
  const [realEmissionsChartData, setRealEmissionsChartData] =
    useState<ChangeFromBase>(
      calculateChange(baseYearEmissionsData, mostCurrentEmissionsData)
    );

  const [possibleEmissionsChartData, setPossibleEmissionsChartData] =
    useState<ChangeFromBase | null>(null);

  const [activeChartType, setActiveChartType] =
    useState<EmissionsDataType>('currentReality');

  const info = `Base year: 2005 (hardcoded), emission change based on year 2020 (hardcoded, needs to be possible to input). All values are in megatonnes. Include a statement saying that if users select actions with reductions based on a  year as close to the currentYear emissions (in the hardcoded example, based on 2020) and the country as possible, the results should be more accurate. Also need to explain that the purpose of the chart is to allow users to visualize actions described in various articles and studies for their own visualization purposes, can't vouch for accuracy of any built-in actions.`;

  const updatePossibilities = (selectedActions: ReductionAction[]): void => {
    setActiveChartType(selectedActions.length ? 'possible' : 'currentReality');

    const possibleEmissionsBySector: EmissionBySector[] = [
      ...mostCurrentEmissionsData.emissionBySector,
    ].map((emission) => {
      const reductions = selectedActions.filter(
        (selectedAction) => selectedAction.sector.id === emission.sector.id
      );

      const reductionsTotal = reductions.reduce((total, reduction) => {
        return total + reduction.annualReduction;
      }, 0);

      return {
        ...emission,
        value: emission.value - reductionsTotal,
      };
    });

    const possibleYearOfEmissions: YearOfEmissions = {
      emissionBySector: possibleEmissionsBySector,
      type: 'possible',
    };

    const possibleChartData = calculateChange(
      baseYearEmissionsData,
      possibleYearOfEmissions
    );
    setPossibleEmissionsChartData(possibleChartData);
  };

  return (
    <ChartLayout
      changeFromBase={
        activeChartType === 'possible' && possibleEmissionsChartData
          ? possibleEmissionsChartData
          : realEmissionsChartData
      }
      info={info}
      builtinActions={reductionActions}
      onSelectedActionsChange={updatePossibilities}
    />
  );
};

export default ChartConfig;
