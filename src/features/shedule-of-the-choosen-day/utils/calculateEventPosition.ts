import { Event } from "../types";

const calculateEventPosition = (event: Event) => {
  const start = event.startDate;
  const end = event.endDate;

  const startBlock = start.getHours() * 4 + Math.floor(start.getMinutes() / 15);
  const endBlock = end.getHours() * 4 + Math.floor(end.getMinutes() / 15);

  return {
    gridRowStart: startBlock + 1,
    gridRowEnd: endBlock + 1,
  };
};

export default calculateEventPosition;
