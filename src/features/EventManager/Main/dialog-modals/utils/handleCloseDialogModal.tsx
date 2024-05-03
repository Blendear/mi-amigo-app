import { enableBodyOverflow } from "./enableBodyOverflow";

export const handleCloseDialogModal = (onClose: () => void) => {
    enableBodyOverflow();
    onClose();
};
