import React, { useState } from "react";

export const CheckboxesToFilterEvents = ({ onChange }) => {
  const [checkboxes, setCheckboxes] = useState({
    isWant: false,
    isCreate: false,
    isAbsorb: false,
    isChill: false,
    isVent: false,
    isSquad: false,
    isActive: false,
    isWilderness: false,
    isFresh: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
    onChange(name, checked);
  };

  return (
    <div>
      {Object.entries(checkboxes).map(([name, checked]) => (
        <label key={name}>
          <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={handleCheckboxChange}
          />
          {name}
        </label>
      ))}
    </div>
  );
};
