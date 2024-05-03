/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import "reactflow/dist/style.css";
import ReactFlow, { MiniMap, Node, Edge, Background } from "reactflow";
import { useCallback, useRef, useState } from "react";
import { DialogModal } from "@/features/EventManager/Main/dialog-modals/components/DialogModal";
import dynamic from "next/dynamic";
import Video from "@/features/EventManager/SubApps/yt-watcher/components/Video";

export type DiagramsDataType = {
  [key: string]: {
    initialNodes: Node[];
    initialEdges: Edge[];
  };
};

export const diagramsData: DiagramsDataType = {
  sql: {
    initialNodes: [
      {
        id: "0",
        position: { x: 0, y: 0 },
        data: {
          label: "What and why is SQL",
          imagePath: "https://placehold.co/600x400",
          whenToRepeat: "1 day",
          videosAndNotesByVariants: [
            {
              variant: "Gamer Speech",
              ytVideoId: "dQw4w9WgXcQ",
              notesToTheVideo: ["This is a note", "This is another note"],
              description: "This is a description",
              additionalLinks: [],
            },
            {
              variant: "Censored Speech",
              ytVideoId: "dQw4w9WgXcQ",
              notesToTheVideo: ["This is a note", "This is another note"],
              description: "This is a description",
              additionalLinks: [],
            },
          ],
        },
      },
      {
        id: "1",
        position: { x: 0, y: 100 },
        data: {
          label: "Basic Syntax",
          imagePath: "https://placehold.co/600x400",
          whenToRepeat: "3 days",
          videosAndNotesByVariants: [
            {
              variant: "Gamer Speech",
              ytVideoId: "dQw4w9WgXcQ",
              notesToTheVideo: ["This is a note", "This is another note"],
              description: "This is a description",
              additionalLinks: [],
            },
            {
              variant: "Censored Speech",
              ytVideoId: "aaaaaaaaaaa",
              notesToTheVideo: ["This is a note", "This is another note"],
              description: "This is a description",
              additionalLinks: [],
            },
          ],
        },
      },
    ],

    initialEdges: [{ id: "e0-1", source: "0", target: "1" }],
  },

  php: {
    initialNodes: [
      {
        id: "0",
        position: { x: 0, y: 0 },
        data: {
          label: "What and why is PHP",
          imagePath: "https://placehold.co/600x400",
          whenToRepeat: "2 weeks",
          videosAndNotesByVariants: [
            {
              variant: "Gamer Speech",
              ytVideoId: "dQw4w9WgXcQ",
              notesToTheVideo: ["This is a note", "This is another note"],
              description: "This is a description",
              additionalLinks: [],
            },
          ],
        },
      },
      {
        id: "1",
        position: { x: 0, y: 100 },
        data: {
          label: "Basic Syntax",
          imagePath: "https://placehold.co/600x400",
          whenToRepeat: "1 week",
          videosAndNotesByVariants: [
            {
              variant: "Censored Speech",
              ytVideoId: "dQw4w9WgXcQ",
              notesToTheVideo: ["This is a note", "This is another note"],
              description: "This is a description",
              additionalLinks: [],
            },
          ],
        },
      },

      {
        id: "2",
        position: { x: 0, y: 200 },
        data: {
          label: "Joining Queries",
          imagePath: "https://placehold.co/600x400",
          whenToRepeat: "1 month",
          videosAndNotesByVariants: [
            {
              variant: "Censored Speech",
              ytVideoId: "dQw4w9WgXcQ",
              notesToTheVideo: ["This is a note", "This is another note"],
              description: "This is a description",
              additionalLinks: [],
            },
          ],
        },
      },
    ],

    initialEdges: [{ id: "e0-1", source: "0", target: "1" }],
  },
};

