import { FC, useState } from 'react';
import { ChangeFromBase } from '../../Emissions/emission.model';
import EmissionsDeltaSankey from '../Sankey/EmissionsDeltaSankey/EmissionsDeltaSankey';
import './ChartLayout.css';

interface ChartLayoutProps {
  changeFromBase: ChangeFromBase;
  info: string;
}

const ChartLayout: FC<ChartLayoutProps> = ({ changeFromBase, info }) => {
  const [overlayActive, setOverlayActive] = useState(false);

  const handleToggle = (): void => {
    setOverlayActive(true);
  };
  return (
    <div className="main">
      <header className="main__info">{info}</header>

      <div className="main__content">
        <section
          className={`main__input ${
            overlayActive ? 'main__input--active' : ''
          }`}
        >
          input section where we make our emissions changes
        </section>
        <section className="main__chart-wrapper">
          <EmissionsDeltaSankey changeFromBase={changeFromBase} />
        </section>
        <button
          type="button"
          className="main__input__toggle"
          onClick={handleToggle}
        >
          Show Info
        </button>
      </div>
    </div>
  );
};

export default ChartLayout;
