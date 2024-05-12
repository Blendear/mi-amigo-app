/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { ProjectCostCalculatorContext } from "@/features/EventManager/SubApps/project-cost-calculator/context/ProjectCostCalculatorContext";
import { BtnTutorialOpener } from "@/features/EventManager/Main/tutorial/components/BtnTutorialOpener";
import { HourlyRate } from "@/features/EventManager/SubApps/project-cost-calculator/components/HourlyRate";
import { AdditionalTopicsToDiscuss } from "@/features/EventManager/SubApps/project-cost-calculator/components/AdditionalTopicsToDiscuss";
import { Crunch } from "@/features/EventManager/SubApps/project-cost-calculator/components/Crunch";
import { Payment } from "@/features/EventManager/SubApps/project-cost-calculator/components/Payment";
import { SumOfTime } from "@/features/EventManager/SubApps/project-cost-calculator/components/SumOfTime";
import { SumOfMoney } from "@/features/EventManager/SubApps/project-cost-calculator/components/SumOfMoney";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { placeholderprojectsAvailable } from "@/features/EventManager/SubApps/project-cost-calculator/data/placeholderProjectsAvailable";
import { ProjectDefaultCheckboxesAndFeatures } from "@/features/EventManager/SubApps/project-cost-calculator/components/ProjectDefaultCheckboxesAndFeatures";
import { HourlyRateType } from "@/features/EventManager/SubApps/project-cost-calculator/types";

const ProjectCostCCss = {
  container: css({ padding: "0 0 15rem 0" }),
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

  const hourlyRate = useRef<HourlyRateType>({
    sprintCall: 30,
    logicalProblemsolving: 60,
    creativeProblemsolving: 90,
  });

  // As "useRef", for a future possibility of getting the data from localStorage
  const projectsAvailable = useRef(placeholderprojectsAvailable);

  const areDefaultCheckboxStatesSettersConfirmed = useRef(false);

  // Hours will be added/subtracted - whenever a cost position changes
  // For example, adding a new feature from the cost-area of 6-10 hours, will add 6 gours to the
  // numberOfOptimisticHours and 10 hours to the numberOfPessimisticHours, so that the sum shows
  // a realistic range of assumed hours.
  const sumOfHoursByRateType = useRef({
    sprintCall: {
      optimistic: 0,
      pessimistic: 0,
    },
    logicalProblemsolving: {
      optimistic: 0,
      pessimistic: 0,
    },
    creativeProblemsolving: {
      optimistic: 0,
      pessimistic: 0,
    },
  });

  // Specific chapters will modify specific key values - whenever a cost position changes

  // multipliersForSpecificFeatures - will be inside the "Feature" component,
  // because the level of stylisation will affect the "stylisation" multiplier,
  // while all the multipliers will at the end affect (multiply) the sum of hours

  // They will multiply the sum of all features (after summing their times)
  const multipliersForAllFeaturesAsOne = useRef({
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
    rateType: "sprintCall" | "logicalProblemSolving" | "creativeProblemSolving",
    numberToModifyOptimisticHours: number,
    numberToModifyPessimisticHours: number
  ) => {
    if (actionType === "+") {
      sumOfHoursByRateType.current[rateType].optimistic +=
        numberToModifyOptimisticHours;
      sumOfHoursByRateType.current[rateType].pessimistic +=
        numberToModifyPessimisticHours;
    } else if (actionType === "-") {
      sumOfHoursByRateType.current[rateType].optimistic -=
        numberToModifyOptimisticHours;
      sumOfHoursByRateType.current[rateType].pessimistic -=
        numberToModifyPessimisticHours;
    }
  };

  return (
    <ProjectCostCalculatorContext.Provider
      value={{
        hourlyRate,
        projectsAvailable,
        areDefaultCheckboxStatesSettersConfirmed,
        sumOfHoursByRateType,
        multipliersForAllFeaturesAsOne,
        finalMultiplier,
        sumOfTime,
        sumOfMoney,
        updateHoursNumber,
      }}
    >
      <article css={ProjectCostCCss.container}>
        <NavbarButtons />

        <HourlyRate />

        <ProjectDefaultCheckboxesAndFeatures />

        <AdditionalTopicsToDiscuss />

        <Crunch />

        <Payment />

        <SumOfTime />

        <SumOfMoney />
      </article>
    </ProjectCostCalculatorContext.Provider>
  );
};

export default dynamic(() => Promise.resolve(ProjectCostCalculator), {
  ssr: false,
});
