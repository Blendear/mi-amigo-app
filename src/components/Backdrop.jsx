//
//~~ _.  Backdrop - background behind the modal component
//
//       _._. Backdrop container
//
//       _._. Portal - needed for putting the component on the top level of HTML <body> element
//

// hook2 - make the html semantic

import styles from "src/styles/sass/styles-all.module.scss";
import ReactDOM from "react-dom";

const Backdrop = ({ onClose, variant }) => {
  const backdropContent = (
    //
    //       _._. Backdrop container
    //
    <aside onClick={onClose} className={styles[`backdrop--${variant}`]} />
  );
  //
  //       _._. Portal - needed for putting the component on the top level of HTML <body> element
  //
  return ReactDOM.createPortal(
    backdropContent,
    document.getElementById("backdrop")
  );
};
export default Backdrop;
