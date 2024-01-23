/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// @use "../../../styles/sass/abstracts/mixins";
// @use "../../../styles/sass/abstracts/colors";
// @use "../../../styles/sass/abstracts/variables";
// @use "../../../styles/sass/base/typography";

export const disabled = css({
  filter: "saturate(0) brightness(0.2)",
});

export const contentWithBorder = css({
  border: "1px solid white",
  borderRadius: "5px",
  padding: "1rem",
});
