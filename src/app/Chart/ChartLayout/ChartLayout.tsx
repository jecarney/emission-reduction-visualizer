import { Divider } from '@mui/material';
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

      <section className="main__chart-wrapper">
        {/* <Box
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            display: 'flex',
          }}
        >
        
          <h2>
            {changeFromBase.baseYear} total : {baseYearTotal}
          </h2>
          <h2>
            {' '}
            {changeFromBase.type === 'currentReality'
              ? `${changeFromBase.currentYear} total : ${currentYearTotal}`
              : `possible total : ${currentYearTotal}`}
          </h2> 
         </Box>  */}
        <EmissionsDeltaSankey changeFromBase={changeFromBase} />
      </section>
    </div>
  );
};

export default ChartLayout;
