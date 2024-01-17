import { createContext } from "react";

type AddOnsContextType = {};

const AddOnsContext = createContext<AddOnsContextType>({} as AddOnsContextType);

export default AddOnsContext;
