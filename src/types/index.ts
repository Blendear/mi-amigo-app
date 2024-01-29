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
  "video-watcher": {
    ytVideoIds: string[];
    VODLinks: string[];
  };
  // Add more subapps and their respective payload types as needed
};

export type Subapp = {
  subappName: keyof SubappPayloads;
  payload: SubappPayloads[keyof SubappPayloads];
};

export type RGBColorString = string | `rgb(${string})`;

export type YouTubeVideoIFrameProps = {};
