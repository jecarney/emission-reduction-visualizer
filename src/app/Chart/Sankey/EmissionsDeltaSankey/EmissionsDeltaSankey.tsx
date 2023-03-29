import { FC } from 'react';
import { Sankey } from 'recharts';

import { ChangeFromBase } from '../../../Emissions/emission.model';
import NodeWithIcon from '../NodeWithIcon/NodeWithIcon';
import { SankeyData } from '../sankey-data.model';
import { SankeyLink } from '../sankey-link.model';
import { SankeyNode } from '../sankey-node.model';
import './EmissionsDeltaSankey.css';

interface EmissionsDeltaSankeyProps {
  changeFromBase: ChangeFromBase;
}

const EmissionsDeltaSankey: FC<EmissionsDeltaSankeyProps> = ({
  changeFromBase,
}) => {
  const colors = {
    lightBlue: '#A3C1AD',
    darkBlue: '#007791',
    reductionGreen: '#74C365',
    increaseRed: '#A52A2A',
  };

  const nodes: SankeyNode[] = [
    { name: 'reductions-total', fill: colors.reductionGreen },
    { name: 'remaining-total', fill: colors.lightBlue },
    { name: 'increase-total', fill: colors.increaseRed },
  ];

  const reductionTotalIndex = nodes.findIndex(
    (node) => node.name === 'reductions-total'
  );

  const remainingTotalIndex = nodes.findIndex(
    (node) => node.name === 'remaining-total'
  );

  const increaseTotalNodeIndex = nodes.findIndex(
    (node) => node.name === 'increase-total'
  );

  const links: SankeyLink[] = changeFromBase.changes
    .sort((a, b) => a.delta - b.delta)
    .flatMap(({ baseEmission, delta }) => {
      const { sector } = baseEmission;

      const emissionBySectorNode: SankeyNode = {
        name: `emissions-${sector.id}`,
        fill: colors.darkBlue,
        sector,
      };

      const emissionNodeIndex = nodes.length;

      nodes.push(emissionBySectorNode);

      const remaining = baseEmission.value + delta;

      return [
        {
          source: emissionNodeIndex,
          target: delta < 0 ? reductionTotalIndex : increaseTotalNodeIndex,
          value: Math.abs(delta),
          color: delta < 0 ? colors.reductionGreen : colors.increaseRed,
        },
        {
          source: emissionNodeIndex,
          target: remainingTotalIndex,
          value: remaining,
          color: colors.lightBlue,
        },
      ];
    });

  const data: SankeyData = { nodes, links };

  return (
    <Sankey
      width={800}
      height={600}
      data={data}
      node={<NodeWithIcon />}
      nodeWidth={25}
      nodePadding={5}
      margin={{ top: 50, bottom: 50, left: 50, right: 50 }}
    />
  );
};

export default EmissionsDeltaSankey;
