import { FC } from 'react';
import { Layer, Rectangle } from 'recharts';

import AgricultureIcon from 'jsx:./icons/agriculture.svg';
import BuildingsIcon from 'jsx:./icons/buildings.svg';
import ElectricityIcon from 'jsx:./icons/electricity.svg';
import HeavyIndustryIcon from 'jsx:./icons/heavy-industry.svg';
import OilAndGasIcon from 'jsx:./icons/oil-and-gas.svg';
import TransportIcon from 'jsx:./icons/transport.svg';
import WasteAndOthersIcon from 'jsx:./icons/waste-and-others.svg';

import { SankeyNode } from '../sankey-node.model';

const icons: Record<
  string,
  React.FunctionComponent<React.SVGAttributes<SVGElement>>
> = {
  'oil-and-gas': OilAndGasIcon,
  transport: TransportIcon,
  buildings: BuildingsIcon,
  electricity: ElectricityIcon,
  'heavy-industry': HeavyIndustryIcon,
  agriculture: AgricultureIcon,
  'waste-and-others': WasteAndOthersIcon,
};

const ChooseIcon: FC<{
  payload: SankeyNode;
  x: number;
  y: number;
  nodeHeight: number;
}> = ({ payload, x, y, nodeHeight }) => {
  const iconSize = 20;
  const IconComponent = icons[payload?.sector!.id];
  if (!IconComponent) return null;
  return (
    <IconComponent
      height={iconSize}
      width={iconSize}
      x={x + 3}
      y={y + nodeHeight / 2 - iconSize / 2}
    />
  );
};

interface NodeWithIconProps {
  x: number;
  y: number;
  width: number;
  height: number;
  payload: SankeyNode;
}

const NodeWithIcon: FC<NodeWithIconProps> = ({
  x,
  y,
  width,
  height,
  payload,
}) => {
  const isEmission = payload?.name?.startsWith('emission');

  const isTotal = payload?.name?.endsWith('total');
  const label = isTotal
    ? payload?.name?.split('-')[0]
    : payload?.sector?.name ?? '';
  return (
    <Layer>
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        fill={payload.fill}
        fillOpacity="1"
      />
      {isEmission && (
        <ChooseIcon payload={payload} x={x} y={y} nodeHeight={height} />
      )}
      {/*  TODO: update hard-coded positioning */}
      {!isTotal && (
        <text x={x + 30} y={y + height / 2}>
          {payload.value} {label}
        </text>
      )}

      {isTotal && (
        <text x={x - 125} y={y + height / 2}>
          {label}: {payload.value}
        </text>
      )}
    </Layer>
  );
};

export default NodeWithIcon;
