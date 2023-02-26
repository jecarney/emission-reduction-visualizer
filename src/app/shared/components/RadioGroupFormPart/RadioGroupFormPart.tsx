import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React, { FC } from 'react';
import { ChartType } from '../../../Chart/chart-type.model';

interface RadioGroupProps {
  onSelect: (arg: ChartType) => void;
  value: string;
  options: string[];
}

const RadioGroupFormPart: FC<RadioGroupProps> = ({
  onSelect,
  value: chartType,
  options,
}) => {
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
        {options?.map(function (option) {
          return (
            <FormControlLabel
              value={option}
              control={<Radio sx={{ color: 'text.primary' }} />}
              label={option}
              key={option}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupFormPart;
