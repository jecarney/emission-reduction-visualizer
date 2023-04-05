import { FC, useEffect, useRef, useState } from 'react';
import equalListContents from '../shared/helpers/array';
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
  const lastSelectedActions = useRef<ReductionAction[]>([]);

  const [selectedActions, setSelectedActions] = useState<ReductionAction[]>([]);

  useEffect(() => {
    if (
      // this effect has lots of downstream consequences and calculations that could affect performance, we only want to trigger the function if the seleted actions have truly changed
      !equalListContents<ReductionAction>(
        lastSelectedActions.current,
        selectedActions
      )
    ) {
      onSelectedActionsChange(selectedActions);
    }

    lastSelectedActions.current = selectedActions;
  }, [selectedActions]);

  const addAction = (newAction: ReductionAction): void => {
    setSelectedActions((previous) => [...previous, newAction]);
  };

  const removeAction = (removed: ReductionAction): void => {
    setSelectedActions((previous) =>
      previous.filter((selected) => selected.id !== removed.id)
    );
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
