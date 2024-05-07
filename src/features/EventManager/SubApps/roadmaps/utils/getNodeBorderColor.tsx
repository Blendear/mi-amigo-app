export const getNodeBorderColor = (node) => {
  return {
    "past deadline": "red",
    "today or tomorrow": "orange",
    "3-7 days": "yellow",
    "over a week": "green",
    "TODO: create it": "purple",
  }[
    (() => {
      const dateNow = new Date();

      const lastRepeatDate = new Date(node.data.lastRepeatDateString);

      const differenceInDays = Math.floor(
        (dateNow.getTime() - lastRepeatDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      const deadlineOfRepetition =
        node.data.daysBeforeRepetitionNeeded - differenceInDays;

      let colorOfBorder = "";

      if (deadlineOfRepetition < 0) {
        colorOfBorder = "past deadline";
      } else if (deadlineOfRepetition === 0) {
        colorOfBorder = "today or tomorrow";
      } else if (deadlineOfRepetition <= 2) {
        colorOfBorder = "today or tomorrow";
      } else if (deadlineOfRepetition <= 7) {
        colorOfBorder = "3-7 days";
      } else if (deadlineOfRepetition <= 30) {
        colorOfBorder = "over a week";
      } else {
        colorOfBorder = "TODO: create it";
      }

      return colorOfBorder;
    })()
  ];
};
