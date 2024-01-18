import styles from "@/styles/sass/styles-all.module.scss";
import { NeedsFullfilledProps } from "../types/index";
import ImageWithWrapper from "@/components/ImageWithWrapper";

const needsImagePaths = {
  isWant: "https://placehold.co/600x400",
  isCreate: "https://placehold.co/600x500",
  isAbsorb: "https://placehold.co/600x600",
  isChill: "https://placehold.co/600x700",
  isVent: "https://placehold.co/600x800",
  isSquad: "https://placehold.co/600x900",
  isActive: "https://placehold.co/600x100",
  isWilderness: "https://placehold.co/600x300",
  isFresh: "https://placehold.co/600x200",
};

const NeedsFullfilled = ({ needs }: NeedsFullfilledProps) => {
  return (
    <ul className={styles["event-data-display__needs-fulfilled"]}>
      {Object.keys(needs).map((need, index) => (
        <li key={need}>
          <ImageWithWrapper
            src={needsImagePaths[need]}
            width="100%"
            height="100%"
            wrapperClassName={needs[need] ? "" : styles["disabled"]}
          />
          {(index === 0 || index > 4) && (
            <ImageWithWrapper
              src={needsImagePaths[need]}
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
