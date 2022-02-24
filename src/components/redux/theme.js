import { createSlice } from "@reduxjs/toolkit";

const initialTheme = {
    theme : localStorage.getItem("theme")
}
const ThemeContext = createSlice({
    name: "theme",
    initialState :  initialTheme,
    reducers: {
        DarkTheme : (state) => {
           localStorage.setItem("theme", "dark")
            document.body.classList.add("darkmode")
            state.value = "dark"

        },
        LightTheme : (state) => {
            localStorage.setItem("theme", "light")
            document.body.classList.remove("darkmode");
            state.value = "light"
        }
    }
})

export default ThemeContext.reducer
export const {LightTheme,DarkTheme} = ThemeContext.actions