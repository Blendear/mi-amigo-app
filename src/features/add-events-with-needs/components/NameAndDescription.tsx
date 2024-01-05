import styles from "src/styles/sass/styles-all.module.scss";

const NameAndDescription = ({ formDataRef, onChange }) => {
  return (
    <div className={styles["event-manager__form__name-and-description"]}>
      <label>
        Name
        <input
          type="text"
          placeholder={formDataRef.current.name}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </label>

      <label>
        Description
        <textarea
          placeholder={formDataRef.current.description}
          onChange={(e) => onChange("description", e.target.value)}
        />
      </label>
    </div>
  );
};
export default NameAndDescription;
