import styles from "@/styles/sass/styles-all.module.scss";
import { v4 as uuidv4 } from "uuid"; // Import uuidv4 for generating unique IDs
import { useContext } from "react";
import EventDisplayContext from "../context/EventDisplayContext";

const AddOnType = ({ type }) => {
  const { formDataRef, handleDataChange, isShowing } =
    useContext(EventDisplayContext);

  // const handleAddOnsChange = (content, contentType, value) => {
  //   const updatedAddOns = { ...formDataRef.current.addOnsByVariants };

  //   if (!updatedAddOns[type]) {
  //     updatedAddOns[type] = {};
  //   }

  //   if (!updatedAddOns[type][content]) {
  //     updatedAddOns[type][content] = [];
  //   }

  //   const addOn = { ...updatedAddOns[type][content][0] };

  //   if (!addOn.id) {
  //     addOn.id = uuidv4();
  //   }

  //   if (!addOn[content]) {
  //     addOn[content] = {};
  //   }

  //   addOn[content][contentType] = value;

  //   updatedAddOns[type][content][0] = addOn;

  //   handleDataChange(formDataRef, "addOnsByVariants", updatedAddOns);
  // };

  return (
    <div className={styles["event-manager__form__add-ons__type"]}>
      <h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>

      {/* Input for the specified type name */}
      {/* <label>
        Name:
        <input
          type="text"
          placeholder={formDataRef.current.addOnsByVariants[type]?.name || ""}
          onChange={(e) => handleAddOnsChange("name", "text", e.target.value)}
        />
      </label> */}

      {/* Input for description of the specified type */}
      {/* <label>
        Description:
        <input
          type="text"
          placeholder={
            formDataRef.current.addOnsByVariants[type]?.description || ""
          }
          onChange={(e) =>
            handleAddOnsChange("description", "text", e.target.value)
          }
        />
      </label> */}

      {/* Input for image path of the specified type */}
      {/* <label>
        Image Path:
        <input
          type="text"
          placeholder={
            formDataRef.current.addOnsByVariants[type]?.imagePath || ""
          }
          onChange={(e) =>
            handleAddOnsChange("imagePath", "text", e.target.value)
          }
        />
      </label> */}

      {/* Input for link content of the specified type */}
      {/* <label>
        Link Content:
        <input
          type="text"
          placeholder={
            formDataRef.current.addOnsByVariants[type]?.contentAsLink || ""
          }
          onChange={(e) =>
            handleAddOnsChange("contentAsLink", "text", e.target.value)
          }
        />
      </label> */}

      {/* Input for text content of the specified type */}
      {/* <label>
        Text Content:
        <input
          type="text"
          placeholder={
            formDataRef.current.addOnsByVariants[type]?.contentAsText || ""
          }
          onChange={(e) =>
            handleAddOnsChange("contentAsText", "text", e.target.value)
          }
        />
      </label> */}
    </div>
  );
};

export default AddOnType;
