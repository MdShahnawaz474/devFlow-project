"use client";

import React, { useContext, createContext, useState, useEffect } from "react";

interface ThemeContextType {
    mode: string;
    setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    // Set initial state for mode
    const [mode, setMode] = useState(""); 

    const handleThemeChange = () => {
        
        if (localStorage.theme ==="dark" || !("theme" in localStorage)&& window.matchMedia ("(prefers-color-scheme :dark )").matches) {
            setMode("dark")
            document.documentElement.classList.add("dark");
        } else {
            setMode("light")
            
            document.documentElement.classList.remove("dark");
        }
    };

    useEffect(() => {
        handleThemeChange();
    }, [mode]);

    console.log(mode);
    
    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider"); // Corrected error message
    }
    return context;
}
