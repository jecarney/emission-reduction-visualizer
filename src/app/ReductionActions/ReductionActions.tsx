import { FC, useState } from 'react';
import { ReductionAction } from './reduction-action.model';
import './ReductionActions.css';

interface ReductionActionsPickerProps {
  builtInActions: ReductionAction[];
  selectedActions: ReductionAction[];
  onSelectedActionsChange: (actions: ReductionAction[]) => void;
}

interface BuiltInActionProps {
  action: ReductionAction;
  addAction: (action: ReductionAction) => void;
}

const BuiltInAction: FC<BuiltInActionProps> = ({ action, addAction }) => {
  return (
    <div className="reductions__builtin-action">
      <button
        type="button"
        onClick={() => {
          addAction(action);
        }}
      >
        {action.name}
      </button>
      <p>{action.notes}</p>
    </div>
  );
};

const ReductionActionsPicker: FC<ReductionActionsPickerProps> = ({
  builtInActions,
  selectedActions,
  onSelectedActionsChange,
}) => {
  const [unconfirmedSelectedActions, setUnconfirmedSelectedActions] =
    useState<ReductionAction[]>(selectedActions);

  const addAction = (newAction: ReductionAction): void => {
    setUnconfirmedSelectedActions([...unconfirmedSelectedActions, newAction]);
  };

  return (
    <div>
      {builtInActions
        .filter((action) => {
          return !unconfirmedSelectedActions?.some(
            (unconfirmedAction) => unconfirmedAction.name === action.name
          );
        })
        .map((action) => {
          return (
            <BuiltInAction
              action={action}
              key={action.name}
              addAction={addAction}
            />
          );
        })}
      unconfirmedSelectedActions actions:{' '}
      {unconfirmedSelectedActions?.map((action) => action.name)}
      selected actions: {selectedActions?.map((action) => action.name)}
      <button
        type="button"
        onClick={() => {
          onSelectedActionsChange(unconfirmedSelectedActions);
        }}
      >
        {' '}
        add actions
      </button>
    </div>
  );
};

export default ReductionActionsPicker;
