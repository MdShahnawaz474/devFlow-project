"use client"

import React, { useContext,createContext, useState, useEffect } from "react"

interface themeContextType{
    mode:string,
    setMode:(mode:string)=>void
}

const ThemeContext = createContext<themeContextType| undefined> (undefined);

export function ThemeProvider({children}:{children:React.ReactNode}){
    const [mode,setMode] = useState("");

    const handleThemeChange = ()=>{
        if(mode==="dark"){
            setMode("light")
            document.documentElement.classList.add("light");
        }else{
            setMode("dark")
            document.documentElement.classList.add("dark");
        }
    }

    useEffect(()=>{
        handleThemeChange()
    },[mode])

    return(
        <ThemeContext.Provider value={
            {mode,setMode}
        }>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme (){
    const context = useContext(ThemeContext);
    if(context === undefined){
        throw new Error("Use theme must be used withinng a themeProvider");
    }
    return context;
}

