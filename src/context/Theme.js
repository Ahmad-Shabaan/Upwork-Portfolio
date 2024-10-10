import { createContext , useState ,useContext, useEffect} from "react";

const ThemeContext = createContext("");
export const ThemeProvider = ({children}) =>{
    const [theme , setTheme] = useState(window.localStorage.getItem("theme") || "dark");
    useEffect(()=>{
        document.documentElement.setAttribute('data-theme', theme);
        window.localStorage.setItem("theme",theme);
    },[theme])
    return <ThemeContext.Provider value={{theme  , toggleTheme:()=>{setTheme(theme==="dark" ? "light" : "dark")}}}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext);