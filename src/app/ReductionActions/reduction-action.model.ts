import { Sector } from '../Sector/sectors.const';

export interface ReductionAction {
  name: string;
  notes: string;
  sector: Sector;
  links: string[];
  annualReduction: number;
  id: number;
  isSelected?: boolean;
}
