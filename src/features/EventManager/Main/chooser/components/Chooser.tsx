/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { useContext } from "react";
import { ChooserProps } from "../types";

// two words fully written, the rest are initials
const ChooserCss = {
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

export const Chooser = ({ userChoicesRef }: ChooserProps) => {
  // The parent component shows the content of the finalChoice, based on the
  // userChoicesRef.current.finalChoice passed backa to it, from the Chooser component
  // Because it can be of any shape and form, based on the developers need

  // Chooser component:
  // .  Is the "finalChoice" set?
  //     ) A : Yes? Show bread crumbs (image-text based) of the choices made so far
  //     ) B : No? Show the "Choose option" button
  // .  Choose option button is clicked?
  //     ) A : Yes? Open the DialogModal with "ChoicesToBeMade" component

  // ChoicesToBeMade component:
  // 1. 1st level of choices shows
  // 2. User clicks on a choice
  // 3. Add a number to the continuousChoicesIndexes & Update the image-text based bread crumbs
  // 4. Are there next level choices?
  //     ) A : Yes? show them, by repeating the 1. step
  //     ) B : No? continue
  // 5. Set the finalChoice to the chosen choice data object & Close the Chooser DialogModal
  return (
    <div>
      <div css={ChooserCss.container}>
        {/* <BreadCrumbs /> */}

        <button>Choose option</button>

        {/* <DialogModal> */}
      </div>
    </div>
  );
};
