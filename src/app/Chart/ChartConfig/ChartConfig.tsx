import { FC, useState } from 'react';
import { Action } from '../../Actions/action.model';
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
import TempMap from '../../TempMap';
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

  const info = `See how we can reduce Canada's carbon emissions! The chart shows base year emissions by sector on the left, and 2020 emissions levels on the right. Press the ‘Take Action’ button to select actions. Add an action using the ‘Add Action’ button. `;

  const updatePossibilities = (selectedActions: Action[]): void => {
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
    <TempMap />
    // <ChartLayout
    //   changeFromBase={
    //     activeChartType === 'possible' && possibleEmissionsChartData
    //       ? possibleEmissionsChartData
    //       : realEmissionsChartData
    //   }
    //   info={info}
    //   builtinActions={actionsData}
    //   onSelectedActionsChange={updatePossibilities}
    // />
  );
};

export default ChartConfig;
