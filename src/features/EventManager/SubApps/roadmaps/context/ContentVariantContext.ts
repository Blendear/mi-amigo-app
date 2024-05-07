import { createContext } from "react";
import { ContentVariantContextType } from "../types";

export const ContentVariantContext = createContext<ContentVariantContextType>(
  {} as ContentVariantContextType
);
