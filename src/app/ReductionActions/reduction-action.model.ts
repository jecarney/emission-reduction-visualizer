import { Sector } from '../../Sector/sectors.const';

export interface ReductionAction {
  name: string;
  notes: string;
  sector: Sector;
  link: string;
  annualReduction: number;
  id: number;
}
