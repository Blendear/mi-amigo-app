export const createEdges = (nodes) => {
  const edges = [];
  for (let i = 1; i < nodes.length; i++) {
    let closestPrecedingNodeIndex = -1;
    let minDistance = Infinity;
    for (let j = i - 1; j >= 0; j--) {
      if (nodes[j].data.levelOfNestedness < nodes[i].data.levelOfNestedness) {
        const distance = i - j;
        if (distance < minDistance) {
          closestPrecedingNodeIndex = j;
          minDistance = distance;
        }
      }
    }
    if (closestPrecedingNodeIndex !== -1) {
      edges.push({
        id: `e${closestPrecedingNodeIndex}-${i}`,
        source: nodes[closestPrecedingNodeIndex].id,
        target: nodes[i].id,
      });
    } else {
      edges.push({
        id: `e${0}-${i}`,
        source: nodes[0].id,
        target: nodes[i].id,
      });
    }
  }
  return edges;
};
