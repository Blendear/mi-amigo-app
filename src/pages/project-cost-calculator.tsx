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

  // Hours will be added/subtracted - whenever a cost position changes
  // For example, adding a new feature from the cost-area of 6-10 hours, will add 6 gours to the
  // numberOfOptimisticHours and 10 hours to the numberOfPessimisticHours, so that the sum shows
  // a realistic range of assumed hours.
  const numberOfHours = useRef({
    optimistic: 0,
    pessimistic: 0,
  });

  // specific chapters will modify specific key values - whenever a cost position changes
  // For example crunch, payment and responsiveness will multiply the hours amount
  const listOfnumbersToMultiplyTheHoursWith = useRef({
    responsiveness: 0,
    crunch: 0,
    payment: 0,
  });

  const finalMultiplier = useRef(0);

  const sumOfTime = useRef({
    optimistic: 0,
    pessimistic: 0,
  });

  const sumOfMoney = useRef({
    optimistic: 0,
    pessimistic: 0,
  });

  const updateHoursNumber = (
    actionType: "-" | "+",
    numberToModifyOptimisticHours: number,
    numberToModifyPessimisticHours: number
  ) => {
    if (actionType === "+") {
      numberOfHours.current.optimistic += numberToModifyOptimisticHours;
      numberOfHours.current.pessimistic += numberToModifyPessimisticHours;
    } else if (actionType === "-") {
      numberOfHours.current.optimistic -= numberToModifyOptimisticHours;
      numberOfHours.current.pessimistic -= numberToModifyPessimisticHours;
    }
  };

  return (
    <ProjectCostCalculatorContext.Provider
      value={{
        hourlyRate,
        numberOfHours,
        listOfnumbersToMultiplyTheHoursWith,
        finalMultiplier,
        sumOfTime,
        sumOfMoney,
        updateHoursNumber,
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
