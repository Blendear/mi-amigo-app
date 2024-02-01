/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

const titleWithContentCss = {
  container: css({
    width: "100%",
    boxSizing: "border-box",
  }),
};

export const TitleBarWithTogglableContent = ({ titleBarContent, children }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <button
      css={titleWithContentCss.container}
      onClick={() => {
        setShowContent((prev) => !prev);
      }}
    >
      <div>{titleBarContent}</div>
      {showContent && <div>{children}</div>}
    </button>
  );
};
