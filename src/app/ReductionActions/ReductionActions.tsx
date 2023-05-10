import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// QUESTION: does parcel handle tree-shaking for named imports, or should I update them to improve performance?
import {
  Button,
  CardContent,
  Collapse,
  Container,
  Divider,
  IconButton,
} from '@mui/material';
import Card from '@mui/material/Card';
import { FC, useState } from 'react';
import AddAction, { SubmittedReductionAction } from './AddAction/AddAction';
import './ReductionActions.css';
import { ReductionAction } from './reduction-action.model';

interface ActionProps {
  action: ReductionAction;
  interaction: (action: ReductionAction) => void;
}

const Action: FC<ActionProps> = ({ action, interaction }) => {
  const [showNotes, setShowNotes] = useState(false);
  const variant: string = action.isSelected ? 'selected' : 'outlined';

  return (
    <Card variant={variant}>
      <CardContent>
        <Button
          type="button"
          variant={variant}
          onClick={() => {
            interaction(action);
          }}
        >
          {action.name}
        </Button>
        <Collapse in={showNotes}>
          <p>{action.notes}</p>
        </Collapse>
        <IconButton
          onClick={() => {
            setShowNotes(!showNotes);
          }}
        >
          {showNotes ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </CardContent>
    </Card>
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
  const [actions, setActions] = useState<ReductionAction[]>(builtinActions);

  const [customActionFormOpen, setCustomActionFormOpen] =
    useState<boolean>(false);

  const toggleActionIsSelected = (
    newAction: ReductionAction,
    isSelected: boolean
  ): void => {
    const updatedActions = actions.map((action) => {
      return action.id === newAction.id ? { ...action, isSelected } : action;
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
      {!customActionFormOpen && (
        <Container>
          <Button
            type="button"
            onClick={() => {
              setCustomActionFormOpen(true);
            }}
            variant="contained"
            sx={{ marginTop: '15x' }}
          >
            Add Custom Action
          </Button>
          {actions.some((action) => action.isSelected) && (
            <>
              <Divider />
              <h3>selected: </h3>
              {actions
                .filter((action) => {
                  return action.isSelected;
                })
                .map((action) => {
                  return (
                    <Action
                      action={action}
                      key={action.id}
                      interaction={(actionToToggle: ReductionAction) => {
                        toggleActionIsSelected(actionToToggle, false);
                      }}
                    />
                  );
                })}
            </>
          )}

          <Divider />
          <h3>possible actions: </h3>
          {actions
            .filter((action) => {
              return !action.isSelected;
            })
            ?.map((action) => {
              return (
                <Action
                  action={action}
                  interaction={(actionToToggle: ReductionAction) => {
                    toggleActionIsSelected(actionToToggle, true);
                  }}
                  key={action.id}
                />
              );
            })}
        </Container>
      )}

      {customActionFormOpen && (
        <AddAction
          addAction={addAction}
          closeAddAction={() => {
            setCustomActionFormOpen(false);
          }}
        />
      )}
    </>
  );
};

export default ReductionActionsPicker;
