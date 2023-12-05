import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { LightTheme, DarkTheme } from "../themes";
import { Box, ThemeProvider } from "@mui/material";

interface IThemeContextData{
    themeName: 'light' | 'dark';
    toggleTheme: () => void;    
}

const ThemeContext = createContext( {} as IThemeContextData) ;

export const useAppThemeContext = () =>{
    return useContext(ThemeContext);
}

interface IAppThemeProviderProps{
    children?: React.ReactNode;
}

export default function AppThemeProvider(props: IAppThemeProviderProps){

    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');
    
    const toggleTheme = useCallback(() => {
        setThemeName( oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
    },[]);

    const theme = useMemo( () =>{
        if(themeName === 'light') 
            return LightTheme;
        
        return DarkTheme;

    },[themeName]);

    return (        
        <ThemeContext.Provider value={{ themeName, toggleTheme}}>
            <ThemeProvider theme={LightTheme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                     {props.children}
                 </Box>              
            </ThemeProvider>
        </ThemeContext.Provider>            
    )
}