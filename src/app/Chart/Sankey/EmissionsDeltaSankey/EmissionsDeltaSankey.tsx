import { FC } from 'react';
import { ResponsiveContainer, Sankey } from 'recharts';

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
    emissions: '#a9b69f',
    reduction: '#87cefa',
  };

  const nodes: SankeyNode[] = [
    { name: 'reductions-total', fill: colors.reduction },
    { name: 'remaining-total', fill: colors.emissions },
    { name: 'increase-total', fill: colors.emissions },
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
        fill: colors.emissions,
        sector,
      };

      const emissionNodeIndex = nodes.length;

      nodes.push(emissionBySectorNode);

      const reduction = delta < 0 ? delta : 0;
      const remaining = baseEmission.value + reduction;

      return [
        {
          source: emissionNodeIndex,
          target: delta < 0 ? reductionTotalIndex : increaseTotalNodeIndex,
          value: Math.abs(delta),
          fill: delta < 0 ? colors.reduction : colors.emissions,
        },
        {
          source: emissionNodeIndex,
          target: remainingTotalIndex,
          value: remaining,
          fill: colors.emissions,
        },
      ];
    });

  const data: SankeyData = { nodes, links };

  return (
    <ResponsiveContainer width="80%" height="80%">
      <Sankey
        width={800}
        height={600}
        data={data}
        node={<NodeWithIcon />}
        nodeWidth={25}
        nodePadding={5}
        margin={{ top: 50, bottom: 50, left: 50, right: 50 }}
      />
    </ResponsiveContainer>
  );
};

export default EmissionsDeltaSankey;
