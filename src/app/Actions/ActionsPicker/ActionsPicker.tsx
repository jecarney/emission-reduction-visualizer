// QUESTION: does parcel handle tree-shaking for named imports, or should I update them to improve performance?
import { Checkbox, FormControlLabel } from '@mui/material';
import { FC } from 'react';
import { Action } from '../action.model';
import './ActionsPicker.css';

interface ActionsPickerProps {
  actions: Action[];
  updateActionIsSelected: (toggledAction: Action, isSelected: boolean) => void;
}

const ActionsPicker: FC<ActionsPickerProps> = ({
  actions,
  updateActionIsSelected,
}) => {
  return (
    <section className="actions">
      <p>
        Please read the info next to the reduction action checkboxes to see the
        rationale behind the reductions included with the visualizer. Carbon
        reduction is complex and uncertain! That's OK, it's still worth trying
        to figure out as best we can.
      </p>

      {actions.map((action) => {
        return (
          <FormControlLabel
            key={action.id}
            control={<Checkbox />}
            label={action.name}
            checked={action.isSelected}
            onChange={() => {
              updateActionIsSelected(action, !action.isSelected);
            }}
          />
        );
      })}
    </section>
  );
};

export default ActionsPicker;
