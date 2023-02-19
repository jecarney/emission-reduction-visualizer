import { FC, useState } from 'react';
import { ChangeFromBase } from '../../Emissions/emission.model';
import { ChartType } from '../ChartTypeChoice/chart-type.model';
import ChartTypeChoice from '../ChartTypeChoice/ChartTypeChoice/ChartTypeChoice';
import EmissionsDeltaSankey from '../Sankey/EmissionsDeltaSankey/EmissionsDeltaSankey';
import './ChartLayout.css';

interface ChartLayoutProps {
  changeFromBase: ChangeFromBase;
  info: string;
}

const ChartLayout: FC<ChartLayoutProps> = ({ changeFromBase, info }) => {
  const [chartType, setChartType] = useState<ChartType>('categorized');

  const onSelect = (selectedChartType: ChartType): void => {
    setChartType(selectedChartType);
  };

  return (
    <div className="main">
      <section className="main__info">{info}</section>
      <div className="main__inputs">
        <ChartTypeChoice onSelect={onSelect} chartType={chartType} />
      </div>
      <div className="main__chart-wrapper">
        <EmissionsDeltaSankey changeFromBase={changeFromBase} />
      </div>
      <div className="main__aside"> main aside</div>
      <div className="main__footer">main footer</div>
    </div>
  );
};

export default ChartLayout;
