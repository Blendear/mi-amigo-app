/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { BuildingBlockProps, BuildingBlockType, PaymentProps } from "../types";
import { useContext, useRef, useState } from "react";
import { ProjectCostCalculatorContext } from "../context/ProjectCostCalculatorContext";
import { TitleBarWithTogglableContent } from "@/components/TitleBarWithTogglableContent";
import { FaRegBookmark } from "react-icons/fa";
import { ProjectDefaultCheckboxesAndFeaturesContext } from "../context/ProjectDefaultCheckboxesAndFeatures";
import { BuildingBlockContext } from "../context/BuildingBlockContext";

// two words fully written, the rest are initials
const buildingBlockCss = {
  container: (isResearchNeeded) =>
    css([
      universalCss.container,

      isResearchNeeded && {
        border: `3px solid purple`,
        backgroundColor: `rgb(139,0,139, 0.25)`,
      },
    ]),

  titleButtons: css({ display: "grid", justifyItems: "center" }),

  titleButon: css([
    {
      padding: " 10px 20px",
      width: "max-content",
      display: "grid",
      gridTemplateColumns: "1fr 5fr",
    },
  ]),
};

export const BuildingBlock = ({
  block,
  featureIndex,
  blockIndex,
}: BuildingBlockProps) => {
  const [isResearchNeeded, setIsResearchNeeded] = useState(
    block.needsResearchBeforeCalculationWillBePossible
  );

  const { userChoicesRef } = useContext(
    ProjectDefaultCheckboxesAndFeaturesContext
  );

  const selectInputsForDefaultStatesThatMultiplyTheTimeSum =
    userChoicesRef.current.finalChoice.calculationContent
      .defaultStatesThatMultiplyTheTimeSum;

  // For storing the data before the "save block" is clicked
  const buildingBlockStateBeforeSavingRef = useRef<BuildingBlockType>(
    userChoicesRef.current.finalChoice.calculationContent.specificFeatures[
      featureIndex
    ].featureBuildingBlocks[blockIndex]
  );

  const toggleIsResearchNeeded = () => {
    setIsResearchNeeded(!isResearchNeeded);
    buildingBlockStateBeforeSavingRef.current.needsResearchBeforeCalculationWillBePossible =
      !isResearchNeeded;
  };

  return (
    <BuildingBlockContext.Provider
      value={{ buildingBlockStateBeforeSavingRef }}
    >
      <div css={buildingBlockCss.container(isResearchNeeded)}>
        <TitleBarWithTogglableContent titleBarContent={<h5>{block.name}</h5>}>
          <div css={buildingBlockCss.titleButtons}>
            <button
              css={[
                universalCss.button(isResearchNeeded, "white", "purple"),
                buildingBlockCss.titleButon,
              ]}
              onClick={toggleIsResearchNeeded}
            >
              <div css={universalCss.wrapperWithCenteredSvg("100%", "1rem")}>
                <FaRegBookmark />
              </div>
              <p>Research Needed</p>
            </button>

            <DescriptionOrComment />

            {/* Select fields */}
            <h6>Problemsolving</h6>
            <div>___________</div>
            <SelectField
              propName={"logicalProblemsolving"}
              labelName={"logicalProblemsolving"}
              availableOptions={[
                "5-30",
                "30-60",
                "60-120",
                "120-240",
                "240-480",
              ]}
            />

            <SelectField
              propName={"creativeProblemsolving"}
              labelName={"creativeProblemsolving"}
              availableOptions={[
                "5-30",
                "30-60",
                "60-120",
                "120-240",
                "240-480",
              ]}
            />

            <h6>Multipliers</h6>
            <div>___________</div>
            {Object.keys(
              selectInputsForDefaultStatesThatMultiplyTheTimeSum
            ).map((stateName) => {
              return (
                <SelectField
                  key={stateName}
                  propName={stateName}
                  labelName={stateName}
                  availableOptions={
                    selectInputsForDefaultStatesThatMultiplyTheTimeSum[
                      stateName
                    ].possibleOptions
                  }
                />
              );
            })}
          </div>
        </TitleBarWithTogglableContent>
      </div>
    </BuildingBlockContext.Provider>
  );
};

export const DescriptionOrComment = () => {
  const { buildingBlockStateBeforeSavingRef } =
    useContext(BuildingBlockContext);

  const onChange = (e) => {
    buildingBlockStateBeforeSavingRef.current.descriptionOrdeveloperComment =
      e.target.value;
  };

  return (
    <textarea
      placeholder="Description"
      value={
        buildingBlockStateBeforeSavingRef.current
          .descriptionOrdeveloperComment === ""
          ? ""
          : buildingBlockStateBeforeSavingRef.current
              .descriptionOrdeveloperComment
      }
      onChange={onChange}
    />
  );
};

export const SelectField = ({ propName, labelName, availableOptions }) => {
  const { buildingBlockStateBeforeSavingRef } =
    useContext(BuildingBlockContext);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    buildingBlockStateBeforeSavingRef.current.statesThatMultiplyTheTimeSum[
      propName
    ] = e.target.value;
  };

  return (
    <div>
      <label>{labelName}</label>
      <select onChange={onChange}>
        {availableOptions.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
