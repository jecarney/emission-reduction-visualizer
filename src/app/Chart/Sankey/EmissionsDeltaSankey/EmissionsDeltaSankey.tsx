import { ResponsiveSankey } from '@nivo/sankey';
import { FC } from 'react';
import { ChangeFromBase } from '../../../Emissions/emission.model';
import './EmissionsDeltaSankey.css';

interface EmissionsDeltaSankeyProps {
  changeFromBase: ChangeFromBase;
}

const lightBlue = '#A3C1AD';
const middleBlue = '#5F9EA0';
const darkBlue = '#007791';
const reductionGreen = '#74C365';
const increaseRed = '#A52A2A';

const EmissionsDeltaSankey: FC<EmissionsDeltaSankeyProps> = ({
  changeFromBase,
}) => {
  const remainingTotalId = `remaining-total`;
  const remainingTotalNode = {
    id: remainingTotalId,
    nodeColor: lightBlue,
  };

  const reductionTotalId = `reductions-total`;
  const reductionTotalNode = {
    id: reductionTotalId,
    nodeColor: reductionGreen,
  };

  const increaseTotalId = `increase-total`;
  const increaseTotalNode = {
    id: increaseTotalId,
    nodeColor: increaseRed,
  };

  let nodes: Array<{ id: string; nodeColor: string }> = [
    reductionTotalNode,
    remainingTotalNode,
    increaseTotalNode,
  ];
  let links: Array<{
    source: string;
    target: string;
    value: number;
    nodeColor: string;
  }> = [];

  changeFromBase.changes
    .sort((a, b) => {
      return a.delta - b.delta;
    })
    .forEach((change) => {
      const { baseEmission, delta } = change;
      const { sector } = baseEmission;
      const emissionBySectorId = `emissions-${sector.id}`;
      const emissionBySectorNode = {
        id: emissionBySectorId,
        nodeColor: darkBlue,
      };

      nodes = [...nodes, emissionBySectorNode];

      const deltaNodeId = `delta-${sector.id}`;
      if (delta < 0) {
        const deltaNode = {
          id: deltaNodeId,
          nodeColor: reductionGreen,
        };
        nodes = [...nodes, deltaNode];
        const deltaLink = {
          source: emissionBySectorId,
          target: deltaNodeId,
          value: Math.abs(delta),
          nodeColor: reductionGreen,
        };

        const reductionTotalLink = {
          source: deltaNodeId,
          target: reductionTotalId,
          value: Math.abs(delta),
          nodeColor: reductionGreen,
        };

        links = [...links, deltaLink, reductionTotalLink];
      } else {
        const deltaNode = {
          id: deltaNodeId,
          nodeColor: increaseRed,
        };
        nodes = [...nodes, deltaNode];
        const deltaLink = {
          source: emissionBySectorId,
          target: deltaNodeId,
          value: Math.abs(delta),
          nodeColor: increaseRed,
        };

        const increaseTotalLink = {
          source: deltaNodeId,
          target: increaseTotalId,
          value: Math.abs(delta),
          nodeColor: increaseRed,
        };

        links = [...links, deltaLink, increaseTotalLink];
      }

      const remainingEmissionsBySectorId = `remaining-${sector.id}`;

      const remainingNode = {
        id: remainingEmissionsBySectorId,
        nodeColor: middleBlue,
      };
      nodes = [...nodes, remainingNode];

      const remaining = baseEmission.value + delta;

      const remainingEmissionsBySectorIdLink = {
        source: emissionBySectorId,
        target: remainingEmissionsBySectorId,
        value: remaining,
        nodeColor: lightBlue,
      };

      const remainingTotalLink = {
        source: remainingEmissionsBySectorId,
        target: remainingTotalId,
        value: remaining,
        nodeColor: lightBlue,
      };

      links = [...links, remainingTotalLink, remainingEmissionsBySectorIdLink];
    });

  const data = {
    nodes,
    links,
  };
  return (
    <ResponsiveSankey
      data={data}
      colors={(node) => node.nodeColor}
      sort="input"
      nodeSpacing={1}
      nodeOpacity={1}
      nodeBorderWidth={0}
      nodeBorderColor="#f5f5dc"
      nodeThickness={25}
      nodeBorderRadius={2}
      linkOpacity={0.9}
      enableLinkGradient
      labelPosition="outside"
      label={(node) => `${node.id}: ${node.value}`}
      labelTextColor="#f5f5dc"
      // theme={{
      //   fontSize: 14,
      //   textColor: 'rgba(0, 0, 0, 1)',
      //   // background: 'rgba(0, 0, 0, 0.5)',
      // }}
    />
  );
};

export default EmissionsDeltaSankey;
