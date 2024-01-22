import React from "react";
import { Subapp } from "@/types";

export type HandleDataChangeProps = {
  formDataRef: React.MutableRefObject<EventWithNeeds>;
  field: string;
  value: any;
};

export type EventDisplayContextType = {
  formDataRef: React.MutableRefObject<EventWithNeeds>;
  handleDataChange: HandleDataChangeProps;
};

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
      subApps?: Subapp[];
      traps?: EventAddon[];
      protips?: EventAddon[];
      places?: EventAddon[];
      programs?: EventAddon[];
      objects?: EventAddon[];
      workflows?: EventAddon[];
    };
  };
  needsFulfilledByVariant: {
    [nameOfVariant: string]: {
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

export interface EventAddon {
  name: string;
  description?: string;
  imagePath: string;
  contentAsLink?: string;
  contentAsText?: string;
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
  onChange: (
    a: React.MutableRefObject<EventWithNeeds>,
    field: string,
    value: any
  ) => void;
};

export type EditOrCreateEventFormProps = {
  isCreatingANewEvent: boolean;
};

export type NeedsFullfilledProps = {
  needs: {};
};

export type TogglersOfChaptersProps = {};

export type ChapterOfInfoProps = {};

export type WorkflowsProps = {};

export type StepsProps = {};

export type DangerZoneButtonsProps = {};
