import React from "react";

export type OptimisticAndPessimisticValue = {
  optimistic: number;
  pessimistic: number;
};

export type ProjectCostCalculatorContextType = {
  hourlyRate: React.MutableRefObject<number>;
  numberOfHours: React.MutableRefObject<OptimisticAndPessimisticValue>;
  listOfnumbersToMultiplyTheHoursWith: React.MutableRefObject<{
    [key: string]: number;
  }>;
  finalMultiplier;
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
