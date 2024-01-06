import styles from "src/styles/sass/styles-all.module.scss";
import { ImageWithWrapper } from "../../..";
import { ChestButtonProps } from "..";

const ChestButton = ({ onClick }: ChestButtonProps) => {
  return (
    <button onClick={onClick} className={styles["event-manager__chest-button"]}>
      <ImageWithWrapper
        src="https://static.vecteezy.com/system/resources/previews/022/913/766/non_2x/game-equipment-chest-illustration-3d-png.png"
        width="10rem"
      />
    </button>
  );
};

export default ChestButton;
