/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { WorkflowsProps } from "../types";
import Steps from "./Steps";

const Workflows = ({}: WorkflowsProps) => {
  return (
    <section>
      <Steps />
      <div>b</div>
      <div>c</div>
    </section>
  );
};

export default Workflows;
