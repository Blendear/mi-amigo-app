import styles from "@/styles/sass/styles-all.module.scss";

const TimeBlocks15Minutes = ({ activeBlockNr }) => {
  return (
    <>
      {[...Array(24 * 4).keys()].map((block) => (
        <div
          key={block}
          className={`${styles["schedule__container"]} ${
            block === activeBlockNr
              ? styles["schedule__grid__time-blocks__block--active"]
              : ""
          }`}
        >
          <span>
            {String(Math.floor(block / 4)).padStart(2, "0")}:
            {String((block % 4) * 15).padStart(2, "0")}
          </span>
        </div>
      ))}
    </>
  );
};

export default TimeBlocks15Minutes;
