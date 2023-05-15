import AgricultureIcon from 'jsx:../../assets/icons/agriculture.svg';
import BuildingsIcon from 'jsx:../../assets/icons/buildings.svg';
import ElectricityIcon from 'jsx:../../assets/icons/electricity.svg';
import HeavyIndustryIcon from 'jsx:../../assets/icons/heavy-industry.svg';
import OilAndGasIcon from 'jsx:../../assets/icons/oil-and-gas.svg';
import TransportIcon from 'jsx:../../assets/icons/transport.svg';
import WasteAndOthersIcon from 'jsx:../../assets/icons/waste-and-others.svg';

export interface Sector {
  id: string;
  name: string;
  color: string;
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

const SECTORS: Record<string, Sector> = {
  OIL_AND_GAS: {
    id: 'oil-and-gas',
    name: 'Oil and Gas',
    color: '#0ad2ff',
    icon: OilAndGasIcon,
  },
  TRANSPORT: {
    id: 'transport',
    name: 'Transport',
    color: '#2962ff',
    icon: TransportIcon,
  },
  BUILDINGS: {
    id: 'buildings',
    name: 'Buildings',
    color: '#9500ff',
    icon: BuildingsIcon,
  },
  ELECTRICITY: {
    id: 'electricity',
    name: 'Electricity',
    color: '#ff0059',
    icon: ElectricityIcon,
  },
  HEAVY_INDUSTRY: {
    id: 'heavy-industry',
    name: 'Heavy Industry',
    color: '#ff8c00',
    icon: HeavyIndustryIcon,
  },
  AGRICULTURE: {
    id: 'agriculture',
    name: 'Agriculture',
    color: '#b4e600',
    icon: AgricultureIcon,
  },
  WASTE_AND_OTHERS: {
    id: 'waste-and-others',
    name: 'Waste and others',
    color: '#0fffdb',
    icon: WasteAndOthersIcon,
  },
};

export default SECTORS;
