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
import { FeatureContext } from "../context/FeatureContext";

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

  const { forceUpdateOfFeature } = useContext(FeatureContext);

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
    console.log(
      "before dleete",
      userChoicesRef.current.finalChoice.calculationContent.specificFeatures[
        featureIndex
      ]
    );

    userChoicesRef.current.finalChoice.calculationContent.specificFeatures[
      featureIndex
    ].featureBuildingBlocks =
      userChoicesRef.current.finalChoice.calculationContent.specificFeatures[
        featureIndex
      ].featureBuildingBlocks.filter((block, index) => index !== blockIndex);

    console.log(
      "after dleete",
      userChoicesRef.current.finalChoice.calculationContent.specificFeatures[
        featureIndex
      ]
    );

    forceUpdateOfFeature((prev) => !prev);
  };

  const saveBlock = () => {
    console.log(
      "before save",
      userChoicesRef.current.finalChoice.calculationContent.specificFeatures[
        featureIndex
      ].featureBuildingBlocks[blockIndex]
    );

    userChoicesRef.current.finalChoice.calculationContent.specificFeatures[
      featureIndex
    ].featureBuildingBlocks[blockIndex] =
      buildingBlockStateBeforeSavingRef.current;

    console.log(
      "after save",
      userChoicesRef.current.finalChoice.calculationContent.specificFeatures[
        featureIndex
      ].featureBuildingBlocks[blockIndex]
    );

    forceUpdateOfFeature((prev) => !prev);
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

            <NumberInputField
              propName={"thirdPartyCosts"}
              labelName={"thirdPartyCosts"}
            />

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

          {/* Input fields */}
          <h6>Copies amounts</h6>
          <div>___________</div>
          <NumberInputField propName={"100%"} labelName={"100%"} />
          <NumberInputField propName={"75-99%"} labelName={"75-99%"} />
          <NumberInputField propName={"50-74%"} labelName={"50-74%"} />

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
      <input type="number" onChange={onChange} value={value} />
    </div>
  );
};
