import { FC, useEffect, useState } from 'react';
import { ReductionAction } from './reduction-action.model';
import './ReductionActions.css';

interface ReductionActionsPickerProps {
  builtInActions: ReductionAction[];
  onSelectedActionsChange: (actions: ReductionAction[]) => void;
}

interface BuiltInActionProps {
  action: ReductionAction;
  addAction: (action: ReductionAction) => void;
}

interface SelectedActionProps {
  action: ReductionAction;
  removeAction: (action: ReductionAction) => void;
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

const SelectedAction: FC<SelectedActionProps> = ({ action, removeAction }) => {
  return (
    <div className="reductions__builtin-action">
      <button
        type="button"
        onClick={() => {
          removeAction(action);
        }}
      >
        Remove Action
      </button>
      {action.name}
    </div>
  );
};

const ReductionActionsPicker: FC<ReductionActionsPickerProps> = ({
  builtInActions,
  onSelectedActionsChange,
}) => {
  const [selectedActions, setSelectedActions] = useState<ReductionAction[]>([]);

  useEffect(() => {
    onSelectedActionsChange(selectedActions);
  }, [selectedActions]);

  const addAction = (newAction: ReductionAction): void => {
    setSelectedActions([...selectedActions, newAction]);
  };

  const removeAction = (removed: ReductionAction): void => {
    const filteredActions = selectedActions.filter(
      (selected) => selected.id !== removed.id
    );
    setSelectedActions(filteredActions);
  };

  return (
    <div>
      {builtInActions
        .filter((action) => {
          return !selectedActions?.some(
            (selectedAction) => selectedAction.id === action.id
          );
        })
        .map((action) => {
          return (
            <BuiltInAction
              action={action}
              key={action.id}
              addAction={addAction}
            />
          );
        })}

      {selectedActions?.map((action) => {
        return (
          <SelectedAction
            action={action}
            removeAction={removeAction}
            key={action.id}
          />
        );
      })}
    </div>
  );
};

export default ReductionActionsPicker;
