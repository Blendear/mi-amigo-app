/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import { useState } from "react";
import { TitleBarWithTogglableContent } from "@/components/TitleBarWithTogglableContent";
import { FaLink } from "react-icons/fa";

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
    <div css={{ marginTop: "4rem" }}>
      <TitleBarWithTogglableContent
        titleBarContent={<h2 css={universalCss.container}>Ćwiczenia</h2>}
      >
        <div
          css={{
            "& *": {
              fontSize: "2rem",
            },
          }}
        >
          {contentChosen.exercisesWithSolutions.length > 0 && (
            <>
              <div
                css={{
                  border: `1px solid white`,
                }}
              >
                <ImageWithWrapper
                  src={
                    contentChosen.exercisesWithSolutions[activeExerciseIndex]
                      .imagePath
                  }
                  width="100%"
                  aspectRatio="946/713"
                />
              </div>

              {/* Buttons for navigation */}
              <div
                css={css`
                  display: flex;
                  justify-content: space-between;
                  margin-top: 20px;
                `}
              >
                {/* <button
              onClick={handleSetToFirst}
              disabled={activeExerciseIndex === 0}
            >
              First
            </button> */}
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
                {/* <button
              onClick={handleSetToLast}
              disabled={activeExerciseIndex === totalExercises - 1}
            >
              Last
            </button> */}
              </div>
            </>
          )}

          {contentChosen.linksToExercises && (
            <div
              css={{
                marginTop: "6rem",
                width: "max-content",
                display: "grid",
                gap: "3rem",
              }}
            >
              {contentChosen.linksToExercises.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  css={{ display: "grid", gridAutoFlow: "column" }}
                >
                  <FaLink />
                  <p>{link}</p>
                </a>
              ))}
            </div>
          )}
        </div>
      </TitleBarWithTogglableContent>
    </div>
  );
};
