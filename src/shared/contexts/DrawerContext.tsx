import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

interface IDrawerContextData{
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;    
}

const DrawerContext = createContext( {} as IDrawerContextData) ;

export const useDrawerContext = () =>{
    return useContext(DrawerContext);
};

interface IAppThemeProviderProps{
    children?: React.ReactNode;
}

export default function DrawerProvider(props: IAppThemeProviderProps){

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    
    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen( oldDrawerOpen => !oldDrawerOpen);
    },[]);    
    return (        
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen}}>            
            {props.children}            
        </DrawerContext.Provider>            
    );
}