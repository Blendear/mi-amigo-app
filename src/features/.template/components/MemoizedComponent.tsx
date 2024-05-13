/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
// import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
// import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { AComponentProps } from "../types";
import { memo } from "react";

// two words fully written, the rest are initials
const OneTwoTFWCNCss = {
  container: css({
    // gridRow: "1 / 3",
    // padding: "1rem",
    // width: "100%",
    // boxSizing: "border-box",
    // aspectRatio: "2/1",
    // backgroundColor: `rgb(${colors.primaryLight})`,
    // display: "grid",
    // gridTemplateRows: "1fr",
    // justifyItems: "center",
    // fontSize: "clamp(1rem, 4vw, 2rem)",
    // "& div:nth-child(1)": {
    //   backgroundColor: "yellow",
    // },
  }),
};

// Memoized = won't rerender when parent forces a rerender, if this components props don't change
const MemoizedComponent = ({
  // like a "updateOfChildA" in the parents "const [updateOfChildA, forceUpdateOfChildA] = useState(false);"
  // for example
  propWhichChangeWillTriggerTheRerenderOfTheMemoizedComponent,
}) => {
  return <div>MemoizedComponent</div>;
};

export default memo(MemoizedComponent);
