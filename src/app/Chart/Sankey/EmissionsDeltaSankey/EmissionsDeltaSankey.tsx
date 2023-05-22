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

  let nodes: SankeyNode[] = [
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

  let baseYearTotal = 0;
  let currentYearTotal = 0;

  let links: SankeyLink[] = [];
  changeFromBase.changes
    .sort((a, b) => a.delta - b.delta)
    .forEach(({ baseEmission, delta }) => {
      const { sector } = baseEmission;
      const baseEmissionValue = baseEmission.value;
      baseYearTotal += baseEmissionValue;
      currentYearTotal += baseEmissionValue + delta;

      const emissionBySectorNode: SankeyNode = {
        name: `emissions-${sector.id}`,
        fill: colors.emissions,
        sector,
      };

      const emissionNodeIndex = nodes.length;

      nodes = [...nodes, emissionBySectorNode];

      const reduction = delta < 0 ? delta : 0;
      const remaining = baseEmissionValue + reduction;

      const deltaLink = {
        source: emissionNodeIndex,
        target: delta < 0 ? reductionTotalIndex : increaseTotalNodeIndex,
        value: Math.abs(delta),
        fill: delta < 0 ? colors.reduction : colors.emissions,
      };

      const remaininglink = {
        source: emissionNodeIndex,
        target: remainingTotalIndex,
        value: remaining,
        fill: colors.emissions,
      };

      links = [...links, deltaLink, remaininglink];
    });

  const data: SankeyData = { nodes, links };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <Sankey
        width={800}
        height={600}
        data={data}
        node={<NodeWithIcon />}
        nodeWidth={25}
        nodePadding={5}
      />
    </ResponsiveContainer>
  );
};

export default EmissionsDeltaSankey;
