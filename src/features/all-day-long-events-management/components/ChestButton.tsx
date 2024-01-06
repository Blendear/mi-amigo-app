import styles from "src/styles/sass/styles-all.module.scss";
import { ImageWithWrapper } from "../../..";
import { ChestButtonProps } from "..";

const ChestButton = ({ onClick }: ChestButtonProps) => {
  return (
    <button onClick={onClick} className={styles["event-manager__chest-button"]}>
      <ImageWithWrapper
        src="https://img.lovepik.com/free-png/20210928/lovepik-treasure-chest-png-image_401721161_wh1200.png"
        width="10rem"
      />
    </button>
  );
};

export default ChestButton;
