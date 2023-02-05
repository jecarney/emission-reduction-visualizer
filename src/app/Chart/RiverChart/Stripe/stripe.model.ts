import { Sector } from '../../../../Sector/sectors.const';

export interface StripeConfig {
  id: number;
  value: number;
  sector: Sector;
}

export interface StripeGroup {
  stripes: StripeConfig[];
  year: number;
}

export interface ReductionsStripeGroup {
  stripes: StripeConfig[];
  baseYear: number;
  currentYear: number;
}
