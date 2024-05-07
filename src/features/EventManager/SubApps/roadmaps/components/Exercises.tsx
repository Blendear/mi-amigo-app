/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { useState } from "react";

export const Exercises = ({ contentChosen }) => {
  const [activeExerciseIndex, setActiveExerciseIndex] = useState(0);

  const totalExercises = contentChosen.exercisesWithSolutions.length;

  const handleSetExerciseIndex = (index) => {
    setActiveExerciseIndex(index);
  };

  const handleSetToFirst = () => {
    setActiveExerciseIndex(0);
  };

  const handleSetToLast = () => {
    setActiveExerciseIndex(totalExercises - 1);
  };

  const handleIncrementIndex = () => {
    setActiveExerciseIndex((prevIndex) =>
      Math.min(prevIndex + 1, totalExercises - 1)
    );
  };

  const handleDecrementIndex = () => {
    setActiveExerciseIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div>
      <h2 css={universalCss.container}>Ćwiczenia</h2>

      <ImageWithWrapper
        src={
          contentChosen.exercisesWithSolutions[activeExerciseIndex].imagePath
        }
        width="100%"
        aspectRatio="16/9"
      />

      {/* Buttons for navigation */}
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        `}
      >
        <button onClick={handleSetToFirst} disabled={activeExerciseIndex === 0}>
          First
        </button>
        <button
          onClick={handleDecrementIndex}
          disabled={activeExerciseIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={handleIncrementIndex}
          disabled={activeExerciseIndex === totalExercises - 1}
        >
          Next
        </button>
        <button
          onClick={handleSetToLast}
          disabled={activeExerciseIndex === totalExercises - 1}
        >
          Last
        </button>
      </div>
    </div>
  );
};
