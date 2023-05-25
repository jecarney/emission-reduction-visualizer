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

  const info = `Visualize how carbon reduction actions can help Canada reach its emissions reduction target of 40% below 2005 levels by 2030. The chart shows base year emissions by sector on the left side and 2020 emissions levels by sector on the right side. Press the ‘Take Action’ button to see how different actions could affect our reduction progress and further reduce emissions. Add an action using the ‘Add Action’ button.  `;

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
