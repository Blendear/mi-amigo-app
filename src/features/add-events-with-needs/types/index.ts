import React from "react";

export interface EventWithNeeds
  extends Omit<IdentifiableObjectWithVisuals, "id"> {
  eventGroupId: string;
  eventInstanceId: string;
  GIFPath: string;
  isAllDayLong: boolean; // false = is timed
  allDayLongVariantProps: {
    importance: "" | "necessary" | "extra";
    date: Date;
  };
  timedVariantProps: {
    startDateAndTime: Date;
    endDateAndTime: Date;
  };
  deadlineVariant: "none" | "prefer" | "must";
  addOnsByVariants: {
    [nameOfVariant: string]: {
      subApps?: EventAddon[];
      traps?: EventAddon[];
      protips?: EventAddon[];
      places?: EventAddon[];
      programs?: EventAddon[];
      objects?: EventAddon[];
      workflows?: EventAddon[];
    };
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
  contentAsLink: string;
  contentAsText: string;
}

export type ScheduleOfTimedEvents = {
  // 'number' type is safe enough, since a calendar and time-picker will handle the ranges
  [year: number]: {
    [month: number]: {
      [day: number]: EventWithNeeds[];
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

export type EditOrCreateEventFormProps = {
  isCreatingANewEvent: boolean;
};
