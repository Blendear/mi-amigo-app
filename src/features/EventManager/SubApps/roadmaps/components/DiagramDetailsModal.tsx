/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { useContext, useRef, useState } from "react";
import { BtnsDaysBeforeRepetitionNeeded } from "./BtnsDaysBeforeRepetitionNeeded";
import { DetailsBasedOnVariant } from "./DetailsBasedOnVariant";
import { DialogModal } from "@/features/EventManager/Main/dialog-modals/components/DialogModal";
import { RoadmapsContext } from "../context/RoadmapsContext";
import { DataPropertyOfTheinitialNode } from "../types";
import { DetailsContext } from "../context/DetailsContext";

export const DiagramDetailsModal = () => {
  const { diagrams, diagramName, nodeId, setNodeId, updateNode } =
    useContext(RoadmapsContext);

  const Details = () => {
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

    const nodeDataRef = useRef<DataPropertyOfTheinitialNode>(
      diagrams[diagramName].initialNodes[nodeId].data
    );

    return (
      <DetailsContext.Provider value={{ nodeDataRef }}>
        <div css={{ display: "grid", justifyItems: "center" }}>
          <div
            css={{
              display: "grid",
              rowGap: "4rem",

              "@media (orientation: landscape)": {
                width: "800px",
              },
            }}
          >
            {/* TODO: Use the context nodeDataRef instead of the props passing in the components below */}
            <BtnsDaysBeforeRepetitionNeeded nodeDataRef={nodeDataRef} />

            <DetailsBasedOnVariant nodeDataRef={nodeDataRef} nodeId={nodeId} />

            <button
              onClick={() => {
                updateNode("data", diagramName, nodeId, {
                  daysBeforeRepetitionNeeded:
                    nodeDataRef.current.daysBeforeRepetitionNeeded,
                });
              }}
              css={[
                universalCss.container,
                { backgroundColor: hasUnsavedChanges ? "green" : "grey" },
              ]}
            >
              Save changes
            </button>
          </div>
        </div>
      </DetailsContext.Provider>
    );
  };

  return (
    <DialogModal
      isOpen={nodeId !== null}
      onClose={() => {
        setNodeId(null);
      }}
    >
      <div>{nodeId ? <Details /> : <></>}</div>
    </DialogModal>
  );
};
