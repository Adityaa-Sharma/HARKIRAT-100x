import { createContext } from "react";

// this is like a teleporter that can send data to any component that is inside it
export const CountContext = createContext({
    count:0,
    setCount:()=>{}
});