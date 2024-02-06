/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
// import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
// import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { SubAppsTogglersProps } from "../types";
import DialogModal from "@/components/DialogModal";
import { useState } from "react";
import { getSubAppImageAndComponent } from "../data/getSubAppImageAndComponent";
import PortalesqueLink from "./PortalesqueLink";
import { Subapp } from "@/types";

const subAppsTogglersCss = {
  container: css({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
  }),
};

const SubAppsTogglers = ({ content }: SubAppsTogglersProps) => {
  const [showSubApp, setShowSubApp] = useState<boolean>(false);
  const [openedSubAppData, setOpenedSubAppData] = useState<Subapp | null>(null);
  return (
    <div css={subAppsTogglersCss.container}>
      {content ? (
        <ul>
          {content.map((portal, index) => {
            return (
              <li key={index}>
                <button
                  onClick={() => {
                    setShowSubApp(true);
                    setOpenedSubAppData(portal);
                  }}
                >
                  <PortalesqueLink
                    title={portal.subappName}
                    imageOrGifPath={
                      getSubAppImageAndComponent({
                        subAppName: portal.subappName,
                      }).imageOrGifPath
                    }
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No content</p>
      )}
      {showSubApp && (
        <DialogModal
          isOpen={showSubApp}
          onClose={() => {
            setShowSubApp(false);
          }}
          zIndex={1002}
        >
          {
            getSubAppImageAndComponent({
              subAppName: openedSubAppData.subappName,
              payload: openedSubAppData.payload,
            }).component
          }
        </DialogModal>
      )}
    </div>
  );
};

export default SubAppsTogglers;
