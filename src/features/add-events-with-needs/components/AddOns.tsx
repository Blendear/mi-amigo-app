import styles from "src/styles/sass/styles-all.module.scss";

const AddOns = ({ formDataRef, onChange }) => {
  return (
    <div className={styles["event-manager__form__add-ons"]}>
      <label>
        Trap:
        <input
          type="text"
          placeholder={formDataRef.current.addOns.traps[0]?.name || ""}
          onChange={(e) => console.log("TODO: onChange from Trap")}
        />
      </label>
    </div>
  );
};
export default AddOns;
