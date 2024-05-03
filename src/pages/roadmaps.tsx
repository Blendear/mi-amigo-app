/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import "reactflow/dist/style.css";
import ReactFlow, { MiniMap, Node, Edge, Background } from "reactflow";
import { useCallback, useEffect, useRef, useState } from "react";
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
          levelOfNestedness: 0,
          label: "What and why is SQL",
          imagePath: "https://placehold.co/600x400",
          daysBeforeRepetitionNeeded: 1,
          lastRepeatDateString: "2024-05-01T00:00:00",
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
        position: { x: 0, y: 0 },
        data: {
          levelOfNestedness: 0,
          label: "Basic Syntax",
          imagePath: "https://placehold.co/600x400",
          daysBeforeRepetitionNeeded: 3,
          lastRepeatDateString: "2024-05-01T00:00:00",
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
      {
        id: "2",
        position: { x: 0, y: 0 },
        data: {
          levelOfNestedness: 1,
          label: "Syntax AAA",
          imagePath: "https://placehold.co/600x400",
          daysBeforeRepetitionNeeded: 7,
          lastRepeatDateString: "2024-05-01T00:00:00",
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
        id: "3",
        position: { x: 0, y: 0 },
        data: {
          levelOfNestedness: 1,
          label: "Syntax BBB",
          imagePath: "https://placehold.co/600x400",
          daysBeforeRepetitionNeeded: 7,
          lastRepeatDateString: "2024-05-01T00:00:00",
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
        id: "4",
        position: { x: 0, y: 0 },
        data: {
          levelOfNestedness: 2,
          label: "Child of Syntax BBB",
          imagePath: "https://placehold.co/600x400",
          daysBeforeRepetitionNeeded: 7,
          lastRepeatDateString: "2024-05-01T00:00:00",
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
        id: "5",
        position: { x: 0, y: 0 },
        data: {
          levelOfNestedness: 1,
          label: "Syntax CCC",
          imagePath: "https://placehold.co/600x400",
          daysBeforeRepetitionNeeded: 7,
          lastRepeatDateString: "2024-05-01T00:00:00",
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
    ],

    initialEdges: [{ id: "e0-1", source: "0", target: "1" }],
  },

  php: {
    initialNodes: [
      {
        id: "0",
        position: { x: 0, y: 0 },
        data: {
          levelOfNestedness: 0,
          label: "What and why is PHP",
          imagePath: "https://placehold.co/600x400",
          daysBeforeRepetitionNeeded: 14,
          lastRepeatDateString: "2024-05-01T00:00:00",
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
        position: { x: 0, y: 0 },
        data: {
          levelOfNestedness: 0,
          label: "Basic Syntax",
          imagePath: "https://placehold.co/600x400",
          daysBeforeRepetitionNeeded: 7,
          lastRepeatDateString: "2024-05-01T00:00:00",
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
        position: { x: 0, y: 0 },
        data: {
          levelOfNestedness: 0,
          label: "Joining Queries",
          imagePath: "https://placehold.co/600x400",
          daysBeforeRepetitionNeeded: 30,
          lastRepeatDateString: "2024-05-01T00:00:00",
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
    <div style={{ width: "100vw", height: "85vh" }}>
      <ReactFlow
        nodes={diagrams[diagramName].initialNodes}
        edges={diagrams[diagramName].initialEdges}
        onNodeClick={(e, nodeClicked) => {
          setNodeId(parseInt(nodeClicked.id));
        }}
      >
        <MiniMap nodeStrokeWidth={3} />
      </ReactFlow>
    </div>
  );
};

export const DiagramNameSetters = ({ setDiagramName, diagramName }) => {
  return (
    <div css={{ display: "grid", gridAutoFlow: "column" }}>
      {Object.keys(diagramsData).map((currentName) => {
        return (
          <button
            key={currentName}
            css={[
              universalCss.container,
              universalCss.button(currentName === diagramName),
            ]}
            onClick={() => {
              setDiagramName(currentName);
            }}
          >
            {currentName}
          </button>
        );
      })}
    </div>
  );
};

export const BtnsdaysBeforeRepetitionNeeded = ({ nodeDataRef }) => {
  const titles = [1, 3, 7, 14, 30];

  const [currentTitle, setCurrentTitle] = useState(
    nodeDataRef.current.daysBeforeRepetitionNeeded
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
              nodeDataRef.current.daysBeforeRepetitionNeeded = title;
            }}
          >
            {title} days
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
          }}
        >
          {variant.variant}
        </button>
      );
    }
  );

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
          nodeDataRef.current.videosAndNotesByVariants[variantIndex]
            .ytVideoId || ""
        }
      />
    </>
  );
};

export const DiagramDetailsModal = ({
  diagrams,
  diagramName,
  nodeId,
  setNodeId,
  updateNode,
}) => {
  const Details = () => {
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

    const nodeDataRef = useRef(diagrams[diagramName].initialNodes[nodeId].data);

    return (
      <div>
        <p>
          Diagram: {diagramName} Node: {nodeId}
        </p>

        <BtnsdaysBeforeRepetitionNeeded nodeDataRef={nodeDataRef} />

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

export const getNodeBorderColor = (node) => {
  return {
    "past deadline": "red",
    "today or tomorrow": "orange",
    "3-7 days": "yellow",
    "over a week": "green",
  }[
    (() => {
      const dateNow = new Date();

      const lastRepeatDate = new Date(node.data.lastRepeatDateString);

      const differenceInDays = Math.floor(
        (dateNow.getTime() - lastRepeatDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      const deadlineOfRepetition =
        node.data.daysBeforeRepetitionNeeded - differenceInDays;

      let colorOfBorder = "";

      if (deadlineOfRepetition < 0) {
        colorOfBorder = "past deadline";
      } else if (deadlineOfRepetition === 0) {
        colorOfBorder = "today or tomorrow";
      } else if (deadlineOfRepetition <= 2) {
        colorOfBorder = "today or tomorrow";
      } else if (deadlineOfRepetition <= 7) {
        colorOfBorder = "3-7 days";
      } else {
        colorOfBorder = "over a week";
      }

      return colorOfBorder;
    })()
  ];
};

const Roadmaps = () => {
  const [diagrams, setDiagrams] = useState(diagramsData);

  const [diagramName, setDiagramName] = useState("sql");

  const [nodeId, setNodeId] = useState(null);

  useEffect(() => {
    const newDiagrams = { ...diagrams };

    for (const diagramName in newDiagrams) {
      for (const node of newDiagrams[diagramName].initialNodes) {
        // give each node a style based on the days left before repetition is needed
        node.style = {
          borderColor: getNodeBorderColor(node),
          borderWidth: "5px",
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
    <div>
      <DiagramNameSetters
        setDiagramName={setDiagramName}
        diagramName={diagramName}
      />

      <Diagram
        diagrams={diagrams}
        diagramName={diagramName}
        setNodeId={setNodeId}
      />

      <DiagramDetailsModal
        diagrams={diagrams}
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
