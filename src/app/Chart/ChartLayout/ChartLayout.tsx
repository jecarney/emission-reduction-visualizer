import { Button, Divider } from '@mui/material';
import { FC } from 'react';

import { ChangeFromBase } from '../../Emissions/emission.model';
import { ReductionAction } from '../../ReductionActions/reduction-action.model';
import EmissionsDeltaSankey from '../Sankey/EmissionsDeltaSankey/EmissionsDeltaSankey';

import './ChartLayout.css';

interface ChartLayoutProps {
  changeFromBase: ChangeFromBase;
  info: string;
  builtinActions: ReductionAction[];
  onSelectedActionsChange: (actions: ReductionAction[]) => void;
}

const ChartLayout: FC<ChartLayoutProps> = ({
  changeFromBase,
  info,
  builtinActions,
  onSelectedActionsChange,
}) => {
  return (
    <div className="main">
      <h1>Emission Reduction Visualizer</h1>
      <section>
        <p>{info}</p>
      </section>
      <Divider sx={{ margin: '15px 0', width: '90%' }} />

      <div className="main__content">
        <section className="main__content__actions">
          <Button variant="outlined">Take Action</Button>
          <Button variant="outlined">Add Action</Button>
        </section>

        <section className="main__content__chart-wrapper">
          <EmissionsDeltaSankey changeFromBase={changeFromBase} />
        </section>
      </div>
    </div>
  );
};

export default ChartLayout;
