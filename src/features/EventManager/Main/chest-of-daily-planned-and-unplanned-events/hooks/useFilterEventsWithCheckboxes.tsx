import React, { useState } from "react";

export const useFilterEventsWithCheckboxes = (initialState) => {
  const [filters, setFilters] = useState(initialState);

  const handleCheckboxChange = (name, checked) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const filterEvents = (events) => {
    return events.filter((event) => {
      return Object.entries(filters).every(([filterKey, filterValue]) => {
        if (filterValue && Array.isArray(event.needsFulfilledByVariant)) {
          return event.needsFulfilledByVariant.includes(filterKey);
        }
        return true;
      });
    });
  };

  return { filters, handleCheckboxChange, filterEvents };
};
