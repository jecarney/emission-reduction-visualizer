import { Button, Divider } from '@mui/material';
import { FC, useState } from 'react';

import { Action } from '../../Actions/action.model';
import { ChangeFromBase } from '../../Emissions/emission.model';
import EmissionsDeltaSankey from '../Sankey/EmissionsDeltaSankey/EmissionsDeltaSankey';

import Actions, { Overlay } from '../../Actions/Actions';
import './ChartLayout.css';

interface ChartLayoutProps {
  changeFromBase: ChangeFromBase;
  info: string;
  builtinActions: Action[];
  onSelectedActionsChange: (actions: Action[]) => void;
}

const ChartLayout: FC<ChartLayoutProps> = ({
  changeFromBase,
  info,
  builtinActions,
  onSelectedActionsChange,
}) => {
  const [overlay, setOverlay] = useState<Overlay>(null);

  const closeAction = (): void => {
    setOverlay(null);
  };

  return (
    <div className="main">
      <h1>Emission Reduction Visualizer</h1>
      <section>
        <p>{info}</p>
      </section>
      <Divider sx={{ margin: '15px 0', width: '90%' }} />

      <div className="main__content">
        <section className="main__content__actions">
          <Button
            variant="outlined"
            onClick={() => {
              setOverlay('takeAction');
            }}
          >
            Take Action
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setOverlay('addAction');
            }}
          >
            Add Action
          </Button>
        </section>

        <section className="main__content__chart-wrapper">
          <EmissionsDeltaSankey changeFromBase={changeFromBase} />
        </section>
        <Actions
          builtinActions={builtinActions}
          onSelectedActionsChange={onSelectedActionsChange}
          overlay={overlay}
          closeAction={closeAction}
        />
      </div>
    </div>
  );
};

export default ChartLayout;
