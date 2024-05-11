import { UserChoicesType } from "@/features/EventManager/Main/chooser/types";
import React from "react";

export type OptimisticAndPessimisticValue = {
  optimistic: number;
  pessimistic: number;
};

export type SumOfHoursByRateType = {
  sprintCall: OptimisticAndPessimisticValue;
  logicalProblemsolving: OptimisticAndPessimisticValue;
  creativeProblemsolving: OptimisticAndPessimisticValue;
};

export type ProjectVariantType = {
  name: string;
  imagePath: string;
  projects: ProjectType[];
};

export type SpecificFeatureType = {
  // userStory's will be written at first, during the cal with the client
  // The developer will then write the feature properties accordingly
  userStory: string;

  featureBuildingBlocks: {
    name: string;
    // Used for explaining something about this block to the client, for example why it's
    // so hard or event more precisely about what this block means etc.
    developerComment: string;
    // if true, it will makr the whole building block as "needs research before calculation will be possible"
    needsResearchBeforeCalculationWillBePossible: boolean;
    // For example buying stock images
    thirdPartyCosts: number;

    // Funcitonality of button = logical
    // Creating a pre-given design of button = logical
    // Creating a handcrafted design of button = creative
    timeRangesByVariant: {
      logicalProblemsolving: TimeRangesVariantType;
      creativeProblemsolving: TimeRangesVariantType;
    };

    statesThatMultiplyTheTimeSum: StatesThatMultiplyTheTimeSumType;

    copiesAmounts: {
      "100%": number; // 3 same svg's
      "75-99%": number; // -II- but each with different name and color
      "50-74%": number; // -II- but each with different onHover animation
    };
  }[];
};

export type TimeRangesVariantType = {
  timeRange: { optimistic: TimeRangeType; pessimistic: TimeRangeType };
};

// More than 480 minutes aka 4 hours = You should break it down into smaller parts
export type TimeRangeType = "5-30" | "30-60" | "60-120" | "120-240" | "240-480";

export type CalculationContentOfWebApp = {
  defaultStatesThatMultiplyTheTimeSum: // NOT the same type as "StatesThatMultiplyTheTimeSumType", since it also needs the possibleOptions prop to
  // dynamically create the radio buttons
  {
    translationAutomatically: {
      value: "no" | "yes";
      possibleOptions: ["no", "yes"];
    };
    responsiveForBrowsers: {
      value: "single" | "all";
      possibleOptions: ["single", "all"];
    };
    responsiveForScreenSizes: {
      value: "1" | "2" | "3";
      possibleOptions: ["1", "2", "3"];
    };
    responsiveForDisabilities: {
      value: "no" | "yes";
      possibleOptions: ["no", "yes"];
    };
    stylisationDesign: {
      value: "mvp" | "design basic" | "design unique";
      possibleOptions: ["mvp", "design basic", "design unique"];
    };
    stylisationAnimationAmountOfStates: {
      value: "0" | "1" | "2" | "3" | "4" | "5";
      possibleOptions: ["0", "1", "2", "3", "4", "5"];
    };
    stylisationAnimationAmountOfComplexStates: {
      value: "0" | "1" | "2" | "3" | "4" | "5";
      possibleOptions: ["0", "1", "2", "3", "4", "5"];
    };
  };

  specificFeatures: SpecificFeatureType[];

  multipliersForAllFeaturesAsOne: {
    crunch: 0;
    payment: 0;
  };
};

export type StatesThatMultiplyTheTimeSumType = {
  // will be used to set the default values of the items inside specificFeatures array
  translationAutomatically: "no" | "yes";
  responsiveForBrowsers: "single" | "all";
  responsiveForScreenSizes: "1" | "2" | "3"; // Out of 3 possible, so mobile, tablet, desktop
  responsiveForDisabilities: "no" | "yes";
  stylisationDesign: "mvp" | "design basic" | "design unique";
  // Usually there's one/two, but some creative ideas will have more
  // like "depending on the mouse and screen position and onHover, onClick etc."
  stylisationAnimationAmountOfStates: "0" | "1" | "2" | "3" | "4" | "5";
  // 2 = two of the amount of state swill be complex
  stylisationAnimationAmountOfComplexStates: "0" | "1" | "2" | "3" | "4" | "5";
};

export type ProjectType = {
  name: string;
  imagePath: string;
  // There will be other types added for concept art, 3d modelling etc.
  //
  // But all will have the 3 main props, defaultStatesThatMultiplyTheTimeSum,
  // specificFeatures and multipliersForAllFeaturesAsOne
  // TODO: Create a parent that forces such a structure
  calculationContent: CalculationContentOfWebApp | {};
};

export type ProjectCostCalculatorContextType = {
  hourlyRate: React.MutableRefObject<{
    sprintCall: number;
    logicalProblemsolving: number;
    creativeProblemsolving: number;
  }>;

  projectsAvailable: React.MutableRefObject<ProjectVariantType[]>;

  sumOfHoursByRateType: React.MutableRefObject<SumOfHoursByRateType>;

  multipliersForAllFeaturesAsOne: React.MutableRefObject<{
    [key: string]: number;
  }>;

  finalMultiplier: React.MutableRefObject<number>;
  sumOfTime: React.MutableRefObject<OptimisticAndPessimisticValue>;
  sumOfMoney: React.MutableRefObject<OptimisticAndPessimisticValue>;
  updateHoursNumber;
};

export type ProjectDefaultCheckboxesAndFeaturesContextType = {
  userChoicesRef: React.MutableRefObject<UserChoicesType>;
};

export type DefaultStateProps = {
  stateName: string;
  radioValues: string[];
};

export type DefaultCheckboxStatesSettersContextType = {};

export type AComponentProps = {};

export type CrunchProps = {};

export type GlobalModifiersProps = {};

export type HourlyRateProps = {};

export type PaymentProps = {};

export type ProjectGlobalAndSpecificAspectsProps = {};

export type SpecificFeaturesProps = {};

export type SumOfMoneyProps = {};

export type SumOfTimeProps = {};

export type AdditionalTopicsToDiscussProps = {};
