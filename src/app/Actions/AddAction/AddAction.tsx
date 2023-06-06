import {
  Button,
  Container,
  FormControl,
  InputLabel,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';

import React, { FC, useState } from 'react';
import SECTORS, { Sector } from '../../Sector/sectors.const';
import './AddAction.css';

export interface NewAction {
  name: string;
  notes: string;
  sector: Sector | '';
  links: string[];
  annualReduction: number | '';
}

export interface SubmittedAction {
  name: string;
  notes: string;
  sector: Sector;
  links: string[];
  annualReduction: number;
}

interface ActionFormProps {
  addAction: (newAction: SubmittedAction) => void;
  closeAction: () => void;
}

const ActionForm: FC<ActionFormProps> = ({ addAction, closeAction }) => {
  const sectorlist = Object.values(SECTORS);

  const [values, setValues] = useState<NewAction>({
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
    closeAction();
    const newAction: SubmittedAction = values as SubmittedAction;
    addAction(newAction);
  };

  return (
    <Container
      sx={{
        color: 'text.primary',
        width: '90%',
        padding: 0,
        display: 'flex',
      }}
    >
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
              <MenuItem key={sector.id} value={sector}>
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
        <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
          <TextField
            label="Links"
            name="links"
            value={currentLink}
            onChange={updateCurrentLink}
            fullWidth
          />

          <Button variant="outlined" onClick={addLink} sx={{ width: '10%' }}>
            Add Link
          </Button>
        </Stack>

        {values.links.map((link) => (
          <ListItem disablePadding key={link}>
            <ListItemText primary={link} />
          </ListItem>
        ))}

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
    </Container>
  );
};

export default ActionForm;
