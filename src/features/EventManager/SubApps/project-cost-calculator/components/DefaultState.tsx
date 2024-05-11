/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { useContext, useState } from "react";
import { DefaultStateProps, ProjectType } from "../types";
import { ProjectDefaultCheckboxesAndFeaturesContext } from "../context/ProjectDefaultCheckboxesAndFeatures";

// two words fully written, the rest are initials
const DefaultStateCss = {
  container: css({
    // gridRow: "1 / 3",
    // padding: "1rem",
    // width: "100%",
    // boxSizing: "border-box",
    // aspectRatio: "2/1",
    // backgroundColor: `rgb(${colors.primaryLight})`,
    // display: "grid",
    // gridTemplateRows: "1fr",
    // justifyItems: "center",
    // fontSize: "clamp(1rem, 4vw, 2rem)",
    // "& div:nth-child(1)": {
    //   backgroundColor: "yellow",
    // },
  }),
};

export const DefaultState = ({ radioValues }: DefaultStateProps) => {
  const { userChoicesRef } = useContext(
    ProjectDefaultCheckboxesAndFeaturesContext
  );

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);

    const updatedFinalChoice: ProjectType = {
      ...userChoicesRef.current.finalChoice,
    };

    userChoicesRef.current = {
      ...userChoicesRef.current,
      finalChoice: {
        ...userChoicesRef.current.finalChoice,
        finalChoiceContent: event.target.value,
      },
    };
  };

  return (
    <div>
      {radioValues.map((radioValue, index) => {
        return (
          <label key={index}>
            <input
              type="radio"
              value={radioValue}
              checked={selectedOption === radioValue}
              onChange={handleOptionChange}
            />
            {radioValue}
          </label>
        );
      })}
    </div>
  );
};
