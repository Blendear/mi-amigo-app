/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { ProjectGlobalAndSpecificAspectsProps } from "../types";
import { DefaultCheckboxStatesSetters } from "./DefaultCheckboxStatesSetters";
import { ListOfSpecificFeatures } from "./Feature";
import { useContext, useMemo, useRef } from "react";
import { ProjectCostCalculatorContext } from "../context/ProjectCostCalculatorContext";
import { Chooser } from "@/features/EventManager/Main/chooser/components/Chooser";
import { UserChoicesRefType } from "@/features/EventManager/Main/chooser/types";

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

export const ProjectGlobalAndSpecificAspects =
  ({}: ProjectGlobalAndSpecificAspectsProps) => {
    const { projectsAvailable } = useContext(ProjectCostCalculatorContext);

    // Every Chooser will need a dedicated data parser, before it can be passed as "choices",
    // since every parent component might have a different data structure which it operates on
    //
    // In this case, there will be 2 levels of choices:
    //    1.  variant type, like "webapp", "concept art", "3d model" etc.
    //    2.  project, like "App A", "Feature for App B", App C, App D" etc.
    const choicesMadeOutOfProjects = useMemo(() => {
      return projectsAvailable.current
        .map((projectVariant) => {
          return projectVariant.projects.map((project) => {
            return {
              imagePath: project.imagePath,
              name: project.name,
              choices: [],
            };
          });
        })
        .flat();
    }, [projectsAvailable]);

    const userChoicesRef = useRef<UserChoicesRefType>({
      choices: choicesMadeOutOfProjects,
      continuousChoicesIndexes: [],
      finalChoice: {},
    });

    return (
      <section>
        <Chooser userChoicesRef={userChoicesRef} />

        {/* They set the default avalue sof the checkboxes, for example 
        "isResponsibe" or "isTranslated" */}
        <DefaultCheckboxStatesSetters />

        <ListOfSpecificFeatures />
      </section>
    );
  };
