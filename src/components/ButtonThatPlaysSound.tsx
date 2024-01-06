import styles from "src/styles/sass/styles-all.module.scss";
import ReactHowler from "react-howler";
import { useState } from "react";

const ButtonThatPlaysSound = ({ src }) => {
  //
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(src);
  const handleToggleSound = () => {
    console.log(isPlaying);
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
