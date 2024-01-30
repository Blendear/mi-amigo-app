/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { variables } from "@/styles/emotion-css-experiment/abstracts/variables";
import { universalCss } from "@/styles/emotion-css-experiment/abstracts/universal";
import { colors } from "@/styles/emotion-css-experiment/abstracts/colors";
import { HowAndTipsProps } from "../types";
import EditableYTVideo from "@/features/EventManager/SubApps/subapp-yt-watcher/components/EditableYTVideo";
import { useContext } from "react";
import EventDisplayContext from "../context/EventDisplayContext";
import { useState } from "react";

const placeholderNotes = [
  { title: "...", description: "Description 1" },
  // { title: "Note 2", description: "Description 2" },
  // { title: "Note 3", description: "Description 3" },
];

const HowAndTips = ({}: HowAndTipsProps) => {
  const { isShowing, formDataRef, handleDataChange } =
    useContext(EventDisplayContext);

  const [shownDescriptionID, setShownDescriptionID] = useState<number | null>(
    null
  );

  const handleClickTitle = (index: number) => {
    if (shownDescriptionID === index) {
      setShownDescriptionID(null);
    } else {
      setShownDescriptionID(index);
    }
  };

  return (
    <section>
      <EditableYTVideo
        isShowing={!isShowing.current}
        yTvideoId={"vvdKyNpWQIg"}
      />

      <ul>
        {placeholderNotes.map((note, index) => {
          return (
            <li key={index}>
              <input
                css={[
                  universalCss.container,
                  {
                    borderColor: "purple",
                  },
                ]}
                onClick={() => handleClickTitle(index)}
                disabled={isShowing.current}
                aria-label="Title"
                type="text"
                placeholder={note.title}
                // placeholder={formDataRef.current.name}
                // onChange={(e) => handleDataChange(formDataRef, "name", e.target.value)}
              />
              {shownDescriptionID === index && (
                <div>
                  <textarea
                    css={universalCss.container}
                    disabled={isShowing.current}
                    aria-label="Description"
                    placeholder={note.description}
                    // placeholder={formDataRef.current.description}
                    // onChange={(e) =>
                    //   handleDataChange(formDataRef, "description", e.target.value)
                    // }
                  />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HowAndTips;
