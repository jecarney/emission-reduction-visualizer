// QUESTION: does parcel handle tree-shaking for named imports, or should I update them to improve performance?
import { FC, useEffect, useState } from 'react';
import SlideUpOverlay from '../shared/components/SlideUpOverlay/SlideUpOverlay/SlideUpOverlay';
import './Actions.css';
import ActionsPicker from './ActionsPicker/ActionsPicker';
import AddAction, { SubmittedAction } from './AddAction/AddAction';
import { Action } from './action.model';

export type Overlay = 'takeAction' | 'addAction' | null;

interface ActionsProps {
  builtinActions: Action[];
  onSelectedActionsChange: (actions: Action[]) => void;
  overlay: Overlay;
  closeAction: () => void;
}

const Actions: FC<ActionsProps> = ({
  builtinActions,
  onSelectedActionsChange,
  overlay,
  closeAction,
}) => {
  const [actions, setActions] = useState<Action[]>(builtinActions);

  useEffect(() => {
    const selectedActions = actions.filter((action) => {
      return action.isSelected;
    });

    // may want to add check if changed
    onSelectedActionsChange(selectedActions);
  }, [actions]);

  const updateActionIsSelected = (
    toggledAction: Action,
    isSelected: boolean
  ): void => {
    const updatedActions = actions.map((action) => {
      return action.id === toggledAction.id
        ? { ...action, isSelected }
        : action;
    });

    setActions(updatedActions);
  };

  const addAction = (newAction: SubmittedAction): void => {
    const nextId =
      actions.reduce((highestId, action) => {
        return action.id > highestId ? action.id : highestId;
      }, 0) + 1;

    const newActionWithId: Action = {
      ...newAction,
      id: nextId,
      isSelected: true,
    };

    setActions((previous) => [...previous, newActionWithId]);
  };

  return (
    <section className="actions">
      <SlideUpOverlay
        overlayOpen={overlay === 'addAction'}
        closeAction={closeAction}
      >
        <AddAction addAction={addAction} closeAction={closeAction} />
      </SlideUpOverlay>

      <SlideUpOverlay
        overlayOpen={overlay === 'takeAction'}
        closeAction={closeAction}
      >
        <ActionsPicker
          actions={actions}
          updateActionIsSelected={updateActionIsSelected}
        />
      </SlideUpOverlay>
    </section>
  );
};

export default Actions;
