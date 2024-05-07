import { Edge, Node } from "reactflow";

export type DataPropertyOfTheinitialNode = {
  levelOfNestedness: number;
  label: string;
  imagePath: string;
  daysBeforeRepetitionNeeded: number;
  lastRepeatDateString: string;
  videosAndNotesByVariants: {
    variant: string; // name of the way of explanation (everyone reacts to different ways of expalantions better or worse) like "Gamer Slang" or "Censored" aka"Formal Speech"

    explanation: {
      quickReminder: {
        shortDescriptionFun: {
          imagePath: string;
          text: string;
        };
      };

      shortDescriptionSerious: {
        imagePath: string;
        text: string;
      };
    };

    longFull: {
      video: {
        ytVideoId: string;
        importantNotes: {
          proposalsToUpdateTheVideoWith: string[]; // temporary, before the video gets updated or the proposal gets rejected - like "the X in A is false, its actually Y"
          friendlyProtips: string[]; // like "watch wiuth subtitles & at 0.75 speed - the guy speaks fast!"
        };
        additionalLinks: { title: string; url: string }[];
      };

      transcript: { typeOfContent: "img" | "txt"; content: string }[]; // it will be renrered as images and/or text chunks. Like a list of milestones captured from the video
    };

    // actual use cases examples ot train along
    exercisesWithSolutions: {
      // it's an object, since maybe some additional props will be added in the future
      imagePath: string;
    }[];
  }[];
};

// single elemnt of the "initialNodes" array
export type SingleRawInitialNodeType = {
  position: { x: number; y: number };
  data: DataPropertyOfTheinitialNode;
};

export type DiagramsDataType = {
  [key: string]: {
    initialNodes: Node[];
    initialEdges: Edge[];
  };
};

export type RoadmapsContextType = {
  // TODO: Add specific types
  diagrams;
  setDiagrams;
  diagramName;
  setDiagramName;
  nodeId;
  setNodeId;
  updateNode;
};
