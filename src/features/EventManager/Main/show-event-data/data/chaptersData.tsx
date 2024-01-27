import { FaStackOverflow } from "react-icons/fa";
import { GiSoundWaves } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";
import { TbYinYang } from "react-icons/tb";
import { Chapter } from "../types";

export const chaptersData: Chapter[] = [
  { name: "workflows", svg: <FaStackOverflow title="workflows" /> },
  { name: "needsFullfilled", svg: <TbYinYang title="workflows" /> },
  { name: "timeBounding", svg: <IoMdTime title="workflows" /> },
  { name: "vocalNotifications", svg: <GiSoundWaves title="workflows" /> },
];
