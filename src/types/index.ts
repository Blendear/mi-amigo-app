import HowAndTips from "@/features/EventManager/Main/show-event-data/components/HowAndTips";
import { EventWithNeeds } from "@/features/EventManager/Main/show-event-data/types";

export type Chunk = {
  isAuthenticated: boolean;
};

export interface DialogModalProps {
  isOpen: boolean;
  onClose: () => void;
  zIndex?: number;
  children: React.ReactNode;
}

export type ImageWithWrapperProps = {
  width?: string;
  height?: string;
  aspectRatio?: string;
  src: string;
  alt?: string;
  wrapperCss?: {};
};

export type SubappPayloads = {
  "yt-video-watcher": {
    ytVideoIds: string[];
  };
  // Add more subapps and their respective payload types as needed
};

export type Subapp = {
  subappName: keyof SubappPayloads;
  payload: SubappPayloads[keyof SubappPayloads];
};

export type RGBColorString = string | `rgb(${string})`;

export type YouTubeVideoIFrameProps = {};

export type ModifyContentButtonsProps = {};

export type AppDataOfCurrentUser = {
  eventsWithNeeds: {
    chestWithAllDayLongEvents: {
      necessary: EventWithNeeds[];
      oneDay: EventWithNeeds[];

      // temporarily added here, before creating separate places for them
      libraryOfTemplateEvents?: EventWithNeeds[];
      monstersManual?: EventWithNeeds[];
    };
    libraryOfTemplateEvents: EventWithNeeds[];
    sheduleOfHourlyPlannedEvents: any[]; // TODO: TS types and implement
  };
};
