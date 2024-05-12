/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { ProjectGlobalAndSpecificAspectsProps, ProjectType } from "../types";
import { DefaultCheckboxStatesSetters } from "./DefaultCheckboxStatesSetters";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { ProjectCostCalculatorContext } from "../context/ProjectCostCalculatorContext";
import { Chooser } from "@/features/EventManager/Main/chooser/components/Chooser";
import {
  Choice,
  FinalChoice,
  UserChoicesType,
} from "@/features/EventManager/Main/chooser/types";
import { placeholderprojectsAvailable } from "../data/placeholderProjectsAvailable";
import { ProjectDefaultCheckboxesAndFeaturesContext } from "../context/ProjectDefaultCheckboxesAndFeatures";
import { SpecificFeatures } from "./SpecificFeatures";

// two words fully written, the rest are initials
const ProjectGASACss = {
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

export const ProjectDefaultCheckboxesAndFeatures = () => {
  const { projectsAvailable } = useContext(ProjectCostCalculatorContext);

  // Every Chooser will need a dedicated data parser, before it can be passed as "choices",
  // since every parent component might have a different data structure which it operates on
  //
  // In this case, there will be 2 levels of choices:
  //    1.  variant type, like "webapp", "concept art", "3d model" etc.
  //    2.  project, like "App A", "Feature for App B", App C, App D" etc.
  const choicesMadeOutOfProjects: Choice[] = useMemo(() => {
    return projectsAvailable.current.map((projectVariant) => {
      return {
        imagePath: projectVariant.imagePath,
        name: projectVariant.name,
        // additional "choices" exist in every project variant
        choices: projectVariant.projects.map((project) => {
          return {
            imagePath: project.imagePath,
            name: project.name,
            // additional "choices" do NOT exist in every project, since it's the last level of choices
            finalChoiceContent: project.calculationContent,
          };
        }),
      };
    });
  }, [projectsAvailable]);

  const userChoicesRef = useRef<UserChoicesType>({
    choices: choicesMadeOutOfProjects,
    continuousChoicesIndexes: [],
    // as long as the user hasn't made a choice, the final choice is null, so no finalChoice content is rendered
    // uncomment it after the "Chooser" component is implemented. Right now it's hardcoded to the first project
    // finalChoice: null,

    finalChoice: placeholderprojectsAvailable[0].projects[0],
  });

  const [showFinalChoiceContent, setShowFinalChoiceContent] =
    useState<boolean>(false);

  useEffect(() => {
    if (userChoicesRef.current.finalChoice) {
      setShowFinalChoiceContent(true);
    }
  }, [userChoicesRef.current.finalChoice]);

  return (
    <ProjectDefaultCheckboxesAndFeaturesContext.Provider
      value={{
        userChoicesRef,
        isProjectAPrebuildOne:
          userChoicesRef.current.finalChoice.isAPrebuildOne,
      }}
    >
      <section>
        <Chooser userChoicesRef={userChoicesRef} />

        {showFinalChoiceContent && (
          <>
            {/* They set the default avalue sof the checkboxes, for example 
                "isResponsibe" or "isTranslated" */}
            <DefaultCheckboxStatesSetters />

            <SpecificFeatures />
          </>
        )}
      </section>
    </ProjectDefaultCheckboxesAndFeaturesContext.Provider>
  );
};