export const Diagram = ({ diagrams, diagramName, setNodeId }) => {
  return (
    <div style={{ width: "100vw", height: "500px" }}>
      <ReactFlow
        nodes={diagrams[diagramName].initialNodes}
        edges={diagrams[diagramName].initialEdges}
        onNodeClick={(e, nodeClicked) => {
          setNodeId(parseInt(nodeClicked.id));
          console.log("nodeClicked", nodeClicked.id);
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
      {Object.keys(diagramsData).map((diagramName) => {
        return (
          <button
            key={diagramName}
            css={universalCss.container}
            onClick={() => {
              setDiagramName(diagramName);
            }}
          >
            {diagramName}
          </button>
        );
      })}
    </div>
  );
};

export const BtnsWhenToRepeat = ({ nodeDataRef }) => {
  const titles = ["1 day", "3 days", "1 week", "2 weeks", "1 month"];

  const [currentTitle, setCurrentTitle] = useState(
    nodeDataRef.current.whenToRepeat
  );

  return (
    <div css={{ display: "grid", gridAutoFlow: "column" }}>
      {titles.map((title, index) => {
        return (
          <button
            key={index}
            css={[
              universalCss.container,
              universalCss.button(currentTitle === title),
            ]}
            onClick={() => {
              setCurrentTitle(titles[index]);
              nodeDataRef.current.whenToRepeat = title;
            }}
          >
            {title}
          </button>
        );
      })}
    </div>
  );
};

export const DetailsBasedOnVariant = ({ nodeDataRef, nodeId }) => {
  const [variantIndex, setVariantIndex] = useState(0);

  const btnsVariantSetters = nodeDataRef.current.videosAndNotesByVariants.map(
    (variant, index) => {
      return (
        <button
          key={index}
          css={[
            universalCss.container,
            universalCss.button(variantIndex === index),
          ]}
          onClick={() => {
            setVariantIndex(index);
            console.log("variantIndex", variantIndex);
          }}
        >
          {variant.variant}
        </button>
      );
    }
  );

  //   console.log("rerender");

  return (
    <>
      <div css={{ display: "grid", gridAutoFlow: "column" }}>
        {btnsVariantSetters}
      </div>
      <p>
        {nodeId &&
          nodeDataRef.current.videosAndNotesByVariants[variantIndex]
            .description}
      </p>
      <Video
        yTvideoId={
          nodeDataRef.current.videosAndNotesByVariants[variantIndex].ytVideoId
        }
      />
    </>
  );
};

export const DiagramDetailsModal = ({
  diagramName,
  nodeId,
  setNodeId,
  updateNode,
}) => {
  const Details = () => {
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

    const nodeDataRef = useRef(
      diagramsData[diagramName].initialNodes[nodeId].data
    );

    return (
      <div>
        <p>
          Diagram: {diagramName} Node: {nodeId}
        </p>

        <BtnsWhenToRepeat nodeDataRef={nodeDataRef} />

        <DetailsBasedOnVariant nodeDataRef={nodeDataRef} nodeId={nodeId} />

        <button
          onClick={() => {
            // TODO: Trigge the updateNode function from the parent component
            updateNode("style", diagramName, nodeId, {
              backgroundColor: {
                "1 day": "red",
                "3 days": "orange",
                "1 week": "yellow",
                "2 weeks": "green",
                "1 month": "blue",
              }[nodeDataRef.current.whenToRepeat],
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

const Roadmaps = () => {
  const [diagrams, setDiagrams] = useState(diagramsData);

  const [diagramName, setDiagramName] = useState("sql");

  const [nodeId, setNodeId] = useState(null);

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

  // TODO: Remake all prop passing into a context
  return (
    <div>
      <DiagramNameSetters setDiagramName={setDiagramName} />

      <button
        onClick={() => {
          //   updateNode("data", diagramName, 1, { label: "New label" });
          updateNode("style", diagramName, 1, { backgroundColor: "green" });
        }}
      >
        Color new
      </button>
      <Diagram
        diagrams={diagrams}
        diagramName={diagramName}
        setNodeId={setNodeId}
      />

      <DiagramDetailsModal
        diagramName={diagramName}
        nodeId={nodeId}
        setNodeId={setNodeId}
        updateNode={updateNode}
      />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Roadmaps), {
  ssr: false,
});
