import { FC } from 'react';
import { Layer, Rectangle } from 'recharts';

import { SankeyNode } from '../sankey-node.model';

const ChooseIcon: FC<{
  payload: SankeyNode;
  x: number;
  y: number;
  nodeHeight: number;
}> = ({ payload, x, y, nodeHeight }) => {
  const iconSize = 20;
  const IconComponent = payload?.sector!.icon;
  if (!IconComponent) return null;
  return (
    <IconComponent
      height={iconSize}
      width={iconSize}
      x={x + 3}
      y={y + nodeHeight / 2 - iconSize / 2}
      fill={payload.sector.color}
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
        <>
          <ChooseIcon payload={payload} x={x} y={y} nodeHeight={height} />
          <text x={x + 30} y={y + height / 2} stroke={payload.sector.color}>
            {payload.value} {label}
          </text>
        </>
      )}

      {isTotal && (
        <text x={x - 125} y={y + height / 2} stroke="#776464">
          {label}: {payload.value}
        </text>
      )}
    </Layer>
  );
};

export default NodeWithIcon;
