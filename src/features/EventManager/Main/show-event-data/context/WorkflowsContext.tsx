import React, { createContext } from "react";

type WorkflowsContextType = {
  update: boolean;
  forceUpdate: React.Dispatch<React.SetStateAction<boolean>>;
};

const WorkflowsContext = createContext<WorkflowsContextType>(
  {} as WorkflowsContextType
);

export default WorkflowsContext;
