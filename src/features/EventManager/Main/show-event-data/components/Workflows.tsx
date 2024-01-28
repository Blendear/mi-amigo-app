/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { WorkflowsProps } from "../types";
import Steps from "./Steps";
import WorkflowVariants from "./WorkflowVariants";
import AddOns from "./AddOns";

const Workflows = ({}: WorkflowsProps) => {
  return (
    <section>
      <WorkflowVariants />
      <Steps />
      <AddOns />
      <div>c</div>
    </section>
  );
};

export default Workflows;
