/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { ProjectCostCalculatorContext } from "@/features/EventManager/SubApps/project-cost-calculator/context/ProjectCostCalculatorContext";
import { BtnTutorialOpener } from "@/features/EventManager/Main/tutorial/components/BtnTutorialOpener";

const ProjectCostCCss = {
  container: css({}),
};

export const NavbarButtons = () => {
  return (
    <nav css={universalCss.navbarButtonsList}>
      <BtnTutorialOpener tutorialName={"project-cost-calculator"} />
    </nav>
  );
};

const ProjectCostCalculator = () => {
  return (
    <ProjectCostCalculatorContext.Provider value={{}}>
      <article css={ProjectCostCCss.container}>
        <NavbarButtons />
        {/* 
        
        */}
      </article>
    </ProjectCostCalculatorContext.Provider>
  );
};

export default ProjectCostCalculator;
