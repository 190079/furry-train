import { createSlice } from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {createStore} from 'redux';


const initialTheme = {
    theme : localStorage.getItem("theme") ?? "light"
}

const ThemeContext = createSlice({
    name: "theme",
    initialState :  initialTheme,
    reducers: {
        DarkTheme : (state) => {
            state.theme = "dark"
           localStorage.setItem("theme", "dark")
            document.body.classList.add("darkmode")

        },
        LightTheme : (state) => {
            state.theme = "light"
            localStorage.setItem("theme", "light")
            document.body.classList.remove("darkmode");
        }
    }
})

const theme = createStore(ThemeContext.reducer);

export const ThemeProvider = ({children}) => {
    console.log(theme)
    return <Provider store={theme}>
        {children}
    </Provider>
}

export const {LightTheme,DarkTheme} = ThemeContext.actions
export default ThemeContext.reducer
