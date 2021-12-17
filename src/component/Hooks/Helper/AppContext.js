import React, {useState, createContext } from 'react';

function AppContext() {
    const LangContext = createContext();    
    const LangProvider = (props) => {
        const [lang, setLang] = useState("Indonesia");
        const changeLang = e => setLang(e.target.value);
        const langState = {lang, changeLang};
        
        return (
            <LangContext.Provider value={langState}>
                {props.children}
            </LangContext.Provider>
        )
    }
    
    const ThemeContext = createContext();
    const ThemeProvider = (props) => {
        const [theme, setTheme] = useState("Light");
        const changeTheme = e => setTheme(e.target.value);
        const themeState = {theme, changeTheme};

        return (
            <ThemeContext.Provider value={themeState}>
                {props.children}
            </ThemeContext.Provider>
        )

    }
    
    return { 
        LangContext,
        LangProvider,
        ThemeContext,
        ThemeProvider
    };
}
 
export default AppContext();