/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import "reactflow/dist/style.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { DialogModal } from "@/features/EventManager/Main/dialog-modals/components/DialogModal";
import dynamic from "next/dynamic";
import Video from "@/features/EventManager/SubApps/yt-watcher/components/Video";
import { importedDiagramsDataWithoutNodeIdsAndWithoutInitialEdges } from "@/features/EventManager/SubApps/roadmaps/data/importedDiagramsDataWithoutNodeIdsAndWithoutInitialEdges";
import { getDiagram } from "@/features/EventManager/SubApps/roadmaps/utils/getDiagram";
import { getNodeBorderColor } from "@/features/EventManager/SubApps/roadmaps/utils/getNodeBorderColor";
import { diagramsData } from "@/features/EventManager/SubApps/roadmaps/data/diagramsData";
import { DiagramNameTogglers } from "@/features/EventManager/SubApps/roadmaps/components/DiagramNameTogglers";
import { Diagram } from "@/features/EventManager/SubApps/roadmaps/components/Diagram";
import { DiagramDetailsModal } from "@/features/EventManager/SubApps/roadmaps/components/DiagramDetailsModal";
import { RoadmapsContext } from "@/features/EventManager/SubApps/roadmaps/context/RoadmapsContext";

const Roadmaps = () => {
  const [diagrams, setDiagrams] = useState(diagramsData);

  const [diagramName, setDiagramName] = useState("sql");

  const [nodeId, setNodeId] = useState(null);

  useEffect(() => {
    const newDiagrams = { ...diagrams };

    for (const diagramName in newDiagrams) {
      for (const node of newDiagrams[diagramName].initialNodes) {
        // give each node a style based on the days left before repetition is needed

        const newColor = getNodeBorderColor(node);

        const todoStyling =
          newColor === "purple"
            ? {
                color: "white",
                backgroundColor: "purple",
              }
            : {};

        node.style = {
          borderColor: newColor,
          borderWidth: "5px",

          ...todoStyling,
        };

        // calculate the position (y) based on the amount of other nodes & (x) levelOfNestedness
        const leftMarginBasedOnLevelOfNestedness =
          node.data.levelOfNestedness * 150;

        let newPosition =
          newDiagrams[diagramName].initialNodes.length > 1
            ? {
                x: leftMarginBasedOnLevelOfNestedness,
                y: 100 * parseInt(node.id),
              }
            : { x: leftMarginBasedOnLevelOfNestedness, y: 0 };

        node.position = newPosition;
      }
    }
  }, [diagrams]);

  const updateNode = useCallback(
    (whatToUpdate, diagramName, nodeId, newNodeData) => {
      // whatToUpdate: "data" | "style". Since those are two separate props of the node data object
      const newDiagrams = { ...diagrams };
      newDiagrams[diagramName].initialNodes[nodeId][whatToUpdate] = {
        ...newDiagrams[diagramName].initialNodes[nodeId][whatToUpdate],
        ...newNodeData,
      };
      setDiagrams(newDiagrams);
    },
    []
  );

  return (
    <RoadmapsContext.Provider
      value={{
        diagrams,
        setDiagrams,
        diagramName,
        setDiagramName,
        nodeId,
        setNodeId,
        updateNode,
      }}
    >
      <article>
        <DiagramNameTogglers />

        <Diagram />

        <DiagramDetailsModal />
      </article>
    </RoadmapsContext.Provider>
  );
};

export default dynamic(() => Promise.resolve(Roadmaps), {
  ssr: false,
});
