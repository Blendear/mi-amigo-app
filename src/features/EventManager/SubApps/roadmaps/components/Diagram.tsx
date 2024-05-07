/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import ReactFlow from "reactflow";
import { useContext } from "react";
import { RoadmapsContext } from "../context/RoadmapsContext";

export const Diagram = () => {
  const { diagrams, diagramName, setNodeId } = useContext(RoadmapsContext);
  return (
    <div style={{ width: "100vw", height: "85vh" }}>
      <ReactFlow
        nodes={diagrams[diagramName].initialNodes}
        edges={diagrams[diagramName].initialEdges}
        onNodeClick={(e, nodeClicked) => {
          setNodeId(parseInt(nodeClicked.id));
        }}
      >
        {/* <MiniMap nodeStrokeWidth={3} /> */}
      </ReactFlow>
    </div>
  );
};
