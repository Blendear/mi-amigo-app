import React from "react";
import { Subapp } from "@/types";

export type HandleDataChange = (
  formDataRef: React.MutableRefObject<EventWithNeeds>,
  field: string,
  value: any
) => void;

export type EventDisplayContextType = {
  isShowing: React.MutableRefObject<boolean>;
  formDataRef: React.MutableRefObject<EventWithNeeds>;
  handleDataChange: HandleDataChange;
  currentChapterOfInfo: CurrentChapterOfInfo;
  setCurrentChapterOfInfo: React.Dispatch<
    React.SetStateAction<CurrentChapterOfInfo>
  >;
  workflowVariantIndex: React.MutableRefObject<number>;
  worfklowStepIndex: React.MutableRefObject<number>;
  workflowBookOfAddonsIndex: React.MutableRefObject<number>;
};

export type CurrentChapterOfInfo =
  | "workflows"
  | "needsFullfilled"
  | "timeBounding"
  | "vocalNotifications";

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

export type EventDisplayProps =
  | { variant: "creating" }
  | { variant: "editing"; event: EventWithNeeds }
  | { variant: "showing"; event: EventWithNeeds };

export type NeedsFullfilledProps = {
  needs: {};
};

export type Chapter = {
  name: CurrentChapterOfInfo;
  svg: React.ReactNode;
};

export type WorkflowsProps = {};

export type StepsProps = {};

export type DangerZoneButtonsProps = {};

export type SwiperCustomProps = {
  swiperContainerCss: {};
  spaceBetweenSlides?: string;
  activeSlide?: number;
  setActiveSlide?: (
    newIndex
  ) => void | React.Dispatch<React.SetStateAction<number>>;
  // "forceUpdate" is used when the "activeSlide" is saved as a "useRef"
  // Storing a "activeSlide" inside a "useState" would auto-rerender, but
  // in this case, "forceUpdate" will force a rerender of the component
  // in which it's "useState" is stored (for example the parent component)
  forceUpdate?: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export type WorkflowVariantsProps = {};

export type PortalesqueLinkProps = {};

export type DescriptionWithImagesProps = {};
