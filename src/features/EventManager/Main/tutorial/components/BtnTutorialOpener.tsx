import { BsQuestion } from "react-icons/bs";
import { useRouter } from "next/router";
import { Tutorial } from "./Tutorial";

export const BtnTutorialOpener = ({ tutorialName }) => {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => {
          router.push({
            pathname: router.pathname,
            query: { ...router.query, tutorial: tutorialName },
          });
        }}
      >
        <BsQuestion title="Question mark" />
      </button>
      <Tutorial name={tutorialName} />
    </>
  );
};
