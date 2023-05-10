import {
  Button,
  FormControl,
  InputLabel,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';

import React, { FC, useState } from 'react';
import SECTORS, { Sector } from '../../Sector/sectors.const';
import './AddAction.css';

export interface NewReductionAction {
  name: string;
  notes: string;
  sector: Sector | '';
  links: string[];
  annualReduction: number | '';
}

export interface SubmittedReductionAction {
  name: string;
  notes: string;
  sector: Sector;
  links: string[];
  annualReduction: number;
}

interface ReductionActionFormProps {
  addAction: (newAction: SubmittedReductionAction) => void;
  closeAddAction: () => void;
}

const ReductionActionForm: FC<ReductionActionFormProps> = ({
  addAction,
  closeAddAction,
}) => {
  const sectorlist = Object.values(SECTORS);

  const [values, setValues] = useState<NewReductionAction>({
    name: '',
    notes: '',
    sector: '',
    links: [],
    annualReduction: '',
  });

  const [currentLink, setCurrentLink] = useState<string>('');

  const handleChange = (
    event:
      | SelectChangeEvent<Sector>
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    if (name) {
      setValues((prevValues) => ({ ...prevValues, [name]: value }));
    }
  };

  // QUESTION: is this kind of wrapper really always necessary?
  const updateCurrentLink = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const { value } = event.target;
    setCurrentLink(value);
  };

  const addLink = (): void => {
    if (!currentLink) return;

    setValues((prevValues) => ({
      ...prevValues,
      links: [...prevValues.links, currentLink],
    }));

    setCurrentLink('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const newAction: SubmittedReductionAction =
      values as SubmittedReductionAction;
    addAction(newAction);
    closeAddAction();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        required
        label="Name"
        name="name"
        value={values.name}
        onChange={handleChange}
        fullWidth
      />
      {/* automatic label animation doesn't work without FormControl wrapper */}
      <FormControl required className="dropdown" style={{ display: 'block' }}>
        <InputLabel>Sector</InputLabel>
        <Select
          name="sector"
          value={values.sector}
          onChange={handleChange}
          fullWidth
        >
          {sectorlist.map((sector) => (
            <MenuItem key={sector.id} value={sector.name}>
              {sector.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        required
        label="Annual Reduction"
        name="annualReduction"
        type="number"
        value={values.annualReduction}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Links"
        name="links"
        value={currentLink}
        onChange={updateCurrentLink}
        fullWidth
      />

      {values.links.map((link) => (
        <ListItem disablePadding key={link}>
          <ListItemText primary={link} />
        </ListItem>
      ))}

      <Button type="button" onClick={addLink}>
        Add Link
      </Button>

      <TextField
        label="Notes"
        name="notes"
        value={values.notes}
        onChange={handleChange}
        fullWidth
      />

      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default ReductionActionForm;
