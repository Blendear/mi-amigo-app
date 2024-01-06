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
  aspectRatio?: number;
  src: string;
  alt?: string;
};
