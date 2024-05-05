/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { ProjectCostCalculatorContext } from "@/features/EventManager/SubApps/project-cost-calculator/context/ProjectCostCalculatorContext";
import { BtnTutorialOpener } from "@/features/EventManager/Main/tutorial/components/BtnTutorialOpener";
import { HourlyRate } from "@/features/EventManager/SubApps/project-cost-calculator/components/HourlyRate";
import { ProjectGlobalAndSpecificAspects } from "@/features/EventManager/SubApps/project-cost-calculator/components/ProjectGlobalAndSpecificAspects";
import { AdditionalTopicsToDiscuss } from "@/features/EventManager/SubApps/project-cost-calculator/components/AdditionalTopicsToDiscuss";
import { Crunch } from "@/features/EventManager/SubApps/project-cost-calculator/components/Crunch";
import { Payment } from "@/features/EventManager/SubApps/project-cost-calculator/components/Payment";
import { SumOfTime } from "@/features/EventManager/SubApps/project-cost-calculator/components/SumOfTime";
import { SumOfMoney } from "@/features/EventManager/SubApps/project-cost-calculator/components/SumOfMoney";

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

        <HourlyRate />

        <ProjectGlobalAndSpecificAspects />

        <AdditionalTopicsToDiscuss />

        <Crunch />

        <Payment />

        <SumOfTime />

        <SumOfMoney />
      </article>
    </ProjectCostCalculatorContext.Provider>
  );
};

export default ProjectCostCalculator;
