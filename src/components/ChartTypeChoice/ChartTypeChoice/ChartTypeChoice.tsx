import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React, { FC } from 'react';
import { ChartType } from '../../../models/chart-type.type';

interface ChartTypeChoiceProps {
  onSelect: (arg: ChartType) => void;
  chartType: ChartType;
}

const ChartTypeChoice: FC<ChartTypeChoiceProps> = ({ onSelect, chartType }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const choice = (event.target as HTMLInputElement).value as ChartType;
    onSelect(choice);
  };

  return (
    <FormControl>
      <FormLabel sx={{ color: 'text.primary' }}>Chart Type: </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={chartType}
        onChange={handleChange}
      >
        <FormControlLabel
          value="summary"
          control={<Radio sx={{ color: 'text.primary' }} />}
          label="Summary"
        />
        <FormControlLabel
          value="categorized"
          control={<Radio sx={{ color: 'text.primary' }} />}
          label="Categorized"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default ChartTypeChoice;
