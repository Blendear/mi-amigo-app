export interface ModalProps {
  additionalContainerClassName?: string;
  hasBackdrop?: boolean;
  zIndex?: number;
  extraNavbarButtons?: React.ReactNode;
  // ONLY use "isOpen", when the modal shouldn't be unmounted after closing.
  // That's because some modals load a lot of heavy data, sao its more optimised.
  // Use a turnery operator ("&&") like "return 2>1 && <DialogModal...>" if
  // it is supposed to be unmounted after closing.
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export type ModalWrapperProps = Omit<ModalProps, "onClose">;

export interface DialogModalProps extends ModalProps {}

export type InformationalBackdropDialogProps = ModalProps & {
  autoCloseAfterXSeconds?: number;
};

export interface AlertDialogProps extends ModalProps {
  title: string;
  cancelBtnText: string;
  confirmBtnText: string;
  onConfirm: () => void;
}
