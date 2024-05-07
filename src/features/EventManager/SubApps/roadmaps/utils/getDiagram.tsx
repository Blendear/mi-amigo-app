import { createEdges } from "./createEdges";

export const getDiagram = (nodes) => {
  // Assigning ids based on the index
  const nodesWithCalculatedIds = nodes.map((node, index) => {
    return {
      ...node,
      id: index.toString(),
    };
  });

  return {
    initialNodes: nodesWithCalculatedIds,
    initialEdges: createEdges(nodesWithCalculatedIds),
  };
};
