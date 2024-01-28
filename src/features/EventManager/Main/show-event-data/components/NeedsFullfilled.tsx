import React, { useState } from "react";
import styles from "@/styles/sass/styles-all.module.scss";
import { NeedsFullfilledProps } from "../types/index";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import needsImagePaths from "../data/needsImagePaths";
import { useContext } from "react";
import EventDisplayContext from "../context/EventDisplayContext";
import needsFulfilled from "../data/needsFulfilled";

const needs = needsFulfilled;

const NeedsFullfilled = () => {
  const { formDataRef, handleDataChange } = useContext(EventDisplayContext);

  const [selectedVariant, setSelectedVariant] = useState("");

  const handleVariantClick = (variant) => {
    setSelectedVariant(variant);
  };

  return (
    <>
      <div>
        {/* Render buttons for each variant */}
        {Object.keys(needs).map((variant) => (
          <button
            className={styles["submit-btn"]}
            style={
              selectedVariant === variant
                ? {}
                : { backgroundColor: "black", color: "white" }
            }
            key={variant}
            onClick={() => handleVariantClick(variant)}
            // className={
            //   selectedVariant === variant ? styles["selected-variant"] : ""
            // }
          >
            {variant}
          </button>
        ))}
      </div>

      {/* Render needs for the selected variant */}
      <ul className={styles["event-data-display__needs-fulfilled"]}>
        {selectedVariant &&
          Object.keys(needs[selectedVariant]).map((need, index) => (
            <li key={need}>
              {/* Render your ImageWithWrapper and other content here */}
              <ImageWithWrapper
                src={needsImagePaths[need].ifTrue || needsImagePaths[need]}
                width="100%"
                height="100%"
                // wrapperClassName={
                //   needs[selectedVariant][need] ? "" : styles["disabled"]
                // }
              />
              {(index === 0 || index > 4) && (
                <ImageWithWrapper
                  src={needsImagePaths[need].ifFalse}
                  width="100%"
                  height="100%"
                  // wrapperClassName={`${
                  //   needs[selectedVariant][need] ? styles["disabled"] : ""
                  // }`}
                />
              )}
              {/* Add other content as needed */}
              <p
                className={
                  needs[selectedVariant][need] ? "" : styles["disabled"]
                }
              >
                {need}
              </p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default NeedsFullfilled;
