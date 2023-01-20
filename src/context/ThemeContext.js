import React, {createContext,useState} from 'react'

export const ThemeContext = createContext();

function ThemeProvider({children}){
    const [Theme,setTheme] = useState('light');
    const data = {
        Theme,
        setTheme,
    }

    return(
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )
}
export default ThemeProvider
