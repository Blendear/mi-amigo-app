export type Choice = {
  // Its a recursive way of creating a nested levels of of choices
  // If the array is empty, it means that the choice is final
  imagePath: string;
  name: string;
  choices: Choice[];
};

export type UserChoicesRefType = {
  choices: Choice[];

  // List of indexes, instead of a single one, because it can be 2+ levels of choices,
  // for example 3 choices when its  a chapter inside a chapter inside a main chapters list
  continuousChoicesIndexes: [];

  //Actual data object
  finalChoice: {};
};

export type ChooserProps = {
  userChoicesRef: React.MutableRefObject<UserChoicesRefType>;
};
