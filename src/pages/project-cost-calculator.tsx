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
import { useRef } from "react";

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
  // Everything other than hourlyrate and the two sums components, affect the number of hours
  // and the number to multiply the hours with. The sum of time is then passed to the SumOfTime
  // and multiplied by the hourly rate to get the numeric content of SumOfMoney.
  const hourlyRate = useRef(0);
  const numberOfHours = useRef(0);
  const numberToMultiplyTheHoursWith = useRef(0);
  const sumOfTime = useRef(0);

  return (
    <ProjectCostCalculatorContext.Provider
      value={{
        hourlyRate,
        numberOfHours,
        numberToMultiplyTheHoursWith,
        sumOfTime,
      }}
    >
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
