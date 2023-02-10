export interface Sector {
  id: number;
  name: string;
}

const SECTORS: Record<string, Sector> = {
  OIL_AND_GAS: {
    id: 1,
    name: 'Oil and Gas',
  },
  TRANSPORT: {
    id: 2,
    name: 'Transport',
  },
  BUILDINGS: {
    id: 3,
    name: 'Buildings',
  },
  ELECTRICITY: {
    id: 4,
    name: 'Electricity',
  },
  HEAVY_INDUSTRY: {
    id: 5,
    name: 'Heavy Industry',
  },
  AGRICULTURE: {
    id: 6,
    name: 'Agriculture',
  },
  WASTE_AND_OTHERS: {
    id: 7,
    name: 'Waste and others',
  },
  TOTAL: {
    id: 8,
    name: 'Total',
  },
};

export default SECTORS;
