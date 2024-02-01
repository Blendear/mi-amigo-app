import { useState } from "react";

export const TitleBarWithTogglableContent = ({ titleBarContent, children }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <button
      onClick={() => {
        setShowContent((prev) => !prev);
      }}
    >
      <div>{titleBarContent}</div>
      {showContent && <div>{children}</div>}
    </button>
  );
};
