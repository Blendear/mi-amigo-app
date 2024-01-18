import styles from "@/styles/sass/styles-all.module.scss";
import { NeedsFullfilledProps } from "../types/index";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import needsImagePaths from "../data/needsImagePaths";
const NeedsFullfilled = ({ needs }: NeedsFullfilledProps) => {
  return (
    <ul className={styles["event-data-display__needs-fulfilled"]}>
      {Object.keys(needs).map((need, index) => (
        <li key={need}>
          <ImageWithWrapper
            src={needsImagePaths[need].ifTrue || needsImagePaths[need]}
            width="100%"
            height="100%"
            wrapperClassName={needs[need] ? "" : styles["disabled"]}
          />
          {(index === 0 || index > 4) && (
            <ImageWithWrapper
              src={needsImagePaths[need].ifFalse}
              width="100%"
              height="100%"
              wrapperClassName={needs[need] ? "" : styles["disabled"]}
            />
          )}
          <p className={needs[need] ? "" : styles["disabled"]}>{need}</p>
        </li>
      ))}
    </ul>
  );
};

export default NeedsFullfilled;
