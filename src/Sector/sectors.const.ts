export interface Sector {
  id: number;
  emissionColour: string;
  reductionColour: string;
  name: string;
}

const SECTORS: Record<string, Sector> = {
  OIL_AND_GAS: {
    id: 1,
    emissionColour: 'rgba(46, 59, 81, 0.3)',
    reductionColour: 'rgba(46, 59, 81, 1)',
    name: 'Oil and Gas',
  },
  TRANSPORT: {
    id: 2,
    emissionColour: 'rgba(73, 93, 113, 0.3)',
    reductionColour: 'rgba(73, 93, 113, 1)',
    name: 'Transport',
  },
  BUILDINGS: {
    id: 3,
    emissionColour: 'rgba(104, 104, 104, 0.3)',
    reductionColour: 'rgba(104, 104, 104, 1)',
    name: 'Buildings',
  },
  ELECTRICITY: {
    id: 4,
    emissionColour: 'rgba(39, 119, 168, 0.3)',
    reductionColour: 'rgba(39, 119, 168, 1)',
    name: 'Electriciy',
  },
  HEAVY_INDUSTRY: {
    id: 5,
    emissionColour: 'rgba(39, 154, 196, 0.3)',
    reductionColour: 'rgba(39, 154, 196, 1)',
    name: 'Heavy Industry',
  },
  AGRICULTURE: {
    id: 6,
    emissionColour: 'rgba(0, 178, 121, 0.3)',
    reductionColour: 'rgba(0, 178, 121, 1)',
    name: 'Agriculture',
  },
  WASTE_AND_OTHERS: {
    id: 7,
    emissionColour: 'rgba(23, 50, 60, 0.3)',
    reductionColour: 'rgba(23, 50, 60, 1)',
    name: 'Waste and others',
  },
  TOTAL: {
    id: 8,
    emissionColour: 'rgba(23, 50, 60, 0.3)',
    reductionColour: 'rgba(23, 50, 60, 1)',
    name: 'Total',
  },
};

export default SECTORS;
