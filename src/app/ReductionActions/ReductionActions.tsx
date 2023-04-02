import { FC, useState } from 'react';
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
  onSelectedActionsChange,
}) => {
  const [selectedActions, setSelectedActions] = useState<ReductionAction[]>([]);
  const addAction = (newAction: ReductionAction): void => {
    setSelectedActions([...selectedActions, newAction]);
  };
  return (
    <div>
      {builtInActions.map((action) => {
        return (
          <BuiltInAction
            action={action}
            key={action.name}
            addAction={addAction}
          />
        );
      })}
      selected actions: {selectedActions.map((action) => action.name)}
      <button
        type="button"
        onClick={() => {
          onSelectedActionsChange(selectedActions);
        }}
      >
        {' '}
        add actions
      </button>
    </div>
  );
};

export default ReductionActionsPicker;
