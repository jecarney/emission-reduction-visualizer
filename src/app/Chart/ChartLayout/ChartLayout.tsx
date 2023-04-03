import { FC, useState } from 'react';

import { ChangeFromBase } from '../../Emissions/emission.model';
import { ReductionAction } from '../../ReductionActions/reduction-action.model';
import ReductionActions from '../../ReductionActions/ReductionActions';
import EmissionsDeltaSankey from '../Sankey/EmissionsDeltaSankey/EmissionsDeltaSankey';
import './ChartLayout.css';

interface ChartLayoutProps {
  changeFromBase: ChangeFromBase;
  info: string;
  builtInActions: ReductionAction[];
  selectedActions: ReductionAction[];
  onSelectedActionsChange: (actions: ReductionAction[]) => void;
}

const ChartLayout: FC<ChartLayoutProps> = ({
  changeFromBase,
  info,
  builtInActions,
  selectedActions,
  onSelectedActionsChange,
}) => {
  const [overlayActive, setOverlayActive] = useState(false);

  return (
    <div className="main">
      <header className="main__info">{info}</header>

      <div className="main__content">
        <section
          className={`main__input ${
            overlayActive ? 'main__input--active' : ''
          }`}
        >
          <ReductionActions
            builtInActions={builtInActions}
            onSelectedActionsChange={onSelectedActionsChange}
          />
          <button
            type="button"
            className="main__input__close"
            onClick={() => {
              setOverlayActive(false);
            }}
          >
            X
          </button>
        </section>
        <section className="main__chart-wrapper">
          <EmissionsDeltaSankey changeFromBase={changeFromBase} />
        </section>
        <button
          type="button"
          className="main__input__open"
          onClick={() => {
            setOverlayActive(true);
          }}
        >
          Show Info
        </button>
      </div>
    </div>
  );
};

export default ChartLayout;
