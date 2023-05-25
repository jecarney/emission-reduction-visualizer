// QUESTION: does parcel handle tree-shaking for named imports, or should I update them to improve performance?
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Collapse, IconButton } from '@mui/material';
import { FC, useState } from 'react';
import useElementSize from '../shared/helpers/useElementSize';
import AddAction, { SubmittedReductionAction } from './AddAction/AddAction';
import './ReductionActions.css';
import { ReductionAction } from './reduction-action.model';

interface ActionProps {
  action: ReductionAction;
  interaction: (action: ReductionAction) => void;
}

const Action: FC<ActionProps> = ({ action, interaction }) => {
  const variant: string = action.isSelected ? 'selected' : 'outlined';

  return (
    <Button
      type="button"
      variant={variant}
      onClick={() => {
        interaction(action);
      }}
      sx={{ borderColor: action.sector.color }}
    >
      {action.name}
    </Button>
  );
};

interface ReductionActionsPickerProps {
  builtinActions: ReductionAction[];
  onSelectedActionsChange: (actions: ReductionAction[]) => void;
}

const ReductionActionsPicker: FC<ReductionActionsPickerProps> = ({
  builtinActions,
  onSelectedActionsChange,
}) => {
  const minimumTagsHeight = 60;
  const [actions, setActions] = useState<ReductionAction[]>(builtinActions);

  const [customActionFormOpen, setCustomActionFormOpen] =
    useState<boolean>(false);

  const [tagsExpanded, setTagsExpanded] = useState(false);

  const [tagsHoldRef, { height }] = useElementSize();

  const updateActionIsSelected = (
    toggledAction: ReductionAction,
    isSelected: boolean
  ): void => {
    const updatedActions = actions.map((action) => {
      return action.id === toggledAction.id
        ? { ...action, isSelected }
        : action;
    });

    setActions(updatedActions);

    const selectedActions = updatedActions.filter((action) => {
      return action.isSelected;
    });
    onSelectedActionsChange(selectedActions);
  };

  const addAction = (newAction: SubmittedReductionAction): void => {
    const nextId =
      actions.reduce((highestId, action) => {
        return action.id > highestId ? action.id : highestId;
      }, 0) + 1;

    const newActionWithId: ReductionAction = { ...newAction, id: nextId };

    setActions((previous) => [...previous, newActionWithId]);
  };

  return (
    <>
      <section className="reduction-actions">
        <p>
          Please read the info next to the reduction action checkboxes to see
          the rationale behind the reductions included with the visualizer.
          Carbon reduction is complex and uncertain! That's OK, it's still worth
          trying to figure out as best we can.
        </p>
        <div className="reduction-actions__tags">
          <div
            className={`reduction-actions__tags___expandable reduction-actions__tags___expandable--${
              tagsExpanded || height < minimumTagsHeight ? 'expanded' : 'fade'
            }`}
          >
            <Collapse in={tagsExpanded} collapsedSize={minimumTagsHeight}>
              <div
                className="reduction-actions__tags__fullheight"
                ref={tagsHoldRef}
              >
                {actions.map((action) => {
                  return (
                    <Action
                      action={action}
                      interaction={(actionToToggle: ReductionAction) => {
                        updateActionIsSelected(
                          actionToToggle,
                          !action.isSelected
                        );
                      }}
                      key={action.id}
                    />
                  );
                })}
              </div>
            </Collapse>
          </div>
        </div>
        <div className="reduction-actions__edit">
          <Button
            type="button"
            onClick={() => {
              setCustomActionFormOpen(true);
            }}
            variant="contained"
          >
            Add Custom Action
          </Button>
        </div>
        <div className="reduction-actions__expand-button">
          {height > minimumTagsHeight && (
            <IconButton
              onClick={() => {
                setTagsExpanded(!tagsExpanded);
              }}
            >
              {tagsExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          )}
        </div>
      </section>
      <AddAction
        addAction={addAction}
        overlayOpen={customActionFormOpen}
        closeAddAction={() => {
          setCustomActionFormOpen(false);
        }}
      />
    </>
  );
};

export default ReductionActionsPicker;
