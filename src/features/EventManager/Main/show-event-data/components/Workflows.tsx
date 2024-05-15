/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { WorkflowsProps } from "../types";
import Steps from "./Steps";
import WorkflowVariants from "./WorkflowVariants";
import AddOns from "./AddOns";
import { useContext, useState } from "react";
import WorkflowsContext from "../context/WorkflowsContext";
import { FaExternalLinkAlt } from "react-icons/fa";
import EventDisplayContext from "../context/EventDisplayContext";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";

const Workflows = ({}: WorkflowsProps) => {
  const [update, forceUpdate] = useState(false);

  const { formDataRef } = useContext(EventDisplayContext);

  return (
    <WorkflowsContext.Provider value={{ update, forceUpdate }}>
      <section css={{ display: "grid" }}>
        {/* Now eveyrthing will be managed through a word file, which will lead
        to the necessary "Resources" folder with dedicated content */}
        {/* <WorkflowVariants /> */}
        {/* <Steps /> */}
        {/* <AddOns /> */}

        {formDataRef.current.workflowAkaBookOfKnowledgeLink ? (
          <a
            css={[
              universalCss.wrapperWithCenteredSvg("10rem", "50%"),
              {
                justifySelf: "center",
              },
            ]}
            target="_blank"
            rel="noreferrer"
            href={formDataRef.current.workflowAkaBookOfKnowledgeLink}
          >
            <FaExternalLinkAlt />
          </a>
        ) : (
          <p>Sorry, no link to a Workflow (KW) was given</p>
        )}
      </section>
    </WorkflowsContext.Provider>
  );
};

export default Workflows;
