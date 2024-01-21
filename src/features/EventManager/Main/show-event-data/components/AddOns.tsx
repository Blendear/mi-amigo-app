import styles from "@/styles/sass/styles-all.module.scss";
import AddOnType from "./AddOnType"; // Adjust the path based on your project structure

const AddOns = ({ formDataRef, onChange }) => {
  const types = [
    "traps",
    "protips",
    "places",
    "programs",
    "objects",
    "workflows",
  ];

  return (
    <div className={styles["event-manager__form__add-ons"]}>
      {types.map((type) => (
        <AddOnType
          key={type}
          formDataRef={formDataRef}
          onChange={onChange}
          type={type}
        />
      ))}
    </div>
  );
};

export default AddOns;
