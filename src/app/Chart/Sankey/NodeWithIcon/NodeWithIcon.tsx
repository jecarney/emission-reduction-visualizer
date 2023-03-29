import { FC } from 'react';
import { Layer, Rectangle } from 'recharts';

import Agriculture from 'jsx:./icons/agriculture.svg';
import Buildings from 'jsx:./icons/buildings.svg';
import Electricity from 'jsx:./icons/electricity.svg';
import HeavyIndustry from 'jsx:./icons/heavy-industry.svg';
import OilAndGas from 'jsx:./icons/oil-and-gas.svg';
import Transport from 'jsx:./icons/transport.svg';
import WasteAndOthers from 'jsx:./icons/waste-and-others.svg';

import { SankeyNode } from '../sankey-node.model';

const ChooseIcon: FC<{
  payload: SankeyNode;
  x: number;
  y: number;
  nodeHeight: number;
}> = ({ payload, x, y, nodeHeight }) => {
  const iconSize = 20;
  switch (payload?.sector?.id) {
    case 'oil-and-gas':
      return (
        <OilAndGas
          height={iconSize}
          width={iconSize}
          x={x + 3}
          y={y + nodeHeight / 2 - iconSize / 2}
        />
      );
    case 'transport':
      return (
        <Transport
          height={iconSize}
          width={iconSize}
          x={x + 3}
          y={y + nodeHeight / 2 - iconSize / 2}
        />
      );
    case 'buildings':
      return (
        <Buildings
          height={iconSize}
          width={iconSize}
          x={x + 3}
          y={y + nodeHeight / 2 - iconSize / 2}
        />
      );
    case 'electricity':
      return (
        <Electricity
          height={iconSize}
          width={iconSize}
          x={x + 3}
          y={y + nodeHeight / 2 - iconSize / 2}
        />
      );
    case 'heavy-industry':
      return (
        <HeavyIndustry
          height={iconSize}
          width={iconSize}
          x={x + 3}
          y={y + nodeHeight / 2 - iconSize / 2}
        />
      );
    case 'agriculture':
      return (
        <Agriculture
          height={iconSize}
          width={iconSize}
          x={x + 3}
          y={y + nodeHeight / 2 - iconSize / 2}
        />
      );
    case 'waste-and-others':
      return (
        <WasteAndOthers
          height={iconSize}
          width={iconSize}
          x={x + 3}
          y={y + nodeHeight / 2 - iconSize / 2}
        />
      );
    default:
      return null;
  }
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
  return (
    <Layer>
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        fill="red"
        fillOpacity="1"
      />
      {isEmission && (
        <ChooseIcon payload={payload} x={x} y={y} nodeHeight={height} />
      )}
    </Layer>
  );
};

export default NodeWithIcon;
