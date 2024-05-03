import ReactFlow, { MiniMap, useNodesState, NodeToolbar } from "reactflow";
import { useEffect, useState } from "react";

import "reactflow/dist/style.css";

export const diagramsData = {
  sql: {
    initialNodes: [
      { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
      { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
    ],

    initialEdges: [{ id: "e1-2", source: "1", target: "2" }],
  },

  php: {
    initialNodes: [
      { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
      { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
      {
        id: "3",
        position: { x: 200, y: 0 },
        data: { label: "3" },
      },
      {
        id: "4",
        position: { x: 300, y: 200 },
        data: { label: "4" },
      },
    ],

    initialEdges: [
      { id: "e1-2", source: "1", target: "2" },
      { id: "e2-3", source: "2", target: "3" },
      { id: "e3-4", source: "3", target: "4" },
    ],
  },
};

export const Diagram = ({ diagramName }) => {
  return (
    <div style={{ width: "100vw", height: "500px" }}>
      <ReactFlow
        nodes={diagramsData[diagramName].initialNodes}
        edges={diagramsData[diagramName].initialEdges}
        onNodeClick={(e, nodeClicked) => {
          console.log("clicked node", nodeClicked.id);
        }}
      >
        <MiniMap nodeStrokeWidth={3} />
      </ReactFlow>
    </div>
  );
};

export const DiagramNameSetters = ({ setDiagramName }) => {
  return (
    <div>
      <button onClick={() => setDiagramName("sql")}>SQL</button>
      <button onClick={() => setDiagramName("php")}>PHP</button>
    </div>
  );
};

export const Roadmaps = () => {
  const [diagramName, setDiagramName] = useState("sql");

  return (
    <div>
      <DiagramNameSetters setDiagramName={setDiagramName} />

      <Diagram diagramName={diagramName} />
    </div>
  );
};

export default Roadmaps;
