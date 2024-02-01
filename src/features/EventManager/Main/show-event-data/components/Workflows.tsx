/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { WorkflowsProps } from "../types";
import Steps from "./Steps";
import WorkflowVariants from "./WorkflowVariants";
import AddOns from "./AddOns";
import { useState } from "react";
import WorkflowsContext from "../context/WorkflowsContext";

const Workflows = ({}: WorkflowsProps) => {
  const [update, forceUpdate] = useState(false);

  return (
    <WorkflowsContext.Provider value={{ update, forceUpdate }}>
      <section>
        <WorkflowVariants />
        <Steps />
        <AddOns />
      </section>
    </WorkflowsContext.Provider>
  );
};

export default Workflows;
