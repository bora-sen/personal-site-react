import { createContext, useState } from "react";

export const MainContext = createContext();

export default function MainContextProvider({children}){
    const [isLoading,setIsLoading] = useState(true);

    const data = {
        isLoading,
        setIsLoading
    }

    return (
        <MainContext.Provider value={data}>
            {children}
        </MainContext.Provider>
    )
}