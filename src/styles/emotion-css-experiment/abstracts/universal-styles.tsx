/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const disabled = css({
  filter: "saturate(0) brightness(0.2)",
});

export const contentWithBorder = css({
  border: "1px solid white",
  borderRadius: "5px",
  padding: "1rem",
});

export const wrapperWithCenteredSvg = (wrapperSize: string, svgSize: string) =>
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
  });
