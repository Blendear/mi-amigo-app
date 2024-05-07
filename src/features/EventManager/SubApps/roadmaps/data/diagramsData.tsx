import { DiagramsDataType } from "../types";
import { getDiagram } from "../utils/getDiagram";
import { importedDiagramsDataWithoutNodeIdsAndWithoutInitialEdges } from "./importedDiagramsDataWithoutNodeIdsAndWithoutInitialEdges";

export const diagramsData: DiagramsDataType = Object.keys(
  importedDiagramsDataWithoutNodeIdsAndWithoutInitialEdges
).reduce(
  (acc, diagramName) => ({
    ...acc,
    [diagramName]: getDiagram(
      importedDiagramsDataWithoutNodeIdsAndWithoutInitialEdges[diagramName]
        .initialNodes
    ),
  }),
  {}
);
