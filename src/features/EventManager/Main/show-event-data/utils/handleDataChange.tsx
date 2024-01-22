import { EventWithNeeds } from "../types";

const handleDataChange = (
  formDataRef: React.MutableRefObject<EventWithNeeds>,
  field: string,
  value: any
) => {
  const fields = field.split(".");

  if (fields.length === 1) {
    // If it's a top-level field
    formDataRef.current = {
      ...formDataRef.current,
      [field]: value,
    };
  } else if (fields.length > 1) {
    // If it's a nested field
    formDataRef.current = {
      ...formDataRef.current,
      [fields[0]]: {
        ...formDataRef.current[fields[0]],
        [fields[1]]: value,
      },
    };
  }
};

export default handleDataChange;
