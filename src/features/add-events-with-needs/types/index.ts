export interface EventWithNeeds
  extends Omit<IdentifiableObjectWithVisuals, "id"> {
  eventGroupId: string;
  eventInstanceId: string;
  GIFPath: string;
  isAllDayLong: boolean; // false = is timed
  allDayLongVariantProps: {
    importance: 0 | 1 | 2;
    date: Date;
  };
  timedVariantProps: {
    startDateAndTime: Date;
    endDateAndTime: Date;
  };
  hasDeadline: boolean;
  addOns: {
    traps: EventAddon[];
    protips: EventAddon[];
    places: EventAddon[];
    programs: EventAddon[];
    objects: EventAddon[];
  };
  needsFulfilled: {
    isWant: boolean;
    isCreate: boolean;
    isAbsorb: boolean;
    isChill: boolean;
    isVent: boolean;
    isSquad: boolean;
    isActive: boolean;
    isWilderness: boolean;
    isFresh: boolean;
  };
  vocalNotifications: {
    startEventSound: string;
    xMinutesBeforeStartAmount: null | number;
    xMinutesBeforeStartSound: string;
    endEventSound: string;
  };
}

export interface IdentifiableObjectWithVisuals {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  imageAltText: string;
}

export interface EventAddon extends IdentifiableObjectWithVisuals {
  isLink: boolean;
}

export type ScheduleOfTimedEvents = {
  // 'number' type is safe enough, since a calendar and time-picker will handle the ranges
  [year: number]: {
    [month: number]: {
      [day: number]: [EventWithNeeds[]];
    };
  };
};

export type AllDBDataOfUser = {
  eventsManager: {
    libraryOfEventsExamples: EventWithNeeds[];
    chestOfAllDayLongEvents: EventWithNeeds[];
    scheduleOfTimedEvents: ScheduleOfTimedEvents;
  };
};

export type EventFormSegmentProps = {
  formDataRef: any;
  onChange: (field: string, value: any) => void;
};
