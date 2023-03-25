import { ResponsiveSankey } from '@nivo/sankey';
import { FC } from 'react';
import { ChangeFromBase } from '../../../Emissions/emission.model';
import './EmissionsDeltaSankey.css';

interface EmissionsDeltaSankeyProps {
  changeFromBase: ChangeFromBase;
}

const EmissionsDeltaSankey: FC<EmissionsDeltaSankeyProps> = ({
  changeFromBase,
}) => {
  const lightBlue = '#A3C1AD';
  const middleBlue = '#5F9EA0';
  const darkBlue = '#007791';
  const reductionGreen = '#74C365';
  const increaseRed = '#A52A2A';

  const remainingTotalNode = { id: 'remaining-total', nodeColor: lightBlue };
  const reductionTotalNode = {
    id: 'reductions-total',
    nodeColor: reductionGreen,
  };
  const increaseTotalNode = { id: 'increase-total', nodeColor: increaseRed };

  let nodes = [reductionTotalNode, remainingTotalNode, increaseTotalNode];
  let links: Array<{
    source: string;
    target: string;
    value: number;
    nodeColor: string;
  }> = [];

  changeFromBase.changes
    .sort((a, b) => a.delta - b.delta)
    .forEach(({ baseEmission, delta }) => {
      const { sector } = baseEmission;
      const emissionBySectorNode = {
        id: `emissions-${sector.id}`,
        nodeColor: darkBlue,
      };
      nodes = [...nodes, emissionBySectorNode];

      // const deltaNodeId = `delta-${sector.id}`;
      // const deltaNode = {
      //   id: deltaNodeId,
      //   nodeColor: delta < 0 ? reductionGreen : increaseRed,
      // };
      // nodes = [...nodes, deltaNode];

      // const deltaLink = {
      //   source: emissionBySectorNode.id,
      //   target: deltaNodeId,
      //   value: Math.abs(delta),
      //   nodeColor: delta < 0 ? reductionGreen : increaseRed,
      // };
      const totalLink = {
        source: emissionBySectorNode.id,
        target: delta < 0 ? reductionTotalNode.id : increaseTotalNode.id,
        value: Math.abs(delta),
        nodeColor: delta < 0 ? reductionGreen : increaseRed,
      };
      links = [...links, totalLink];

      // const remainingEmissionsBySectorId = `remaining-${sector.id}`;
      // const remainingNode = {
      //   id: remainingEmissionsBySectorId,
      //   nodeColor: middleBlue,
      // };
      // nodes = [...nodes, remainingNode];

      const remaining = baseEmission.value + delta;
      // const remainingEmissionsBySectorIdLink = {
      //   source: emissionBySectorNode.id,
      //   target: remainingEmissionsBySectorId,
      //   value: remaining,
      //   nodeColor: lightBlue,
      // };
      const remainingTotalLink = {
        source: emissionBySectorNode.id,
        target: remainingTotalNode.id,
        value: remaining,
        nodeColor: lightBlue,
      };
      links = [...links, remainingTotalLink];
    });
  //
  const data = { nodes, links };
  // const label = (node): string => `${node.id}: ${node.value}`;
  const label = ''; // TODO: add labels

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
      label={label}
      labelTextColor="#f5f5dc"
      // theme={{
      //   fontSize: 14,
      //   textColor: 'rgba(0, 0, 0, 1)',
      //   // background: 'rgba(0, 0, 0, 0.5)',
      // }}
      // linkTooltip={(node) => <span>Custom tooltip for link</span>}
    />
  );
};

export default EmissionsDeltaSankey;
