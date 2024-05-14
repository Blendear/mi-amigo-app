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
    width: "max-content",
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
            <div>{`${logicalRangeOfSums.optimistic}-${logicalRangeOfSums.pessimistic}`}</div>
          </>
        )}
      </div>

      <div css={rangesOfSumsCss.range(variant.isMainSum)}>
        {!variant.showFinalSumOnly && (
          <>
            <div css={universalCss.wrapperWithCenteredSvg("30px", "80%")}>
              <IoSparkles />
            </div>
            <div>{`${creativeRangeOfSums.optimistic}-${creativeRangeOfSums.pessimistic}`}</div>
          </>
        )}{" "}
      </div>

      <div css={rangesOfSumsCss.range(variant.isMainSum)}>
        <div css={universalCss.wrapperWithCenteredSvg("30px", "80%")}>
          <FaEquals />
        </div>
        <div>
          {`${creativeRangeOfSums.optimistic + logicalRangeOfSums.optimistic}-${
            creativeRangeOfSums.pessimistic + logicalRangeOfSums.pessimistic
          }`}
        </div>
        <p css={{ margin: "0 0 0 3px" }}>
          {variant.resource === "time" ? "h" : "$"}
        </p>
      </div>

      <div css={rangesOfSumsCss.variantResource}></div>
    </div>
  );
};
