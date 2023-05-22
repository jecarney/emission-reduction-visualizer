import { Box, Divider } from '@mui/material';
import { FC } from 'react';

import { ChangeFromBase } from '../../Emissions/emission.model';
import ReductionActions from '../../ReductionActions/ReductionActions';
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
      <ReductionActions
        builtinActions={builtinActions}
        onSelectedActionsChange={onSelectedActionsChange}
      />
      <Divider sx={{ margin: '15px 0', width: '90%' }} />

      <section className="main__chart-wrapper">
        <EmissionsDeltaSankey changeFromBase={changeFromBase} />
      </section>
      <section>
        <Box
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            display: 'flex',
          }}
        >
          {/* <h2>
            {changeFromBase.baseYear} total : {baseYearTotal}
          </h2>
          <h2>
            {' '}
            {changeFromBase.type === 'currentReality'
              ? `${changeFromBase.currentYear} total : ${currentYearTotal}`
              : `possible total : ${currentYearTotal}`}
          </h2> */}
          <h2>{changeFromBase.baseYear} total :</h2>
          <h2>
            {' '}
            {changeFromBase.type === 'currentReality'
              ? `${changeFromBase.currentYear} total : `
              : `possible total : `}
          </h2>
        </Box>
        <p>
          {info} {info}
        </p>
      </section>
    </div>
  );
};

export default ChartLayout;
