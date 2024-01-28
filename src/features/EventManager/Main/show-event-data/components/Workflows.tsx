/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { WorkflowsProps } from "../types";
import Steps from "./Steps";
import WorkflowVariants from "./WorkflowVariants";

const Workflows = ({}: WorkflowsProps) => {
  return (
    <section>
      <WorkflowVariants />
      <Steps />
      <div>b</div>
      <div>c</div>
    </section>
  );
};

export default Workflows;
