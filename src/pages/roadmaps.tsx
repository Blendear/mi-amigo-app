import "reactflow/dist/style.css";
import ReactFlow, { MiniMap } from "reactflow";
import { useState } from "react";
import { DialogModal } from "@/features/EventManager/Main/dialog-modals/components/DialogModal";
import dynamic from "next/dynamic";
import { parse } from "path";

export const diagramsData = {
  sql: {
    initialNodes: [
      { id: "0", position: { x: 0, y: 0 }, data: { label: "0" } },
      { id: "1", position: { x: 0, y: 100 }, data: { label: "1" } },
    ],

    initialEdges: [{ id: "e0-1", source: "0", target: "1" }],

    nodeDetailsById: [
      {
        details: {
          title: "Node 0",
          description: "This is node 0",
        },
      },
      {
        details: {
          title: "Node 1",
          description: "This is node 1",
        },
      },
    ],
  },

  php: {
    initialNodes: [
      { id: "0", position: { x: 0, y: 0 }, data: { label: "0" } },
      { id: "1", position: { x: 0, y: 100 }, data: { label: "1" } },
      {
        id: "2",
        position: { x: 200, y: 0 },
        data: { label: "2" },
      },
      {
        id: "3",
        position: { x: 300, y: 200 },
        data: { label: "3" },
      },
    ],

    initialEdges: [
      { id: "e0-1", source: "0", target: "1" },
      { id: "e1-2", source: "1", target: "2" },
      { id: "e2-3", source: "2", target: "3" },
    ],

    nodeDetailsById: [
      {
        details: {
          title: "Node 0",
          description: "This is node 0",
        },
      },
      {
        details: {
          title: "Node 1",
          description: "This is node 1",
        },
      },
      {
        details: {
          title: "Node 2",
          description: "This is node 2",
        },
      },
      {
        details: {
          title: "Node 3",
          description: "This is node 3",
        },
      },
    ],
  },
};

export const Diagram = ({ diagramName, setNodeId }) => {
  return (
    <div style={{ width: "100vw", height: "500px" }}>
      <ReactFlow
        nodes={diagramsData[diagramName].initialNodes}
        edges={diagramsData[diagramName].initialEdges}
        onNodeClick={(e, nodeClicked) => {
          setNodeId(parseInt(nodeClicked.id));
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
      <button
        onClick={() => {
          setDiagramName("sql");
        }}
      >
        SQL
      </button>
      <button onClick={() => setDiagramName("php")}>PHP</button>
    </div>
  );
};

export const DiagramDetailsModal = ({ diagramName, nodeId, setNodeId }) => {
  return (
    <DialogModal
      isOpen={nodeId !== null}
      onClose={() => {
        setNodeId(null);
      }}
    >
      <div>
        <p>
          Diagram: {diagramName} Node: {nodeId}
        </p>
        <p>
          {" "}
          {nodeId &&
            diagramsData[diagramName].nodeDetailsById[nodeId].details
              .description}
        </p>
      </div>
    </DialogModal>
  );
};

const Roadmaps = () => {
  const [diagramName, setDiagramName] = useState("sql");

  const [nodeId, setNodeId] = useState(null);

  // TODO: Remake all prop passing into a context
  return (
    <div>
      <DiagramNameSetters setDiagramName={setDiagramName} />

      <Diagram diagramName={diagramName} setNodeId={setNodeId} />

      <DiagramDetailsModal
        diagramName={diagramName}
        nodeId={nodeId}
        setNodeId={setNodeId}
      />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Roadmaps), {
  ssr: false,
});
