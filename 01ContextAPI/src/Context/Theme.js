import { createContext, useContext } from "react";

let ThemContext =createContext({
    themMode: 'light',
    lightThem: ()=>{},
    DarkThem: ()=>{}
})

export const ThemeProvider = ThemContext.Provider

function useTheme() {
    return useContext(ThemContext)
}
export default useTheme;