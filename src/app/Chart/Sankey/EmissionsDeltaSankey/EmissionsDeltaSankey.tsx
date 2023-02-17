import { ResponsiveSankey } from '@nivo/sankey';
import { FC } from 'react';
import './EmissionsDeltaSankey.css';

interface EmissionsDeltaSankeyProps {}

const data = {
  nodes: [
    {
      id: 'A',
      nodeColor: 'red',
    },
    {
      id: 'B',
      nodeColor: 'green',
    },
    {
      id: 'C',
      nodeColor: 'yellow',
    },
    {
      id: 'D',
      nodeColor: '#57aa4a',
    },
    {
      id: 'E',
      nodeColor: '#d24a3e',
    },
    {
      id: 'F',
      nodeColor: '#9c76c2',
    },
  ],
  links: [
    {
      source: 'F',
      target: 'C',
      value: 5,
      nodeColor: '#000000',
    },
    {
      source: 'F',
      target: 'B',
      value: 5,
      nodeColor: '#000000',
    },
    {
      source: 'F',
      target: 'A',
      value: 5,
      nodeColor: '#000000',
    },
    {
      source: 'A',
      target: 'D',
      value: 5,
      nodeColor: '#000000',
    },
    {
      source: 'A',
      target: 'E',
      value: 5,
      nodeColor: '#000000',
    },
  ],
};
const EmissionsDeltaSankey: FC<EmissionsDeltaSankeyProps> = () => {
  return <ResponsiveSankey data={data} colors={(node) => node.nodeColor} />;
};

export default EmissionsDeltaSankey;
