/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";

const temperatureCss = {
  container: css({
    alignSelf: "end",
    fontSize: variables.fontSize.regular,
    color: `rgb(${colors.whiteLight}, 0.25)`,
  }),
};

export const Temperature = ({ temperature, isDefault }) => {
  return isDefault ? (
    // temporarily removed the loading text, since i just click the link
    // instead of turning the localisation on
    //
    <div css={temperatureCss.container}>{""}</div>
  ) : (
    // <div css={temperatureCss.container}>{"Loading..."}</div>
    <div css={temperatureCss.container}>{temperature} &#8451; </div>
  );
};
