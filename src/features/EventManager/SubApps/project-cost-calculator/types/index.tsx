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
  variantName: string;
  projects: ProjectType[];
};

export type ProjectType = {};

export type ProjectCostCalculatorContextType = {
  hourlyRate: React.MutableRefObject<{
    sprintCall: number;
    logicalProblemsolving: number;
    creativeProblemsolving: number;
  }>;

  projectsAvailable: React.MutableRefObject<ProjectVariantType[]>;

  chosenProjectIdentifiers: React.MutableRefObject<{
    variantIndex: number;
    projectIndex: number;
  }>;

  sumOfHoursByRateType: React.MutableRefObject<SumOfHoursByRateType>;

  multipliersForAllFeaturesAsOne: React.MutableRefObject<{
    [key: string]: number;
  }>;

  finalMultiplier: React.MutableRefObject<number>;
  sumOfTime: React.MutableRefObject<OptimisticAndPessimisticValue>;
  sumOfMoney: React.MutableRefObject<OptimisticAndPessimisticValue>;
  updateHoursNumber;
};

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
