import { Sector } from '../../Sector/sectors.const';

export interface SankeyNode {
  name: string;
  fill: string;
  value?: number;
  sector?: Sector;
}
