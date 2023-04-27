export interface Sector {
  id: string;
  name: string;
}

const SECTORS: Record<string, Sector> = {
  OIL_AND_GAS: {
    id: 'oil-and-gas',
    name: 'Oil and Gas',
  },
  TRANSPORT: {
    id: 'transport',
    name: 'Transport',
  },
  BUILDINGS: {
    id: 'buildings',
    name: 'Buildings',
  },
  ELECTRICITY: {
    id: 'electricity',
    name: 'Electricity',
  },
  HEAVY_INDUSTRY: {
    id: 'heavy-industry',
    name: 'Heavy Industry',
  },
  AGRICULTURE: {
    id: 'agriculture',
    name: 'Agriculture',
  },
  WASTE_AND_OTHERS: {
    id: 'waste-and-others',
    name: 'Waste and others',
  },
};

export default SECTORS;
