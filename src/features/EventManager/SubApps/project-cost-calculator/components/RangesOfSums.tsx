/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { PaymentProps, RangesOfSumsProps } from "../types";
import { useContext } from "react";
import { ProjectCostCalculatorContext } from "../context/ProjectCostCalculatorContext";
import { GiBrain } from "react-icons/gi";
import { IoSparkles } from "react-icons/io5";
import { FaEquals } from "react-icons/fa";

const rangesOfSumsCss = {
  container: css({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    justifyItems: "start",
  }),

  range: (isMainSum) =>
    css([
      {
        display: "grid",
        gridTemplateColumns: "repeat(3, max-content)",
        fontSize: variables.fontSize.regular,
        alignItems: "center",
      },

      !isMainSum && {
        opacity: 0.5,
      },
    ]),

  variantResource: css({
    display: "grid",
    alignItems: "center",
  }),
};

export const RangesOfSums = ({
  variant,
  logicalRangeOfSums,
  creativeRangeOfSums,
}: RangesOfSumsProps) => {
  return (
    <div css={rangesOfSumsCss.container}>
      <div css={rangesOfSumsCss.range(variant.isMainSum)}>
        {!variant.showFinalSumOnly && (
          <>
            <div css={universalCss.wrapperWithCenteredSvg("30px", "80%")}>
              <GiBrain />
            </div>
            <div>{`${logicalRangeOfSums.pessimistic}-${logicalRangeOfSums.optimistic}`}</div>
          </>
        )}
      </div>

      <div css={rangesOfSumsCss.range(variant.isMainSum)}>
        {!variant.showFinalSumOnly && (
          <>
            <div css={universalCss.wrapperWithCenteredSvg("30px", "80%")}>
              <IoSparkles />
            </div>
            <div>{`${creativeRangeOfSums.pessimistic}-${creativeRangeOfSums.optimistic}`}</div>
          </>
        )}{" "}
      </div>

      <div css={rangesOfSumsCss.range(variant.isMainSum)}>
        <div css={universalCss.wrapperWithCenteredSvg("30px", "80%")}>
          <FaEquals />
        </div>
        <div>
          {`${
            creativeRangeOfSums.pessimistic + logicalRangeOfSums.pessimistic
          }-${creativeRangeOfSums.optimistic + logicalRangeOfSums.optimistic}`}
        </div>
        <p css={{ margin: "0 0 0 3px" }}>
          {variant.resource === "time" ? variant.resourceVariant : "$"}
        </p>
      </div>

      <div css={rangesOfSumsCss.variantResource}></div>
    </div>
  );
};
