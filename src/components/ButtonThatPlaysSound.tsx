import styles from "@/styles/sass/styles-all.module.scss";
import ReactHowler from "react-howler";
import { useState } from "react";

const ButtonThatPlaysSound = ({ src }) => {
  //
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleSound = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <>
      <ReactHowler src={src} playing={isPlaying} />
      <button onClick={handleToggleSound} className={styles["submit-btn"]}>
        Play Sound
      </button>
      ;
    </>
  );
};

export default ButtonThatPlaysSound;
