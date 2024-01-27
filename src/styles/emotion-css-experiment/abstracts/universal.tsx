/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "./variables";
import { RGBColorString } from "@/types";
import { colors } from "./colors";

export const universalCss = {
  button: (
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
    }),

  disabled: css({
    filter: "saturate(0) brightness(0.2)",
  }),

  container: css({
    padding: "1.5rem",
    border: "1px solid white",
    borderRadius: variables.borderRadius.md,
    boxShadow: `inset 0 0 1.5rem 0.75rem rgba(${colors.whiteLight},0.15)`,
    backgroundColor: `rgb(${colors.tertiaryLight})`,
  }),

  wrapperWithCenteredSvg: (wrapperSize: string, svgSize: string) =>
    css({
      justifySelf: "center",
      alignSelf: "center",
      width: wrapperSize,
      aspectRatio: "1/1",
      display: "grid",
      alignItems: "center",
      justifyItems: "center",

      "> svg": {
        width: svgSize,
        height: svgSize,
      },
    }),
};
