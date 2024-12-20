/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { MonsterManualProps } from "../types";
import { GiDread } from "react-icons/gi";
import { biggerSmaller } from "../../chest-of-daily-planned-and-unplanned-events/components/ChestButton";
import { useState } from "react";

export const monsterManualLCss = {
  container: (isIconGrey) =>
    css([
      universalCss.wrapperWithCenteredSvg("100px", "50%"),

      {
        "& *": {
          color: isIconGrey ? `#484848` : `white`,
          strokeWidth: "1.5px",
        },
      },

      !isIconGrey && {
        animation: `${biggerSmaller} 1s infinite`,
      },
    ]),
};

export const MonsterManualLink = ({}: MonsterManualProps) => {
  const [isIconGrey, setIsIconGrey] = useState(false);

  return (
    <button
      css={monsterManualLCss.container(isIconGrey)}
      onClick={() => setIsIconGrey(!isIconGrey)}
      onDoubleClick={() => {
        window.open(
          "https://www.dropbox.com/work/Tobias%20Cibis/~~~Toby~~~/Ksi%C4%99gi%20Wiedzy%20-%20Do%20Nauki/KW%20Ksi%C4%99ga%20Potwor%C3%B3w?preview=KW+Ksi%C4%99ga+Potwor%C3%B3w.docx",
          "_blank"
        );
      }}
    >
      <GiDread />
    </button>
  );
};
