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

export type AddOn = {
  habits?: number[]; // id's of habits
  howAndTips?: HowAndTips;
  toolsWhere?: Tool[];
  toolsSubApps?: Subapp[]; // data to locate and equip the subapp
  toolsPhysicalOrThirdParty?: Tool[];
};

export interface EventWithNeeds
  extends Omit<IdentifiableObjectWithVisuals, "id"> {
  eventGroupId: number; // main id, used to identify the event
  eventInstanceId: number; // used for editing 1 of X copies of this event
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
    // "Wrld", "Infiniti" etc.
    [variantName: string]: {
      // "Figma", "React", "Css" etc.
      [stepName: string]: AddOn;
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

export type Note = { title: string; description: string };

export type HowAndTips = {
  ytVideoId: string;
  notes: Note[];
};

export type Tool = {
  title: string;
  linkURL?: string;
  imageOrGifPath: string;
};

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
  | {
      variant: "showing";
      event: EventWithNeeds;
    };

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
  additionalOnSlideChange?: () => void;
  children: React.ReactNode;
};

export type WorkflowVariantsProps = {};

export type PortalesqueLinkProps = {
  title: string;
  linkURL: string;
  imageOrGifPath: string;
};

export type DescriptionWithImagesProps = {};

export type WhereAndToolsProps = { content: Tool[] | Subapp[] };

export type HabitsProps = {};

export type HowAndTipsProps = { content: HowAndTips };

export type EventDisplaySmallProps = {
  event: EventWithNeeds;
};
