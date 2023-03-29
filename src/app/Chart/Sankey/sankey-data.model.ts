import { SankeyLink } from './sankey-link.model';
import { SankeyNode } from './sankey-node.model';

export interface SankeyData {
  nodes: SankeyNode[];
  links: SankeyLink[];
}
