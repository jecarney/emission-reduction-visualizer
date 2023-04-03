import SECTORS from '../../Sector/sectors.const';
import { YearOfEmissions } from './emission.model';

export const baseYearEmissionsData: YearOfEmissions = {
  emissionBySector: [
    { id: 1, value: 171, sector: SECTORS.OIL_AND_GAS },
    { id: 2, value: 160, sector: SECTORS.TRANSPORT },
    { id: 2, value: 84, sector: SECTORS.BUILDINGS },
    { id: 3, value: 118, sector: SECTORS.ELECTRICITY },
    { id: 4, value: 87, sector: SECTORS.HEAVY_INDUSTRY },
    { id: 5, value: 66, sector: SECTORS.AGRICULTURE },
    { id: 6, value: 55, sector: SECTORS.WASTE_AND_OTHERS },
  ],
  year: 2005,
};

export const mostCurrentEmissionsData: YearOfEmissions = {
  emissionBySector: [
    { id: 7, value: 179, sector: SECTORS.OIL_AND_GAS },
    { id: 8, value: 160, sector: SECTORS.TRANSPORT },
    { id: 9, value: 88, sector: SECTORS.BUILDINGS },
    { id: 10, value: 56, sector: SECTORS.ELECTRICITY },
    { id: 11, value: 72, sector: SECTORS.HEAVY_INDUSTRY },
    { id: 12, value: 69, sector: SECTORS.AGRICULTURE },
    { id: 13, value: 50, sector: SECTORS.WASTE_AND_OTHERS },
  ],
  year: 2020,
};
