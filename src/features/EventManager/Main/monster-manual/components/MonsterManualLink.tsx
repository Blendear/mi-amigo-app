/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { MonsterManualProps } from "../types";
import { GiDread } from "react-icons/gi";
import { biggerSmaller } from "../../chest-of-daily-planned-and-unplanned-events/components/ChestButton";
import { useState } from "react";
import { googleCalendarLCss } from "../../google-calendar-link/components/GoogleCalendarLink";

export const MonsterManualLink = ({}: MonsterManualProps) => {
  const [isIconGrey, setIsIconGrey] = useState(false);

  return (
    <button
      css={googleCalendarLCss.container(isIconGrey)}
      onClick={() => setIsIconGrey(!isIconGrey)}
      onDoubleClick={() => {
        window.open(
          "https://www.dropbox.com/scl/fi/ka0it6sb8vm859ek6cckg/KW-Ksi-ga-Potwor-w.docx?rlkey=hk0duoqi93brcrdcrfeve3lbq&st=nuhq4zuf&dl=0",
          "_blank"
        );
      }}
    >
      <GiDread />
    </button>
  );
};
