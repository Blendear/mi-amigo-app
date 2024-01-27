/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { RGBColorString } from "@/types";
import { colors } from "./colors";

export const button = (
  active: boolean,
  textColor?: RGBColorString,
  bgColor?: RGBColorString
) =>
  css({
    borderRadius: "1rem",
    border: "none",
    backgroundColor: bgColor || `rgb(${colors.tertiaryLight})`,
    color: textColor || `rgb(${colors.primaryLight})`,
    filter: !active && `brightness(0.5)`,

    "&:enabled": {
      "&:hover": {
        filter: `brightness(0.5)`,
      },
    },

    "&:disabled": {
      filter: `saturate(0)`,
    },
  });
