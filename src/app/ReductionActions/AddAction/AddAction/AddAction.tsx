import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';

import React, { useState } from 'react';
import SECTORS, { Sector } from '../../../Sector/sectors.const';
import './AddAction.css';

export interface NewReductionAction {
  name: string;
  notes: string;
  sector: Sector | '';
  links: string[];
  annualReduction: number | '';
}

const ReductionActionForm: React.FC = () => {
  const sectorlist = Object.values(SECTORS);

  const [values, setValues] = useState<NewReductionAction>({
    name: '',
    notes: '',
    sector: '',
    links: [],
    annualReduction: '',
  });

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('submitting', values);
    // handle form submission here
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
      <TextField
        label="Notes"
        name="notes"
        value={values.notes}
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
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ReductionActionForm;
