export type Choice = {
  // Its a recursive way of creating a nested levels of of choices
  // FinalChoice is when there's no "choices" prop, yet there is "finalChoice" prop
  imagePath: string;
  name: string;
  choices?: Choice[];
  finalChoiceContent?: FinalChoice;
};

export type UserChoicesType = {
  choices: Choice[];

  // List of indexes, instead of a single one, because it can be 2+ levels of choices,
  // for example 3 choices when its  a chapter inside a chapter inside a main chapters list
  continuousChoicesIndexes: [];

  // Actual data object
  finalChoice: FinalChoice;
};

// is "any" the only option to allow any type of data as the FinalChoice?
export type FinalChoice = any;

export type ChooserProps = {
  userChoicesRef: React.MutableRefObject<UserChoicesType>;
};
