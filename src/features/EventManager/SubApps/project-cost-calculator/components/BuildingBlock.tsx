/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { BuildingBlockProps, BuildingBlockType, PaymentProps } from "../types";
import { useContext, useEffect, useRef, useState } from "react";
import { ProjectCostCalculatorContext } from "../context/ProjectCostCalculatorContext";
import { TitleBarWithTogglableContent } from "@/components/TitleBarWithTogglableContent";
import { FaRegBookmark } from "react-icons/fa";
import { ProjectDefaultCheckboxesAndFeaturesContext } from "../context/ProjectDefaultCheckboxesAndFeatures";
import { BuildingBlockContext } from "../context/BuildingBlockContext";
import { FeatureContext } from "../context/FeatureContext";
import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";
import { forceRerenderSliceActions } from "@/store/redux/store-redux";

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

  inputs: css({
    display: "grid",
    rowGap: "5px",

    "& > h6": {
      fontSize: variables.fontSize.subheading,
    },

    "& > div": {
      display: "grid",
      gridTemplateColumns: "1fr max-content",
      fontSize: variables.fontSize.regular,

      "& label": {
        justifySelf: "start",
      },
    },
  }),
};

export const BuildingBlock = ({
  block,
  featureIndex,
  blockIndex,
}: BuildingBlockProps) => {
  const dispatch = useAppDispatch();

  console.log("BuildingBlock rerendered");

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

  const deleteBlock = () => {
    userChoicesRef.current.finalChoice.calculationContent.specificFeatures[
      featureIndex
    ].featureBuildingBlocks =
      userChoicesRef.current.finalChoice.calculationContent.specificFeatures[
        featureIndex
      ].featureBuildingBlocks.filter((block, index) => index !== blockIndex);

    dispatch(forceRerenderSliceActions.forceRerender("FeatureRanges"));
  };

  const saveBlock = () => {
    userChoicesRef.current.finalChoice.calculationContent.specificFeatures[
      featureIndex
    ].featureBuildingBlocks[blockIndex] =
      buildingBlockStateBeforeSavingRef.current;

    dispatch(forceRerenderSliceActions.forceRerender("FeatureRanges"));
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
          </div>

          <div css={buildingBlockCss.inputs}>
            <DescriptionOrComment />

            <h6>Third Party Costs</h6>
            <NumberInputField
              propName={"thirdPartyCosts"}
              labelName={"Third Party Costs (Hosting / Stock etc.)"}
            />

            {/* Select fields */}
            <h6>Problemsolving</h6>

            <SelectField
              propName={"logicalProblemsolving"}
              labelName={"Logical Problemsolving"}
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
              labelName={"Creative Problemsolving"}
              availableOptions={[
                "5-30",
                "30-60",
                "60-120",
                "120-240",
                "240-480",
              ]}
            />

            <h6>Multipliers</h6>

            {Object.keys(
              selectInputsForDefaultStatesThatMultiplyTheTimeSum
            ).map((stateName) => {
              return (
                <SelectField
                  key={stateName}
                  propName={stateName}
                  labelName={(() => {
                    let returnString = stateName;

                    switch (stateName) {
                      case "translationAutomatically":
                        returnString = "Translation";
                        break;
                      case "responsiveForBrowsers":
                        returnString = "Responsive for Browsers";
                        break;
                      case "responsiveForScreenSizes":
                        returnString = "Responsive for Screen Sizes";
                        break;
                      case "responsiveForDisabilities":
                        returnString = "Responsive for Disabilities";
                        break;
                      case "stylisationDesign":
                        returnString = "Design";
                        break;
                      case "stylisationAnimationAmountOfStates":
                        returnString = "Animation Amount of States";
                        break;
                      case "stylisationAnimationAmountOfComplexStates":
                        returnString = "Animation Amount of Complex States";
                        break;

                      default:
                        returnString = stateName;
                    }
                    return returnString;
                  })()}
                  availableOptions={
                    selectInputsForDefaultStatesThatMultiplyTheTimeSum[
                      stateName
                    ].possibleOptions
                  }
                />
              );
            })}

            {/* Input fields */}
            <h6>Copies amounts</h6>

            <NumberInputField propName={"100%"} labelName={"100%"} />
            <NumberInputField propName={"75-99%"} labelName={"75-99%"} />
            <NumberInputField propName={"50-74%"} labelName={"50-74%"} />
          </div>
          <div>
            <button css={universalCss.button(true)} onClick={deleteBlock}>
              Delete Block
            </button>
            <button css={universalCss.button(true)} onClick={saveBlock}>
              Save Block
            </button>
          </div>
        </TitleBarWithTogglableContent>
      </div>
    </BuildingBlockContext.Provider>
  );
};

const descriptionOrCommentCss = {
  container: css({
    width: "100%",
    height: "100px",
    backgroundColor: "rgb(255,255,255,0.2)",
    fontSize: variables.fontSize.regular,
  }),
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
      css={descriptionOrCommentCss.container}
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
    // Logical and creative problemsolving have are stored in a different prop than the statesThatMultiplyTheTimeSum
    if (
      propName === "logicalProblemsolving" ||
      propName === "creativeProblemsolving"
    ) {
      buildingBlockStateBeforeSavingRef.current.timeRangesByVariant[
        propName
      ].timeRange = {
        // Parsing is necessary since it's a "string-string" value
        optimistic: parseInt(e.target.value.split("-")[0]),
        pessimistic: parseInt(e.target.value.split("-")[1]),
      };
    }

    buildingBlockStateBeforeSavingRef.current.statesThatMultiplyTheTimeSum[
      propName
    ] = e.target.value;
  };

  return (
    <div>
      <label>{labelName}</label>
      <select
        css={{ backgroundColor: "rgb(0,0,0,0)", width: "120px" }}
        onChange={onChange}
      >
        {availableOptions.map((option) => {
          return (
            <option
              css={{ backgroundColor: "grey" }}
              key={option}
              value={option}
            >
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export const NumberInputField = ({ propName, labelName }) => {
  const { buildingBlockStateBeforeSavingRef } =
    useContext(BuildingBlockContext);

  const [value, setValue] = useState(
    propName === "thirdPartyCosts"
      ? buildingBlockStateBeforeSavingRef.current[propName]
      : buildingBlockStateBeforeSavingRef.current.copiesAmounts[propName]
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    propName === "thirdPartyCosts"
      ? (buildingBlockStateBeforeSavingRef.current[propName] = parseInt(
          e.target.value
        ))
      : (buildingBlockStateBeforeSavingRef.current.copiesAmounts[propName] =
          parseInt(e.target.value));
  };

  return (
    <div>
      <label>{labelName}</label>
      <input
        css={universalCss.input}
        type="number"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
