import { Sector } from '../../Sector/sectors.const';

export interface EmissionBySector {
  id: number;
  value: number;
  sector: Sector;
}

export interface EmissionChange {
  baseEmission: EmissionBySector;
  delta: number;
}

export interface YearOfEmissions {
  emissionBySector: EmissionBySector[];
  year?: number;
  type: EmissionsDataType;
}

export interface ChangeFromBase {
  changes: EmissionChange[];
  baseYear?: number;
  currentYear?: number;
  type: EmissionsDataType;
}

export type EmissionsDataType = 'currentReality' | 'possible';
