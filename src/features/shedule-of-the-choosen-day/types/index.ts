export type Event = {
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
  image: string;
};

export type DailyScheduleProps = {
  events: Event[];
};
