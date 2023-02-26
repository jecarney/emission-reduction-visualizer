import { FC, useState } from 'react';
import { ChangeFromBase } from '../../Emissions/emission.model';
import RadioGroup from '../../shared/components/RadioGroupFormPart/RadioGroupFormPart';
import { ChartType } from '../chart-type.model';
import EmissionsDeltaSankey from '../Sankey/EmissionsDeltaSankey/EmissionsDeltaSankey';
import './ChartLayout.css';

interface ChartLayoutProps {
  changeFromBase: ChangeFromBase;
  info: string;
}

const chartTypeOptions: ChartType[] = ['possibilities', 'current'];

const ChartLayout: FC<ChartLayoutProps> = ({ changeFromBase, info }) => {
  const [chartType, setChartType] = useState<ChartType>('current');

  const onSelect = (selectedChartType: ChartType): void => {
    setChartType(selectedChartType);
  };

  return (
    <div className="main">
      <section className="main__info">{info}</section>
      <div className="main__inputs">
        <RadioGroup
          onSelect={onSelect}
          value={chartType}
          options={chartTypeOptions}
        />
      </div>
      <div className="main__chart-wrapper">
        {chartType === 'possibilities' ? (
          'insert possibilities updates here'
        ) : (
          <EmissionsDeltaSankey changeFromBase={changeFromBase} />
        )}
      </div>
      <div className="main__aside"> main aside</div>
      <div className="main__footer">main footer</div>
    </div>
  );
};

export default ChartLayout;
