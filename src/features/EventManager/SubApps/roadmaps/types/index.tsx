import { Edge, Node } from "reactflow";

export type DiagramsDataType = {
  [key: string]: {
    initialNodes: Node[];
    initialEdges: Edge[];
  };
};

export type RoadmapsContextType = {
  // TODO: Add specific types
  diagrams;
  setDiagrams;
  diagramName;
  setDiagramName;
  nodeId;
  setNodeId;
  updateNode;
};
